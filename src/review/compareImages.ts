import { PNG } from 'pngjs';
import type { ImageDiff, ImageStatus } from '../../review/shared/manifest.ts';
import { diffImages } from '../../review/shared/pixelDiff.ts';

export interface ImageFile {
  path: string;
  blob: string;
}

/** The same Figma node of the same document at both commits */
export interface ImagePair {
  id: string;
  documentKey: string;
  before?: ImageFile;
  after?: ImageFile;
}

export interface ImageSize {
  path: string;
  width: number;
  height: number;
}

export interface ComparedImage {
  id: string;
  documentKey: string;
  status: ImageStatus;
  resized: boolean;
  before?: ImageSize;
  after?: ImageSize;
  diff?: ImageDiff;
}

/**
 * `docs/components/button/button-168-3988.png` belongs to document
 * `components/button` and Figma node `168-3988`. The node id, not the file
 * name, identifies the image: the slug in front follows the section title.
 */
export function parseImagePath(
  path: string,
  docsDir: string
): { id: string; documentKey: string } | undefined {
  const parts = path.split('/');
  const [root, categoryDir, document, fileName] = parts;
  if (
    parts.length !== 4 ||
    root !== docsDir ||
    !categoryDir ||
    !document ||
    !fileName?.endsWith('.png')
  ) {
    return undefined;
  }
  const stem = fileName.slice(0, -'.png'.length);
  const node = stem.match(/(?:^|-)(\d+-\d+)$/)?.[1] ?? stem;
  const documentKey = `${categoryDir}/${document}`;
  return { id: `${documentKey}/${node}`, documentKey };
}

/** Pairs the images of two trees by document and node id; untouched files are left out */
export function pairImages(
  base: Map<string, string>,
  head: Map<string, string>,
  docsDir: string
): ImagePair[] {
  const pairs = new Map<string, ImagePair>();
  const collect = (
    files: Map<string, string>,
    side: 'before' | 'after'
  ): void => {
    for (const [path, blob] of files) {
      const parsed = parseImagePath(path, docsDir);
      if (!parsed) {
        continue;
      }
      const pair = pairs.get(parsed.id) ?? { ...parsed };
      pair[side] = { path, blob };
      pairs.set(parsed.id, pair);
    }
  };
  collect(base, 'before');
  collect(head, 'after');
  return [...pairs.values()].filter(
    ({ before, after }) =>
      before?.path !== after?.path || before?.blob !== after?.blob
  );
}

/** Width and height from the IHDR chunk, without inflating the image */
export function pngSize(buffer: Buffer): { width: number; height: number } {
  if (buffer.length < 24 || buffer.toString('latin1', 12, 16) !== 'IHDR') {
    throw new Error('Not a PNG file');
  }
  return { width: buffer.readUInt32BE(16), height: buffer.readUInt32BE(20) };
}

/**
 * Classifies one pair. Returns undefined when nothing visible changed under
 * the same file name (a re-encoded export is not a change).
 */
export function compareImage(
  pair: ImagePair,
  readBlob: (blob: string) => Buffer
): ComparedImage | undefined {
  const { id, documentKey, before, after } = pair;
  if (!before || !after) {
    const file = (before ?? after) as ImageFile;
    const side = { path: file.path, ...pngSize(readBlob(file.blob)) };
    return before
      ? { id, documentKey, status: 'removed', resized: false, before: side }
      : { id, documentKey, status: 'added', resized: false, after: side };
  }

  const renamed = before.path !== after.path;
  if (before.blob === after.blob) {
    const size = pngSize(readBlob(after.blob));
    return {
      id,
      documentKey,
      status: 'renamed',
      resized: false,
      before: { path: before.path, ...size },
      after: { path: after.path, ...size },
    };
  }

  const beforeImage = PNG.sync.read(readBlob(before.blob));
  const afterImage = PNG.sync.read(readBlob(after.blob));
  const diff = diffImages(beforeImage, afterImage);
  const sides = {
    before: {
      path: before.path,
      width: beforeImage.width,
      height: beforeImage.height,
    },
    after: {
      path: after.path,
      width: afterImage.width,
      height: afterImage.height,
    },
  };
  if (diff.changedPixels === 0 && !diff.resized) {
    return renamed
      ? { id, documentKey, status: 'renamed', resized: false, ...sides }
      : undefined;
  }
  return {
    id,
    documentKey,
    status: 'changed',
    resized: diff.resized,
    ...sides,
    diff: {
      changedPixels: diff.changedPixels,
      ratio: diff.ratio,
      regions: diff.regions,
    },
  };
}
