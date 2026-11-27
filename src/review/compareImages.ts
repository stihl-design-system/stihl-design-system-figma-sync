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
):
  | { id: string; documentKey: string; node: string; section: string }
  | undefined {
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
  const section = stem.slice(0, -node.length).replace(/-$/, '');
  return { id: `${documentKey}/${node}`, documentKey, node, section };
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
      const pair = pairs.get(parsed.id) ?? {
        id: parsed.id,
        documentKey: parsed.documentKey,
      };
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

/**
 * Pairs figures whose Figma node changed. When designers rebuild a page or
 * paste an edited copy back in, every board gets a new node id and the same
 * figure would show up as removed and added. Within one document a removed and
 * an added image count as one figure when their files are identical, or else
 * when they hold the same place in the same section (file name without node
 * id): the first removed image of a section pairs with the first added one, and
 * so on. The pair keeps the id of the new node.
 */
export function pairMovedImages(
  pairs: ImagePair[],
  docsDir: string,
  figureOrder: (path: string, side: 'before' | 'after') => number | undefined
): ImagePair[] {
  const removed = pairs.filter((pair) => pair.before && !pair.after);
  const added = pairs.filter((pair) => pair.after && !pair.before);
  /** Added pair to the removed pair it takes its previous side from */
  const previous = new Map<ImagePair, ImagePair>();
  const used = new Set<ImagePair>();

  for (const pair of added) {
    const match = removed.find(
      (candidate) =>
        !used.has(candidate) &&
        candidate.documentKey === pair.documentKey &&
        candidate.before?.blob === pair.after?.blob
    );
    if (match) {
      used.add(match);
      previous.set(pair, match);
    }
  }

  const bySection = (
    list: ImagePair[],
    side: 'before' | 'after'
  ): Map<string, ImagePair[]> => {
    const groups = new Map<string, ImagePair[]>();
    for (const pair of list) {
      const path = pair[side]?.path ?? '';
      const key = `${pair.documentKey}/${parseImagePath(path, docsDir)?.section ?? ''}`;
      groups.set(key, [...(groups.get(key) ?? []), pair]);
    }
    const position = (pair: ImagePair): number =>
      figureOrder(pair[side]?.path ?? '', side) ?? Number.MAX_SAFE_INTEGER;
    for (const group of groups.values()) {
      group.sort(
        (a, b) => position(a) - position(b) || a.id.localeCompare(b.id)
      );
    }
    return groups;
  };
  const removedBySection = bySection(
    removed.filter((pair) => !used.has(pair)),
    'before'
  );
  const addedBySection = bySection(
    added.filter((pair) => !previous.has(pair)),
    'after'
  );
  for (const [key, group] of addedBySection) {
    const candidates = removedBySection.get(key) ?? [];
    group.forEach((pair, index) => {
      const match = candidates[index];
      if (match) {
        used.add(match);
        previous.set(pair, match);
      }
    });
  }

  return pairs.flatMap((pair) => {
    if (used.has(pair)) {
      return [];
    }
    const match = previous.get(pair);
    return [match ? { ...pair, before: match.before } : pair];
  });
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
