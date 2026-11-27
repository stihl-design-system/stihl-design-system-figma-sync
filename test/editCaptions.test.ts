import { mkdir, mkdtemp, readFile, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import {
  applyCaptionEdit,
  replaceFigureCaption,
} from '../src/images/editCaptions.ts';

const PAGE = [
  '# Button',
  '',
  '![Usage](button/usage-1-2.png)',
  '',
  '_Figure: Old description._',
  '',
  '![Sizes](button/sizes-3-4.png)',
  '',
  'Text after the figure.',
].join('\n');

describe('replaceFigureCaption', () => {
  it('replaces the caption line under the image and escapes Markdown', () => {
    expect(
      replaceFigureCaption(PAGE, 'button/usage-1-2.png', 'Save_all *now*')
    ).toContain(
      '![Usage](button/usage-1-2.png)\n\n_Figure: Save\\_all \\*now\\*_\n'
    );
  });

  it('adds a caption line to an image without one', () => {
    expect(
      replaceFigureCaption(PAGE, 'button/sizes-3-4.png', 'Two sizes.')
    ).toContain(
      '![Sizes](button/sizes-3-4.png)\n\n_Figure: Two sizes._\n\nText after the figure.'
    );
  });

  it('finds nothing for an image the page does not show', () => {
    expect(
      replaceFigureCaption(PAGE, 'button/gone-9-9.png', 'x')
    ).toBeUndefined();
  });
});

describe('applyCaptionEdit', () => {
  let root: string;
  beforeEach(async () => {
    root = await mkdtemp(join(tmpdir(), 'edit-captions-'));
    await mkdir(join(root, 'docs/components/button'), { recursive: true });
    await writeFile(join(root, 'docs/components/button.md'), PAGE);
    await writeFile(
      join(root, 'docs/components/button/usage-1-2.png'),
      'png-bytes'
    );
  });
  afterEach(() => rm(root, { recursive: true, force: true }));

  it('writes the description with editor and time into the cache and the page', async () => {
    const applied = await applyCaptionEdit(root, {
      path: 'docs/components/button/usage-1-2.png',
      caption: 'A primary button labelled Save.',
      editor: 'Ada',
      editedAt: '2026-11-27T10:00:00.000Z',
    });

    expect(applied).toBe(true);
    expect(
      await readFile(join(root, 'docs/components/button.md'), 'utf8')
    ).toContain('_Figure: A primary button labelled Save._');
    const cache = JSON.parse(
      await readFile(join(root, 'docs/components/button/captions.json'), 'utf8')
    );
    expect(Object.values(cache)).toEqual([
      {
        nodeId: '1:2',
        model: 'none',
        caption: 'A primary button labelled Save.',
        editedBy: 'Ada',
        editedAt: '2026-11-27T10:00:00.000Z',
      },
    ]);
  });

  it('leaves everything alone when the page no longer shows the image', async () => {
    await writeFile(
      join(root, 'docs/components/button/old-7-7.png'),
      'png-bytes'
    );
    expect(
      await applyCaptionEdit(root, {
        path: 'docs/components/button/old-7-7.png',
        caption: 'x',
        editor: 'Ada',
        editedAt: '2026-11-27T10:00:00.000Z',
      })
    ).toBe(false);
    expect(
      await readFile(join(root, 'docs/components/button.md'), 'utf8')
    ).toBe(PAGE);
  });
});
