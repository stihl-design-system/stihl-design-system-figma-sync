import { PNG } from 'pngjs';
import { describe, expect, it } from 'vitest';
import { buildReview, parseFigures } from '../src/review/buildReview.ts';
import {
  compareImage,
  pairImages,
  pairMovedImages,
  type ImagePair,
} from '../src/review/compareImages.ts';
import type { GitReader } from '../src/review/git.ts';
import { diffImages } from '../review/shared/pixelDiff.ts';

type Rect = [x: number, y: number, width: number, height: number];

/** White PNG with black rectangles */
function png(width: number, height: number, rects: Rect[] = []): Buffer {
  const image = new PNG({ width, height });
  image.data.fill(255);
  for (const [left, top, w, h] of rects) {
    for (let y = top; y < top + h; y++) {
      for (let x = left; x < left + w; x++) {
        image.data.fill(0, (y * width + x) * 4, (y * width + x) * 4 + 3);
      }
    }
  }
  return PNG.sync.write(image);
}

function compare(
  before: Buffer | undefined,
  after: Buffer | undefined,
  paths: { before?: string; after?: string } = {}
) {
  const blobs = new Map<string, Buffer>();
  const side = (name: string, buffer: Buffer | undefined, path?: string) => {
    if (!buffer) {
      return undefined;
    }
    blobs.set(name, buffer);
    return { path: path ?? 'docs/components/button/usage-1-2.png', blob: name };
  };
  const pair: ImagePair = {
    id: 'components/button/1-2',
    documentKey: 'components/button',
    before: side('before', before, paths.before),
    after: side('after', after, paths.after),
  };
  return compareImage(pair, (blob) => blobs.get(blob) as Buffer);
}

describe('pairImages', () => {
  it('matches a figure by its Figma node when the section was renamed', () => {
    const pairs = pairImages(
      new Map([
        ['docs/components/button/usage-1-2.png', 'a'],
        ['docs/components/button/sizes-3-4.png', 'b'],
        ['docs/components/button/old-5-6.png', 'c'],
        ['docs/components/button.md', 'm1'],
      ]),
      new Map([
        ['docs/components/button/behavior-and-usage-1-2.png', 'a2'],
        ['docs/components/button/sizes-3-4.png', 'b'],
        ['docs/components/link/usage-1-2.png', 'd'],
        ['docs/components/button.md', 'm2'],
      ]),
      'docs'
    );

    expect(pairs).toEqual([
      {
        id: 'components/button/1-2',
        documentKey: 'components/button',
        before: { path: 'docs/components/button/usage-1-2.png', blob: 'a' },
        after: {
          path: 'docs/components/button/behavior-and-usage-1-2.png',
          blob: 'a2',
        },
      },
      {
        id: 'components/button/5-6',
        documentKey: 'components/button',
        before: { path: 'docs/components/button/old-5-6.png', blob: 'c' },
      },
      {
        id: 'components/link/1-2',
        documentKey: 'components/link',
        after: { path: 'docs/components/link/usage-1-2.png', blob: 'd' },
      },
    ]);
  });
});

describe('pairMovedImages', () => {
  it('matches figures of a page rebuilt in Figma by identical files, then by place in their section', () => {
    const dir = 'docs/components/textarea';
    const base = new Map([
      [`${dir}/overview-1-1.png`, 'a'],
      [`${dir}/width-1-2.png`, 'b'],
      [`${dir}/width-1-3.png`, 'c'],
      [`${dir}/scaling-1-4.png`, 'd'],
      [`${dir}/scaling-1-5.png`, 'e'],
      [`${dir}/gone-1-6.png`, 'f'],
    ]);
    const head = new Map([
      [`${dir}/overview-9-1.png`, 'a2'],
      // Identical file, although it now comes second in the section
      [`${dir}/width-9-3.png`, 'b'],
      [`${dir}/width-9-2.png`, 'c2'],
      [`${dir}/scaling-9-4.png`, 'd2'],
      [`${dir}/scaling-9-5.png`, 'e2'],
      [`${dir}/new-9-6.png`, 'g'],
      [`docs/components/link/overview-9-1.png`, 'a'],
    ]);
    // Reading order in the documents; node ids do not follow it
    const order = new Map([
      [`${dir}/scaling-1-4.png`, 1],
      [`${dir}/scaling-1-5.png`, 2],
      [`${dir}/scaling-9-4.png`, 2],
      [`${dir}/scaling-9-5.png`, 1],
    ]);

    const pairs = pairMovedImages(
      pairImages(base, head, 'docs'),
      'docs',
      (path) => order.get(path)
    );
    const summary = pairs.map(({ id, before, after }) => [
      id,
      before?.path.slice(dir.length + 1),
      after?.path.split('/').slice(-2).join('/'),
    ]);

    expect(summary).toEqual([
      ['components/textarea/1-6', 'gone-1-6.png', undefined],
      [
        'components/textarea/9-1',
        'overview-1-1.png',
        'textarea/overview-9-1.png',
      ],
      ['components/textarea/9-3', 'width-1-2.png', 'textarea/width-9-3.png'],
      ['components/textarea/9-2', 'width-1-3.png', 'textarea/width-9-2.png'],
      // Paired by reading order, not by node id
      [
        'components/textarea/9-4',
        'scaling-1-5.png',
        'textarea/scaling-9-4.png',
      ],
      [
        'components/textarea/9-5',
        'scaling-1-4.png',
        'textarea/scaling-9-5.png',
      ],
      ['components/textarea/9-6', undefined, 'textarea/new-9-6.png'],
      // Never across documents, even with identical files
      ['components/link/9-1', undefined, 'link/overview-9-1.png'],
    ]);
  });
});

describe('compareImage', () => {
  it('reports changed areas as regions in reading order', () => {
    const result = compare(
      png(300, 200),
      png(300, 200, [
        [200, 120, 20, 10],
        [10, 10, 30, 30],
      ])
    );

    expect(result).toMatchObject({ status: 'changed', resized: false });
    expect(result?.diff?.changedPixels).toBe(30 * 30 + 20 * 10);
    expect(result?.diff?.regions).toEqual([
      { x: 10, y: 10, width: 30, height: 30, pixels: 900 },
      { x: 200, y: 120, width: 20, height: 10, pixels: 200 },
    ]);
  });

  it('ignores an export that was only encoded differently', () => {
    const image = PNG.sync.read(png(40, 40, [[5, 5, 10, 10]]));
    const recompressed = PNG.sync.write(image, { deflateLevel: 0 });

    expect(recompressed.equals(png(40, 40, [[5, 5, 10, 10]]))).toBe(false);
    expect(
      compare(png(40, 40, [[5, 5, 10, 10]]), recompressed)
    ).toBeUndefined();
  });

  it('compares images of different size on a shared canvas', () => {
    const result = compare(png(100, 50), png(100, 80));

    expect(result).toMatchObject({
      status: 'changed',
      resized: true,
      before: { width: 100, height: 50 },
      after: { width: 100, height: 80 },
    });
    expect(result?.diff?.regions).toEqual([
      { x: 0, y: 50, width: 100, height: 30, pixels: 3000 },
    ]);
  });

  it('tells new, removed and merely renamed figures apart', () => {
    const image = png(20, 10);

    expect(compare(undefined, image)).toMatchObject({
      status: 'added',
      after: { width: 20, height: 10 },
    });
    expect(compare(image, undefined)).toMatchObject({
      status: 'removed',
      before: { width: 20, height: 10 },
    });
    const renamed = compare(
      image,
      PNG.sync.write(PNG.sync.read(image), { deflateLevel: 0 }),
      { after: 'docs/components/button/new-title-1-2.png' }
    );
    expect(renamed?.status).toBe('renamed');
    expect(renamed?.diff).toBeUndefined();
  });
});

describe('diffImages', () => {
  it('fills soft edges of a changed shape for display without counting them', () => {
    // A black square with a one pixel grey edge, as anti-aliasing renders it
    const shape = PNG.sync.read(png(40, 40, [[10, 10, 10, 10]]));
    for (let i = 9; i <= 20; i++) {
      for (const [x, y] of [
        [i, 9],
        [i, 20],
        [9, i],
        [20, i],
      ] as const) {
        shape.data.fill(128, (y * 40 + x) * 4, (y * 40 + x) * 4 + 3);
      }
    }
    const blank = PNG.sync.read(png(40, 40));
    const alpha = (mask: Uint8ClampedArray, x: number, y: number) =>
      mask[(y * 40 + x) * 4 + 3];

    const counted = diffImages(blank, shape);
    const filled = diffImages(blank, shape, { fillEdges: true });

    expect(alpha(counted.mask, 15, 9)).toBe(0);
    expect(alpha(filled.mask, 15, 9)).toBe(255);
    expect(alpha(filled.mask, 30, 30)).toBe(0);
    expect(filled.changedPixels).toBe(counted.changedPixels);
    expect(filled.regions).toEqual(counted.regions);
  });
});

describe('parseFigures', () => {
  it('reads the heading trail and the caption of each figure', () => {
    const figures = parseFigures(
      [
        '---',
        'id: button',
        '---',
        '',
        '## Button',
        '',
        '![Button](button/button-1-2.png)',
        '',
        '_Figure: Primary button labelled Save\\_all with a \\*star\\*._',
        '',
        '### Formatting',
        '',
        '#### Sizes',
        '',
        '![Sizes](button/sizes-3-4.png)',
        '',
        'Text that is not a caption.',
        '',
        '## Behavior',
        '',
        '![Behavior](button/behavior-5-6.png)',
      ].join('\n'),
      'docs/components/button.md'
    );

    expect([...figures]).toEqual([
      [
        'docs/components/button/button-1-2.png',
        {
          section: 'Button',
          caption: 'Primary button labelled Save_all with a *star*.',
          order: 0,
        },
      ],
      [
        'docs/components/button/sizes-3-4.png',
        {
          section: 'Button › Formatting › Sizes',
          caption: undefined,
          order: 1,
        },
      ],
      [
        'docs/components/button/behavior-5-6.png',
        { section: 'Behavior', caption: undefined, order: 2 },
      ],
    ]);
  });
});

describe('buildReview', () => {
  const BASE = 'a'.repeat(40);
  const HEAD = 'b'.repeat(40);

  function markdown(version: string, label: string, figures: string[]) {
    return [
      '---',
      'id: button',
      'title: Button',
      'category: component',
      'figmaFile: Core Components',
      'figmaFileKey: FILEKEY',
      `figmaVersion: "${version}"`,
      `figmaVersionLabel: ${label}`,
      'figmaVersionCreatedAt: 2026-11-06T10:45:41Z',
      'sourceUrl: https://www.figma.com/design/FILEKEY?node-id=9-9',
      '---',
      '',
      '## Button',
      '',
      ...figures.flatMap((file) => [`![x](button/${file})`, '']),
    ].join('\n');
  }

  type Trees = Record<string, Record<string, Buffer | string>>;

  function fakeGit(trees: Trees = defaultTrees()): GitReader {
    const blobs = new Map<string, Buffer>();
    return {
      listFiles(commit) {
        const files = new Map<string, string>();
        for (const [path, content] of Object.entries(trees[commit] ?? {})) {
          const buffer = Buffer.from(content);
          // Content addressed like git, so an unchanged file keeps its blob id
          const blob = buffer.toString('base64');
          blobs.set(blob, buffer);
          files.set(path, blob);
        }
        return files;
      },
      readBlob: (blob) => blobs.get(blob) as Buffer,
      readText: (commit, path) => trees[commit]?.[path]?.toString(),
      commitInfo: (ref) => ({
        sha: ref,
        subject: 'docs: sync Figma documentation',
        date: '2026-11-18T12:00:00Z',
      }),
    };
  }

  function defaultTrees(): Trees {
    return {
      [BASE]: {
        'docs/components/button.md': markdown('100', 'Old release', [
          'usage-1-2.png',
          'sizes-3-4.png',
          'gone-7-8.png',
        ]),
        'docs/components/button/usage-1-2.png': png(60, 40),
        'docs/components/button/sizes-3-4.png': png(60, 40),
        'docs/components/button/gone-7-8.png': png(60, 40),
      },
      [HEAD]: {
        'docs/components/button.md': markdown('200', 'Components published', [
          'new-5-6.png',
          'usage-1-2.png',
          'sizes-3-4.png',
        ]),
        // Different pixels than the removed figure, or the two would be paired as one
        'docs/components/button/new-5-6.png': png(60, 40, [[0, 0, 2, 2]]),
        'docs/components/button/usage-1-2.png': png(60, 40, [[4, 4, 8, 8]]),
        'docs/components/button/sizes-3-4.png': png(60, 40),
      },
    };
  }

  it('describes each visible change with its place in Figma at both versions', () => {
    const manifest = buildReview({
      git: fakeGit(),
      base: BASE,
      head: HEAD,
      docsDir: 'docs',
      repository: 'owner/repo',
    });

    expect(manifest.title).toBe('Components published');
    expect(manifest.counts).toEqual({
      changed: 1,
      added: 1,
      removed: 1,
      renamed: 0,
    });
    expect(manifest.documents).toEqual([
      {
        key: 'components/button',
        title: 'Button',
        category: 'component',
        figmaFile: 'Core Components',
        sourceUrl: 'https://www.figma.com/design/FILEKEY?node-id=9-9',
        before: {
          id: '100',
          label: 'Old release',
          createdAt: '2026-11-06T10:45:41Z',
        },
        after: {
          id: '200',
          label: 'Components published',
          createdAt: '2026-11-06T10:45:41Z',
        },
      },
    ]);
    // Reading order of the new document, removed figures last; the untouched one is left out
    expect(manifest.images.map(({ id, status }) => [id, status])).toEqual([
      ['components/button/5-6', 'added'],
      ['components/button/1-2', 'changed'],
      ['components/button/7-8', 'removed'],
    ]);
    expect(manifest.images[1]).toMatchObject({
      before: {
        section: 'Button',
        figmaUrl:
          'https://www.figma.com/design/FILEKEY?node-id=1-2&version-id=100',
      },
      after: {
        figmaUrl:
          'https://www.figma.com/design/FILEKEY?node-id=1-2&version-id=200',
      },
      diff: { changedPixels: 64 },
    });
  });

  it('compares a board rebuilt in Figma with its previous node and links both', () => {
    const manifest = buildReview({
      git: fakeGit({
        [BASE]: {
          'docs/components/button.md': markdown('100', 'Old release', [
            'usage-1-2.png',
          ]),
          'docs/components/button/usage-1-2.png': png(60, 40),
        },
        [HEAD]: {
          'docs/components/button.md': markdown('200', 'Rebuilt', [
            'usage-9-2.png',
          ]),
          'docs/components/button/usage-9-2.png': png(60, 40, [[4, 4, 8, 8]]),
        },
      }),
      base: BASE,
      head: HEAD,
      docsDir: 'docs',
      repository: 'owner/repo',
    });

    expect(manifest.images).toHaveLength(1);
    expect(manifest.images[0]).toMatchObject({
      id: 'components/button/9-2',
      status: 'changed',
      before: {
        figmaUrl:
          'https://www.figma.com/design/FILEKEY?node-id=1-2&version-id=100',
      },
      after: {
        figmaUrl:
          'https://www.figma.com/design/FILEKEY?node-id=9-2&version-id=200',
      },
    });
  });
});
