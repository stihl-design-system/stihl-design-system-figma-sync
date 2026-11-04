import { describe, expect, it } from 'vitest';
import {
  absolutizeImages,
  findChapter,
  findDocument,
  splitChapters,
  summarize,
  type ContentBundle,
  type ContentDocument,
} from '../mcp/src/content.ts';
import {
  imagePath,
  renderCatalogue,
  renderDocument,
} from '../mcp/src/server.ts';
import { search } from '../mcp/src/search.ts';
import { toContentDocument } from '../src/cli/buildMcpContent.ts';
import type { Frontmatter } from '../src/markdown/renderMarkdown.ts';

const ORIGIN = 'https://design-docs.example.workers.dev';

function doc(overrides: Partial<ContentDocument>): ContentDocument {
  return {
    id: 'button',
    title: 'Button',
    category: 'component',
    importNames: ['DSButton'],
    package: '@stihl-design-system/components',
    keywords: ['button', 'cta'],
    path: 'components/button.md',
    sourceUrl: 'https://www.figma.com/design/abc?node-id=1-2',
    figmaFile: 'Core Components',
    figmaProject: '02. Core Components',
    figmaVersionLabel: 'Components published',
    figmaVersionCreatedAt: '2026-10-15T14:34:29Z',
    syncedAt: '2026-10-27T12:36:54.768Z',
    markdown: '',
    ...overrides,
  };
}

const button = doc({
  markdown: [
    '## Button',
    '',
    '![Button](button/button-1-2.png)',
    '',
    '## Overview',
    '',
    '### Definition',
    '',
    'A button is a clickable element to initialize an action.',
    '',
    '### When not to use',
    '',
    'There is no disabled and loading state for links.',
    '',
    '## Behavior',
    '',
    'The loading state replaces the label with a spinner.',
    '',
    '## Overview',
    '',
    'Round buttons only carry an icon.',
  ].join('\n'),
});

const spacing = doc({
  id: 'spacing',
  title: 'Spacing Styles',
  category: 'foundation',
  importNames: [],
  keywords: ['spacing', 'tokens'],
  path: 'foundations/spacing.md',
  markdown: [
    'Overview:',
    '',
    '- Spacing tokens define distances between elements.',
    '- Use semantic tokens in layouts.',
    '',
    '## Spacing overview',
    '',
    'Minimum touch target is 44 px on touch devices.',
  ].join('\n'),
});

const bundle: ContentBundle = {
  generatedAt: '2026-11-04T10:00:00.000Z',
  documents: [spacing, button],
};

describe('splitChapters', () => {
  it('splits at ## headings with unique slugs and keeps nested sections', () => {
    const chapters = splitChapters(button.markdown);
    expect(chapters.map((c) => `${c.title}:${c.slug}`)).toEqual([
      'Button:button',
      'Overview:overview',
      'Behavior:behavior',
      'Overview:overview-1',
    ]);
    expect(chapters[1]?.markdown).toContain('### When not to use');
    expect(chapters[1]?.markdown).not.toContain('spinner');
  });

  it('collects text before the first ## into an Intro chapter', () => {
    const chapters = splitChapters(spacing.markdown);
    expect(chapters.map((c) => c.title)).toEqual(['Intro', 'Spacing overview']);
    expect(findChapter(chapters, 'OVERVIEW')?.slug).toBe('spacing-overview');
  });
});

describe('summarize', () => {
  it('prefers the Definition paragraph', () => {
    expect(summarize(button)).toBe(
      'A button is a clickable element to initialize an action.'
    );
  });

  it('skips label lines and falls back to the first list item', () => {
    expect(summarize(spacing)).toBe(
      'Spacing tokens define distances between elements.'
    );
  });
});

describe('absolutizeImages', () => {
  it('resolves relative image paths against the document location', () => {
    expect(absolutizeImages(button.markdown, button, ORIGIN)).toContain(
      `![Button](${ORIGIN}/components/button/button-1-2.png)`
    );
    expect(
      absolutizeImages('![x](https://cdn.example/x.png)', button, ORIGIN)
    ).toBe('![x](https://cdn.example/x.png)');
  });
});

describe('findDocument', () => {
  it('matches id, title and import name case-insensitively', () => {
    expect(findDocument(bundle, 'BUTTON')?.id).toBe('button');
    expect(findDocument(bundle, 'spacing styles')?.id).toBe('spacing');
    expect(findDocument(bundle, 'dsbutton')?.id).toBe('button');
    expect(findDocument(bundle, 'table')).toBeUndefined();
  });
});

describe('search', () => {
  it('ranks chapters that contain every term first', () => {
    const hits = search(bundle, 'button loading state');
    expect(hits[0]?.document.id).toBe('button');
    expect(['Behavior', 'Overview']).toContain(hits[0]?.chapter);
    expect(hits[0]?.snippet).toMatch(/loading/);
  });

  it('finds body text in other categories and respects the filter', () => {
    expect(search(bundle, 'touch target')[0]?.document.id).toBe('spacing');
    expect(search(bundle, 'touch target', { category: 'component' })).toEqual(
      []
    );
  });

  it('lists a document once when only its title matches', () => {
    const hits = search(bundle, 'spacing');
    expect(hits.filter((h) => h.document.id === 'spacing')).toHaveLength(2);
    expect(search(bundle, '')).toEqual([]);
  });
});

describe('renderDocument', () => {
  it('prepends metadata and returns a single chapter on request', () => {
    const { text } = renderDocument(button, ORIGIN, 'behavior');
    expect(text).toContain('- Code component: `DSButton`');
    expect(text).toContain(`${ORIGIN}/components/button.md`);
    expect(text).toContain('## Behavior');
    expect(text).not.toContain('## Overview');
  });

  it('flags unknown chapters with the available titles', () => {
    const result = renderDocument(button, ORIGIN, 'pricing');
    expect(result.isError).toBe(true);
    expect(result.text).toContain('Button, Overview, Behavior');
  });
});

describe('renderCatalogue', () => {
  it('groups by category with id, summary and chapters', () => {
    const text = renderCatalogue(bundle, ORIGIN);
    expect(text.indexOf('## Foundations')).toBeLessThan(
      text.indexOf('## Components')
    );
    expect(text).toContain(
      '**Button** (id: `button`): A button is a clickable'
    );
    expect(text).toContain('chapters: Button, Overview, Behavior, Overview');
  });
});

describe('imagePath', () => {
  it('accepts own URLs and asset paths, rejects foreign hosts and traversal', () => {
    expect(imagePath(`${ORIGIN}/components/button/x.png`, ORIGIN)).toBe(
      'components/button/x.png'
    );
    expect(imagePath('/components/button/x.png', ORIGIN)).toBe(
      'components/button/x.png'
    );
    expect(imagePath('https://evil.example/x.png', ORIGIN)).toBeUndefined();
    expect(imagePath('../content.json', ORIGIN)).toBeUndefined();
    expect(imagePath('components/button.md', ORIGIN)).toBeUndefined();
  });
});

describe('toContentDocument', () => {
  it('drops frontmatter and the H1 title', () => {
    const frontmatter = {
      id: 'button',
      title: 'Button',
      category: 'component',
      figmaFile: 'Core Components',
      figmaProject: '02. Core Components',
      figmaFileKey: 'abc',
      figmaNodeId: '1:2',
      figmaVersion: '1',
      figmaVersionLabel: 'v1',
      figmaVersionCreatedAt: '2026-10-15T14:34:29Z',
      syncedAt: '2026-10-27T12:36:54.768Z',
      sourceUrl: 'https://www.figma.com/design/abc?node-id=1-2',
    } satisfies Frontmatter;
    const markdown = `---\nid: button\n---\n\n# Button\n\n## Overview\n\nText.\n`;
    const result = toContentDocument(
      frontmatter,
      markdown,
      'components/button.md'
    );
    expect(result.markdown).toBe('## Overview\n\nText.');
    expect(result.importNames).toEqual([]);
    expect(result).not.toHaveProperty('package');
  });
});
