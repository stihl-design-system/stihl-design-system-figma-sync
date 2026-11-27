import { createHash } from 'node:crypto';
import { readFile, writeFile } from 'node:fs/promises';
import { basename, dirname, join } from 'node:path';
import { escapeText } from '../markdown/renderMarkdown.ts';
import {
  cacheFileFor,
  readCaptionCache,
  serializeCaptionCache,
} from './captionImages.ts';

export interface CaptionEditToApply {
  /** Repository path of the image, for example docs/components/button/usage-1-2.png */
  path: string;
  caption: string;
  editor: string;
  editedAt: string;
}

/** Replaces the caption line under an image of a generated page, or adds one; undefined when the page has no such image */
export function replaceFigureCaption(
  markdown: string,
  imageReference: string,
  caption: string
): string | undefined {
  const lines = markdown.split('\n');
  const index = lines.findIndex(
    (line) => line.match(/^!\[.*\]\((.+)\)$/)?.[1] === imageReference
  );
  if (index === -1) {
    return undefined;
  }
  const figure = `_Figure: ${escapeText(caption)}_`;
  let next = index + 1;
  while (next < lines.length && lines[next]?.trim() === '') {
    next++;
  }
  if (/^_Figure: .*_$/.test(lines[next] ?? '')) {
    lines[next] = figure;
  } else {
    lines.splice(index + 1, 0, '', figure);
  }
  return lines.join('\n');
}

/** Figma node id of an exported file name: usage-8472-30050.png is 8472:30050 */
function nodeIdOf(path: string): string {
  const match = basename(path, '.png').match(/(\d+)-(\d+)$/);
  return match ? `${match[1]}:${match[2]}` : '';
}

/**
 * Writes an edited description into the caption cache next to the image, from
 * where the next sync takes it over as is for as long as the image stays the
 * same, and into the caption line of the page. Returns false when the page does
 * not show the image (any more).
 */
export async function applyCaptionEdit(
  root: string,
  edit: CaptionEditToApply
): Promise<boolean> {
  const imagePath = join(root, edit.path);
  const imageDir = dirname(imagePath);
  const markdownPath = `${imageDir}.md`;
  const markdown = await readFile(markdownPath, 'utf8').catch(() => undefined);
  const updated =
    markdown === undefined
      ? undefined
      : replaceFigureCaption(
          markdown,
          `${basename(imageDir)}/${basename(imagePath)}`,
          edit.caption
        );
  if (markdown === undefined || updated === undefined) {
    return false;
  }

  const hash = createHash('sha256')
    .update(await readFile(imagePath))
    .digest('hex');
  const cachePath = cacheFileFor(imageDir);
  const cache = await readCaptionCache(cachePath);
  const previous = cache[hash];
  cache[hash] = {
    nodeId: previous?.nodeId ?? nodeIdOf(edit.path),
    // The model that wrote the description the edit started from, if any
    model: previous?.model ?? 'none',
    caption: edit.caption,
    editedBy: edit.editor,
    editedAt: edit.editedAt,
  };
  await writeFile(cachePath, serializeCaptionCache(cache));
  if (updated !== markdown) {
    await writeFile(markdownPath, updated);
  }
  return true;
}
