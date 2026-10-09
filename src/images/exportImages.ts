import { mkdir, readdir, rm, writeFile } from 'node:fs/promises';
import { join, relative, dirname } from 'node:path';
import type { FigmaClient } from '../figma/client.ts';
import type { Block } from '../extract/collectBlocks.ts';

export interface ExportImagesOptions {
  client: FigmaClient;
  fileKey: string;
  /** Absolute or cwd-relative directory the PNGs are written to */
  imageDir: string;
  /** Path of the Markdown file, used to compute relative image references */
  markdownPath: string;
  format: 'png' | 'svg';
  scale: number;
  /** Figma version id to render; omitted = current file state */
  version?: string;
}

export function slugify(text: string): string {
  return text
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 60);
}

export function imageFileName(
  block: Extract<Block, { type: 'image' }>,
  format: string
): string {
  const slug = slugify(block.alt) || 'image';
  return `${slug}-${block.nodeId.replace(/[^0-9A-Za-z]+/g, '-')}.${format}`;
}

/**
 * Exports every image block through the Figma Images endpoint and downloads the
 * temporary URLs immediately. Returns nodeId to Markdown-relative path.
 * Stale files in imageDir that are no longer referenced are removed.
 */
export async function exportImages(
  blocks: Block[],
  options: ExportImagesOptions
): Promise<Map<string, string>> {
  const imageBlocks = blocks.filter(
    (b): b is Extract<Block, { type: 'image' }> => b.type === 'image'
  );
  const paths = new Map<string, string>();
  if (imageBlocks.length === 0) {
    return paths;
  }

  await mkdir(options.imageDir, { recursive: true });

  const response = await options.client.getImages(
    options.fileKey,
    imageBlocks.map((b) => b.nodeId),
    { format: options.format, scale: options.scale, version: options.version }
  );
  if (response.err) {
    throw new Error(`Figma image export failed: ${response.err}`);
  }

  const keep = new Set<string>();
  for (const block of imageBlocks) {
    const url = response.images[block.nodeId];
    if (!url) {
      console.warn(`No image rendered for node ${block.nodeId} (${block.alt})`);
      continue;
    }
    const fileName = imageFileName(block, options.format);
    const target = join(options.imageDir, fileName);
    const download = await fetch(url);
    if (!download.ok) {
      throw new Error(
        `Image download failed (${download.status}) for ${block.nodeId}`
      );
    }
    await writeFile(target, Buffer.from(await download.arrayBuffer()));
    keep.add(fileName);
    paths.set(
      block.nodeId,
      relative(dirname(options.markdownPath), target).split('\\').join('/')
    );
  }

  for (const existing of await readdir(options.imageDir)) {
    if (existing.endsWith(`.${options.format}`) && !keep.has(existing)) {
      await rm(join(options.imageDir, existing));
    }
  }

  return paths;
}
