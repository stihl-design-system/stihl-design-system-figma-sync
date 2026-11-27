import { createHash } from 'node:crypto';
import { readdir, readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { PNG } from 'pngjs';
import { diffImages } from '../../review/shared/pixelDiff.ts';
import type { Block, Inline } from '../extract/collectBlocks.ts';
import { describeFigure, type FigureFacts } from '../extract/figureFacts.ts';
import { imageFileName } from './exportImages.ts';

const DEFAULT_MODEL = '@cf/mistralai/mistral-small-3.1-24b-instruct';
const CONCURRENCY = 3;
const MAX_ATTEMPTS = 4;
const MAX_CAPTION_LENGTH = 700;
const MAX_CONTEXT_LENGTH = 1000;
const MAX_IMAGE_BYTES = 8 * 1024 * 1024;

export interface CaptionProvider {
  model: string;
  describe(image: Buffer, mimeType: string, prompt: string): Promise<string>;
}

/** Thrown when the account has no budget left; the run falls back to structural captions from then on */
export class CaptionQuotaError extends Error {}

const QUOTA_MESSAGE = /free allocation|quota|insufficient_quota|billing/i;

export interface CaptionCacheEntry {
  nodeId: string;
  model: string;
  caption: string;
  /** Set when someone edited the description on the review page; it is then used as is */
  editedBy?: string;
  editedAt?: string;
}

export type CaptionCache = Record<string, CaptionCacheEntry>;

export interface CaptionOptions {
  imageDir: string;
  format: 'png' | 'svg';
  document: { title: string; category: string };
  /** Undefined: use cached captions only */
  provider?: CaptionProvider;
  /**
   * The document's images before this sync exported new ones (see readImages).
   * An image without a cached caption that shows no visible change against one
   * of them, by the comparison of the design review, keeps that image's caption:
   * Figma renders a board a few antialiased pixels differently from time to
   * time, and a rebuilt page gives every board a new node id.
   */
  previousImages?: Buffer[];
  log?: (message: string) => void;
}

/**
 * Any OpenAI compatible chat completions endpoint with image input. Defaults to
 * Cloudflare Workers AI of the team account, which needs a token with Workers AI access.
 */
export function createCaptionProviderFromEnv(
  env: NodeJS.ProcessEnv = process.env
): CaptionProvider | undefined {
  const apiKey = env.CAPTION_API_KEY || env.CLOUDFLARE_API_TOKEN;
  const url =
    env.CAPTION_API_URL ||
    (env.CLOUDFLARE_ACCOUNT_ID
      ? `https://api.cloudflare.com/client/v4/accounts/${env.CLOUDFLARE_ACCOUNT_ID}/ai/v1/chat/completions`
      : undefined);
  if (!apiKey || !url) {
    return undefined;
  }
  const model = env.CAPTION_MODEL || DEFAULT_MODEL;
  return {
    model,
    async describe(image, mimeType, prompt) {
      const body = JSON.stringify({
        model,
        max_tokens: 350,
        temperature: 0.2,
        messages: [
          {
            role: 'user',
            content: [
              { type: 'text', text: prompt },
              {
                type: 'image_url',
                image_url: {
                  url: `data:${mimeType};base64,${image.toString('base64')}`,
                },
              },
            ],
          },
        ],
      });
      for (let attempt = 0; ; attempt++) {
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${apiKey}`,
            'Content-Type': 'application/json',
          },
          body,
        });
        if (response.ok) {
          const json = (await response.json()) as {
            choices?: { message?: { content?: string } }[];
          };
          const content = json.choices?.[0]?.message?.content;
          if (!content) {
            throw new Error('Caption response without content');
          }
          return content;
        }
        const transient = response.status === 429 || response.status >= 500;
        const text = await response.text();
        if (response.status === 429 && QUOTA_MESSAGE.test(text)) {
          throw new CaptionQuotaError(
            `Caption API quota exhausted: ${text.slice(0, 200)}`
          );
        }
        if (!transient || attempt >= MAX_ATTEMPTS - 1) {
          throw new Error(
            `Caption API ${response.status}: ${text.slice(0, 300)}`
          );
        }
        await new Promise((resolve) =>
          setTimeout(resolve, 2 ** attempt * 1500)
        );
      }
    },
  };
}

function inlinesToText(inlines: Inline[]): string {
  return inlines
    .map((i) => i.text)
    .join('')
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * The heading and text of the section the image sits in, up to the image. Earlier
 * images of the section are skipped, not a boundary: in Figma the text stands next
 * to all boards of a section, and a Don't board that follows a Do board needs the
 * rule stated before both. When the text is too long, the part next to the image is kept.
 */
export function contextBefore(blocks: Block[], index: number): string {
  const parts: string[] = [];
  let heading = '';
  for (let i = index - 1; i >= 0; i--) {
    const block = blocks[i]!;
    if (block.type === 'image') {
      continue;
    }
    if (block.type === 'heading') {
      heading = `${block.text}:`;
      break;
    }
    if (block.type === 'list') {
      parts.unshift(
        block.items.map((item) => `- ${inlinesToText(item.inlines)}`).join(' ')
      );
    } else {
      parts.unshift(inlinesToText(block.inlines));
    }
  }
  const text = parts.join(' ');
  const room = MAX_CONTEXT_LENGTH - heading.length - 1;
  const kept =
    text.length > room ? `...${text.slice(text.length - room + 3)}` : text;
  return [heading, kept].filter(Boolean).join(' ');
}

export function buildPrompt(input: {
  document: { title: string; category: string };
  alt: string;
  context: string;
  facts?: FigureFacts;
}): string {
  const lines = [
    'You write the text alternative for a figure from the design documentation of a UI design system (STIHL Design System). Readers and AI assistants cannot see the image; your text has to carry every fact it contains.',
    '',
    `Document: ${input.document.title} (${input.document.category})`,
    `Section: ${input.alt}`,
  ];
  if (input.context) {
    lines.push(`Text next to the figure: ${input.context}`);
  }
  const facts = input.facts;
  if (facts) {
    if (facts.verdict) {
      lines.push(`The board is marked as a "${facts.verdict}" example.`);
    }
    if (facts.components.length > 0) {
      lines.push(`Components in the figure: ${facts.components.join('; ')}`);
    }
    if (facts.measurements.length > 0) {
      lines.push(
        `Measurement labels in the figure: ${facts.measurements.join(', ')}`
      );
    }
    if (facts.callouts.length > 0) {
      lines.push(`Numbered callouts: ${facts.callouts.join(', ')}`);
    }
    if (facts.labels.length > 0) {
      lines.push(
        `Other text in the figure: ${facts.labels.map((l) => `"${l}"`).join(', ')}`
      );
    }
  }
  lines.push(
    '',
    'Write 1 to 3 plain English sentences. Say what is shown (component, variant, states, layout), what each measurement refers to, what each numbered callout points at, and for do/don\'t examples what is right or wrong and why. Use the listed labels verbatim. No introduction such as "The image shows", no speculation beyond what is visible, no Markdown.'
  );
  return lines.join('\n');
}

export function cleanCaption(raw: string): string {
  let text = raw
    .replace(/\s+/g, ' ')
    .replace(/^["'\s]+|["'\s]+$/g, '')
    .replace(
      /^(the|this)\s+(image|figure|picture|illustration|screenshot|board)\s+(displays|shows|depicts|illustrates|presents|features)\s+/i,
      ''
    )
    .trim();
  if (text.length > 0) {
    text = text[0]!.toUpperCase() + text.slice(1);
  }
  if (text.length > MAX_CAPTION_LENGTH) {
    const cut = text.slice(0, MAX_CAPTION_LENGTH);
    text = `${cut.slice(0, Math.max(cut.lastIndexOf('. '), cut.lastIndexOf(', '), 200)).trimEnd()}...`;
  }
  return text;
}

/** Vision caption first, structural facts as fallback; measurements the model dropped are appended */
export function composeCaption(
  vision: string | undefined,
  facts: FigureFacts | undefined
): string | undefined {
  if (!vision) {
    return facts ? describeFigure(facts) : undefined;
  }
  const missing = (facts?.measurements ?? []).filter(
    (m) => !vision.toLowerCase().includes(m.toLowerCase())
  );
  if (missing.length === 0) {
    return vision;
  }
  return `${vision} Measurements in the figure: ${missing.join(', ')}.`;
}

export function cacheFileFor(imageDir: string): string {
  return join(imageDir, 'captions.json');
}

/** Reads the images of a document folder, for `previousImages` before an export replaces them */
export async function readImages(
  imageDir: string,
  format: 'png' | 'svg'
): Promise<Buffer[]> {
  const files = await readdir(imageDir).catch(() => [] as string[]);
  return Promise.all(
    files
      .filter((file) => file.endsWith(`.${format}`))
      .map((file) => readFile(join(imageDir, file)))
  );
}

function contentHash(bytes: Buffer): string {
  return createHash('sha256').update(bytes).digest('hex');
}

function decodePng(bytes: Buffer): PNG | undefined {
  try {
    return PNG.sync.read(bytes);
  } catch {
    return undefined;
  }
}

/**
 * Finds the cache entry of a previous image that looks the same as a new one,
 * an image of the same node first. Previous images are decoded once, on first use.
 */
function unchangedImageLookup(
  previousImages: Buffer[],
  cache: CaptionCache
): (bytes: Buffer, nodeId: string) => CaptionCacheEntry | undefined {
  const candidates = previousImages.flatMap((bytes) => {
    const entry = cache[contentHash(bytes)];
    let image: PNG | undefined | null = null;
    const decode = (): PNG | undefined => {
      if (image === null) {
        image = decodePng(bytes);
      }
      return image;
    };
    return entry ? [{ entry, decode }] : [];
  });
  return (bytes, nodeId) => {
    if (candidates.length === 0) {
      return undefined;
    }
    const after = decodePng(bytes);
    if (!after) {
      return undefined;
    }
    const ordered = [
      ...candidates.filter(({ entry }) => entry.nodeId === nodeId),
      ...candidates.filter(({ entry }) => entry.nodeId !== nodeId),
    ];
    return ordered.find(({ decode }) => {
      const before = decode();
      return (
        before !== undefined &&
        before.width === after.width &&
        before.height === after.height &&
        diffImages(before, after).changedPixels === 0
      );
    })?.entry;
  };
}

/** Providers that reported an exhausted quota in this process; later documents skip them */
const quotaExhausted = new WeakSet<CaptionProvider>();

export async function readCaptionCache(path: string): Promise<CaptionCache> {
  try {
    return JSON.parse(await readFile(path, 'utf8')) as CaptionCache;
  } catch {
    return {};
  }
}

async function mapWithConcurrency<T>(
  items: T[],
  limit: number,
  worker: (item: T) => Promise<void>
): Promise<void> {
  let next = 0;
  const runners = Array.from({ length: Math.min(limit, items.length) }, () =>
    (async () => {
      while (next < items.length) {
        await worker(items[next++]!);
      }
    })()
  );
  await Promise.all(runners);
}

/**
 * Returns nodeId to caption for every exported image block. Vision captions are
 * cached per image content hash in `<imageDir>/captions.json`, so a sync without
 * a provider (or without image changes) never calls the API and stays idempotent.
 */
export async function captionImages(
  blocks: Block[],
  imagePaths: Map<string, string>,
  options: CaptionOptions
): Promise<Map<string, string>> {
  const log = options.log ?? (() => {});
  const images = blocks
    .map((block, index) => ({ block, index }))
    .filter(
      (
        entry
      ): entry is { block: Extract<Block, { type: 'image' }>; index: number } =>
        entry.block.type === 'image' && imagePaths.has(entry.block.nodeId)
    );
  const captions = new Map<string, string>();
  if (images.length === 0) {
    return captions;
  }

  const cachePath = cacheFileFor(options.imageDir);
  const previous = await readCaptionCache(cachePath);
  const current: CaptionCache = {};
  const pending: {
    block: Extract<Block, { type: 'image' }>;
    index: number;
    hash: string;
    bytes: Buffer;
  }[] = [];
  const findUnchanged = unchangedImageLookup(
    options.format === 'png' ? (options.previousImages ?? []) : [],
    previous
  );
  let carried = 0;

  for (const { block, index } of images) {
    const file = join(options.imageDir, imageFileName(block, options.format));
    const bytes = await readFile(file).catch(() => undefined);
    if (!bytes) {
      continue;
    }
    const hash = contentHash(bytes);
    let cached = previous[hash];
    if (!cached) {
      const unchanged = findUnchanged(bytes, block.nodeId);
      if (unchanged) {
        cached = { ...unchanged, nodeId: block.nodeId };
        carried++;
      }
    }
    if (cached) {
      current[hash] = cached;
      captions.set(
        block.nodeId,
        // An edited description already says what the editor wanted, facts are not added to it
        cached.editedBy
          ? cached.caption
          : composeCaption(cached.caption, block.facts)!
      );
    } else if (options.provider && bytes.length <= MAX_IMAGE_BYTES) {
      pending.push({ block, index, hash, bytes });
    } else {
      const fallback = composeCaption(undefined, block.facts);
      if (fallback) {
        captions.set(block.nodeId, fallback);
      }
    }
  }

  if (carried > 0) {
    log(`  kept the caption of ${carried} images without visible change`);
  }

  if (pending.length > 0 && options.provider) {
    const provider = options.provider;
    log(`  describing ${pending.length} images with ${provider.model}`);
    let failures = 0;
    await mapWithConcurrency(pending, CONCURRENCY, async (item) => {
      const fallback = composeCaption(undefined, item.block.facts);
      if (quotaExhausted.has(provider)) {
        if (fallback) {
          captions.set(item.block.nodeId, fallback);
        }
        return;
      }
      const prompt = buildPrompt({
        document: options.document,
        alt: item.block.alt,
        context: contextBefore(blocks, item.index),
        facts: item.block.facts,
      });
      const mimeType = options.format === 'svg' ? 'image/svg+xml' : 'image/png';
      try {
        const caption = cleanCaption(
          await provider.describe(item.bytes, mimeType, prompt)
        );
        if (!caption) {
          throw new Error('empty caption');
        }
        current[item.hash] = {
          nodeId: item.block.nodeId,
          model: provider.model,
          caption,
        };
        captions.set(
          item.block.nodeId,
          composeCaption(caption, item.block.facts)!
        );
      } catch (error) {
        if (error instanceof CaptionQuotaError) {
          if (!quotaExhausted.has(provider)) {
            quotaExhausted.add(provider);
            console.warn(
              `  ${error.message}; structural captions from here on`
            );
          }
        } else {
          failures++;
          if (failures <= 3) {
            console.warn(
              `  caption failed for ${item.block.nodeId} (${item.block.alt}): ${(error as Error).message}`
            );
          }
        }
        if (fallback) {
          captions.set(item.block.nodeId, fallback);
        }
      }
    });
    if (failures > 0) {
      console.warn(`  ${failures} captions failed; structural fallback used`);
    }
  }

  const serialized = serializeCaptionCache(current);
  const existing = await readFile(cachePath, 'utf8').catch(() => undefined);
  if (Object.keys(current).length > 0 && existing !== serialized) {
    await writeFile(cachePath, serialized);
  }
  return captions;
}

/** Sorted by image hash, so a cache only changes where an image or its description changed */
export function serializeCaptionCache(cache: CaptionCache): string {
  const sorted = Object.fromEntries(
    Object.entries(cache).sort(([a], [b]) => a.localeCompare(b))
  );
  return `${JSON.stringify(sorted, null, 2)}\n`;
}
