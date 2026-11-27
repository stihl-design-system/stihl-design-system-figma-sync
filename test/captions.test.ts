import { createHash } from 'node:crypto';
import { mkdtemp, readFile, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import type { Node } from '@figma/rest-api-spec';
import { PNG } from 'pngjs';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import type { Block } from '../src/extract/collectBlocks.ts';
import {
  collectFigureFacts,
  describeFigure,
} from '../src/extract/figureFacts.ts';
import {
  buildPrompt,
  captionImages,
  cleanCaption,
  composeCaption,
  contextBefore,
  type CaptionProvider,
} from '../src/images/captionImages.ts';
import { imageFileName } from '../src/images/exportImages.ts';
import { renderMarkdown } from '../src/markdown/renderMarkdown.ts';
import type { Frontmatter } from '../src/markdown/renderMarkdown.ts';
import specFrames from './fixtures/spec-frames.json' with { type: 'json' };

const frames = specFrames as unknown as Record<string, Node>;

describe('collectFigureFacts', () => {
  it('reads measurements, callouts, variants and labels from a spec board', () => {
    const facts = collectFigureFacts(frames['641:161']!);
    expect(facts.measurements).toEqual(['8px', '16px']);
    expect(facts.callouts).toEqual(['1', '2', '3']);
    expect(facts.components).toEqual([
      'switch (label links, Label=Label Utility M, state=enabled, checked=false)',
      'switch (label links, Label=Label Utility M, state=enabled, checked=true)',
    ]);
    expect(facts.labels).toEqual(['Label Utility M']);
    expect(facts.verdict).toBeUndefined();
  });

  it('keeps variant labels and ignores hidden layers', () => {
    const facts = collectFigureFacts(frames['641:181']!);
    expect(facts.labels).toEqual(['Label left', 'Label right', 'Label']);
    expect(facts.components[0]).toContain('label links');
    expect(facts.components[1]).toContain('label right');
  });

  it("detects the do/don't verdict chip", () => {
    const facts = collectFigureFacts(frames['1430:4323']!);
    expect(facts.verdict).toBe('Do');
    expect(facts.labels[0]).toMatch(/^Hiermit stimme ich/);
    expect(facts.labels[0]!.length).toBeLessThanOrEqual(80);
  });

  it('strips emoji prefixes and property ids from variant names', () => {
    const facts = collectFigureFacts(frames['12704:2122']!);
    expect(facts.components).toEqual([
      'button (button text=Highlight, variant=highlight, state=enabled, size=medium, icon position=none, hide label=off, flush alignment=off)',
      'button (button text=Filled, variant=filled, state=enabled, size=medium, icon position=none, hide label=off, flush alignment=off)',
    ]);
    expect(facts.labels).toEqual(['Highlight', 'Filled', 'image background']);
  });
});

describe('describeFigure', () => {
  it('renders a deterministic sentence from the facts', () => {
    expect(describeFigure(collectFigureFacts(frames['641:161']!))).toBe(
      'Shows switch (label links, Label=Label Utility M, state=enabled, checked=false); switch (label links, Label=Label Utility M, state=enabled, checked=true). Measurements: 8px, 16px. Callouts 1, 2, 3. Text in the figure: "Label Utility M".'
    );
    expect(
      describeFigure({
        labels: [],
        measurements: [],
        callouts: [],
        components: [],
      })
    ).toBeUndefined();
  });
});

const blocks: Block[] = [
  { type: 'heading', level: 3, text: 'Structure', nodeId: 'h' },
  {
    type: 'list',
    nodeId: 'l',
    items: [
      { level: 1, ordered: true, inlines: [{ text: 'Switch', bold: true }] },
      { level: 1, ordered: true, inlines: [{ text: 'Label' }] },
    ],
  },
  { type: 'paragraph', nodeId: 'p', inlines: [{ text: 'Default is left.' }] },
  {
    type: 'image',
    nodeId: '641:161',
    alt: 'Structure',
    facts: collectFigureFacts(frames['641:161']!),
  },
  { type: 'paragraph', nodeId: 'p2', inlines: [{ text: 'After.' }] },
  { type: 'image', nodeId: '9:9', alt: 'Plain' },
];

describe('contextBefore and buildPrompt', () => {
  it('collects the text since the last heading and feeds facts into the prompt', () => {
    const context = contextBefore(blocks, 3);
    expect(context).toBe('Structure: - Switch - Label Default is left.');
    // A later board of the section (a Don't after a Do) still gets the rule stated before both
    expect(contextBefore(blocks, 5)).toBe(
      'Structure: - Switch - Label Default is left. After.'
    );
    const imageBlock = blocks[3];
    const prompt = buildPrompt({
      document: { title: 'Switch', category: 'component' },
      alt: 'Structure',
      context,
      facts: imageBlock?.type === 'image' ? imageBlock.facts : undefined,
    });
    expect(prompt).toContain('Document: Switch (component)');
    expect(prompt).toContain('Measurement labels in the figure: 8px, 16px');
    expect(prompt).toContain('Numbered callouts: 1, 2, 3');
    expect(prompt).not.toContain('Markdown.\n');
  });

  it('keeps the heading and the text next to the image when the section is long', () => {
    const long: Block[] = [
      { type: 'heading', level: 3, text: 'Width', nodeId: 'h' },
      {
        type: 'paragraph',
        nodeId: 'p1',
        inlines: [{ text: 'x'.repeat(2000) }],
      },
      { type: 'paragraph', nodeId: 'p2', inlines: [{ text: 'Closest.' }] },
      { type: 'image', nodeId: '1:1', alt: 'Width' },
    ];
    const context = contextBefore(long, 3);

    expect(context.length).toBe(1000);
    expect(context).toMatch(/^Width: \.\.\.x+ Closest\.$/);
  });
});

describe('cleanCaption and composeCaption', () => {
  it('drops the "the image shows" opener and normalises whitespace', () => {
    expect(cleanCaption('  The image shows a  switch.\n')).toBe('A switch.');
    expect(cleanCaption('"This figure displays two buttons."')).toBe(
      'Two buttons.'
    );
  });

  it('appends measurements the model left out and falls back to facts', () => {
    const facts = collectFigureFacts(frames['641:161']!);
    expect(composeCaption('Switch with 8px gap.', facts)).toBe(
      'Switch with 8px gap. Measurements in the figure: 16px.'
    );
    expect(composeCaption('Gap 8px, row 16px.', facts)).toBe(
      'Gap 8px, row 16px.'
    );
    expect(composeCaption(undefined, facts)).toMatch(/^Shows switch/);
    expect(composeCaption(undefined, undefined)).toBeUndefined();
  });
});

describe('captionImages with previous images', () => {
  let dir: string;
  beforeEach(async () => {
    dir = await mkdtemp(join(tmpdir(), 'captions-previous-'));
  });
  afterEach(() => rm(dir, { recursive: true, force: true }));

  /** Grey board with a black square; `pixel` changes one pixel by a hardly visible amount */
  function board(
    square: number,
    options: { pixel?: boolean; deflateLevel?: number } = {}
  ): Buffer {
    const image = new PNG({ width: 60, height: 40 });
    image.data.fill(240);
    for (let y = 10; y < 10 + square; y++) {
      for (let x = 10; x < 10 + square; x++) {
        image.data.fill(0, (y * 60 + x) * 4, (y * 60 + x) * 4 + 3);
      }
    }
    if (options.pixel) {
      image.data.fill(227, (30 * 60 + 50) * 4, (30 * 60 + 50) * 4 + 3);
    }
    return PNG.sync.write(image, { deflateLevel: options.deflateLevel ?? 9 });
  }

  it('keeps the caption of a board without visible change under a new node id and file', async () => {
    const reviewed = board(10);
    const other = board(12);
    const sha = (bytes: Buffer) =>
      createHash('sha256').update(bytes).digest('hex');
    await writeFile(
      join(dir, 'captions.json'),
      JSON.stringify({
        [sha(reviewed)]: {
          nodeId: '1:1',
          model: 'reviewer',
          caption: 'Reviewed width board.',
        },
        [sha(other)]: {
          nodeId: '1:2',
          model: 'reviewer',
          caption: 'Reviewed other board.',
        },
      })
    );
    // The page was rebuilt in Figma: new node ids, the old files are gone after the export
    const rebuilt: Extract<Block, { type: 'image' }>[] = [
      { type: 'image', nodeId: '9:1', alt: 'Width' },
      { type: 'image', nodeId: '9:2', alt: 'Other' },
    ];
    const unchanged = board(10, { pixel: true, deflateLevel: 1 });
    expect(sha(unchanged)).not.toBe(sha(reviewed));
    await writeFile(join(dir, imageFileName(rebuilt[0]!, 'png')), unchanged);
    await writeFile(join(dir, imageFileName(rebuilt[1]!, 'png')), board(20));

    const calls: string[] = [];
    const captions = await captionImages(
      rebuilt,
      new Map([
        ['9:1', 'doc/width-9-1.png'],
        ['9:2', 'doc/other-9-2.png'],
      ]),
      {
        imageDir: dir,
        format: 'png',
        document: { title: 'Textarea', category: 'component' },
        previousImages: [other, reviewed],
        provider: {
          model: 'fake',
          async describe(_image, _mime, prompt) {
            calls.push(prompt);
            return 'A new board.';
          },
        },
      }
    );

    expect(captions.get('9:1')).toBe('Reviewed width board.');
    // A visible change is described anew
    expect(captions.get('9:2')).toBe('A new board.');
    expect(calls).toHaveLength(1);
    const cache = JSON.parse(
      await readFile(join(dir, 'captions.json'), 'utf8')
    );
    expect(cache[sha(unchanged)]).toEqual({
      nodeId: '9:1',
      model: 'reviewer',
      caption: 'Reviewed width board.',
    });
  });
});

describe('captionImages', () => {
  let dir: string;
  beforeEach(async () => {
    dir = await mkdtemp(join(tmpdir(), 'captions-'));
    for (const block of blocks) {
      if (block.type === 'image') {
        await writeFile(
          join(dir, imageFileName(block, 'png')),
          `png-${block.nodeId}`
        );
      }
    }
  });
  afterEach(() => rm(dir, { recursive: true, force: true }));

  const paths = new Map([
    ['641:161', 'switch/structure-641-161.png'],
    ['9:9', 'switch/plain-9-9.png'],
  ]);

  it('calls the provider once per new image, caches by content and reuses the cache', async () => {
    const calls: string[] = [];
    const provider: CaptionProvider = {
      model: 'fake',
      async describe(_image, _mime, prompt) {
        calls.push(prompt);
        return prompt.includes('Section: Plain')
          ? 'The image shows a plain board.'
          : 'A switch spec.';
      },
    };
    const options = {
      imageDir: dir,
      format: 'png' as const,
      document: { title: 'Switch', category: 'component' },
    };

    const first = await captionImages(blocks, paths, { ...options, provider });
    expect(calls).toHaveLength(2);
    expect(first.get('641:161')).toBe(
      'A switch spec. Measurements in the figure: 8px, 16px.'
    );
    expect(first.get('9:9')).toBe('A plain board.');

    const cache = JSON.parse(
      await readFile(join(dir, 'captions.json'), 'utf8')
    );
    expect(Object.values(cache)).toHaveLength(2);
    expect(Object.values(cache)[0]).toMatchObject({ model: 'fake' });

    const second = await captionImages(blocks, paths, options);
    expect(second).toEqual(first);
    expect(calls).toHaveLength(2);
  });

  it('keeps a description edited on the review page as it is', async () => {
    const options = {
      imageDir: dir,
      format: 'png' as const,
      document: { title: 'Switch', category: 'component' },
    };
    const provider: CaptionProvider = {
      model: 'fake',
      async describe() {
        return 'A switch spec.';
      },
    };
    await captionImages(blocks, paths, { ...options, provider });
    const cachePath = join(dir, 'captions.json');
    const cache = JSON.parse(await readFile(cachePath, 'utf8')) as Record<
      string,
      { caption: string; editedBy?: string }
    >;
    const [hash, entry] = Object.entries(cache).find(([, value]) =>
      value.caption.startsWith('A switch spec')
    )!;
    cache[hash] = { ...entry, caption: 'Edited by hand.', editedBy: 'Ada' };
    await writeFile(cachePath, JSON.stringify(cache));

    const captions = await captionImages(blocks, paths, {
      ...options,
      provider,
    });
    // No measurements appended and no new model call for the edited board
    expect(captions.get('641:161')).toBe('Edited by hand.');
  });

  it('falls back to structural facts when the provider fails or is absent', async () => {
    const provider: CaptionProvider = {
      model: 'broken',
      async describe() {
        throw new Error('quota');
      },
    };
    const captions = await captionImages(blocks, paths, {
      imageDir: dir,
      format: 'png',
      document: { title: 'Switch', category: 'component' },
      provider,
    });
    expect(captions.get('641:161')).toMatch(/^Shows switch/);
    expect(captions.has('9:9')).toBe(false);
  });
});

describe('renderMarkdown captions', () => {
  it('renders the caption as an italic line under the image', () => {
    const frontmatter: Frontmatter = {
      id: 'switch',
      title: 'Switch',
      category: 'component',
      figmaFile: 'Core Components',
      figmaProject: '02. Core Components',
      figmaFileKey: 'abc',
      figmaNodeId: '1:1',
      figmaVersion: '1',
      figmaVersionLabel: 'v1',
      figmaVersionCreatedAt: '2026-10-15T14:34:29Z',
      syncedAt: '2026-10-27T12:36:54.768Z',
      sourceUrl: 'https://www.figma.com/design/abc?node-id=1-1',
    };
    const markdown = renderMarkdown(
      [{ type: 'image', nodeId: '1:2', alt: 'Structure' }],
      {
        frontmatter,
        imagePaths: new Map([['1:2', 'switch/structure-1-2.png']]),
        captions: new Map([['1:2', 'Gap of 8px, label_left.']]),
      }
    );
    expect(markdown).toContain(
      '![Structure](switch/structure-1-2.png)\n\n_Figure: Gap of 8px, label\\_left._'
    );
  });
});
