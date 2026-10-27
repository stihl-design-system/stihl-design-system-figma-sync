import { describe, expect, it } from 'vitest';
import {
  headingSlug,
  parseHeadings,
  renderIndex,
} from '../src/markdown/renderIndex.ts';
import type { Frontmatter } from '../src/markdown/renderMarkdown.ts';

const frontmatter: Frontmatter = {
  id: 'accordion',
  title: 'Accordion',
  category: 'component',
  importNames: ['DSAccordion', 'DSAccordionGroup'],
  package: '@stihl-design-system/components',
  keywords: ['accordion', 'disclosure'],
  figmaFile: 'Core Components',
  figmaProject: '02. Core Components',
  figmaFileKey: 'FILEKEY',
  figmaNodeId: '17260:166',
  figmaVersion: '123',
  figmaVersionLabel: 'Components published',
  figmaVersionCreatedAt: '2026-10-07T09:00:47Z',
  syncedAt: '2026-10-09T00:00:00.000Z',
  sourceUrl: 'https://www.figma.com/design/FILEKEY?node-id=17260-166',
};

describe('headingSlug', () => {
  it('matches GitHub anchors, including escaped and punctuated headings', () => {
    expect(headingSlug('Formatting and Construction')).toBe(
      'formatting-and-construction'
    );
    expect(headingSlug('Don’t nest accordions')).toBe('dont-nest-accordions');
    expect(headingSlug('Examples/Variants')).toBe('examplesvariants');
    expect(headingSlug('Chevron vs. Caret Usage')).toBe(
      'chevron-vs-caret-usage'
    );
    expect(headingSlug('Use \\*asterisks\\*')).toBe('use-asterisks');
  });
});

describe('parseHeadings', () => {
  it('skips frontmatter and returns heading levels', () => {
    const headings = parseHeadings(
      '---\ntitle: # not a heading\n---\n\n# Title\n\n## Chapter\n\ntext\n#### Section\n'
    );
    expect(headings).toEqual([
      { level: 1, text: 'Title' },
      { level: 2, text: 'Chapter' },
      { level: 4, text: 'Section' },
    ]);
  });
});

describe('renderIndex', () => {
  it('groups documents by category and links H2/H3 chapters with unique anchors', () => {
    const index = renderIndex(
      [
        {
          frontmatter,
          path: 'docs/components/accordion.md',
          headings: [
            { level: 1, text: 'Accordion' },
            { level: 2, text: 'Accordion single' },
            { level: 2, text: 'Content and Assets' },
            { level: 3, text: 'Custom hint area' },
            { level: 4, text: 'Hint' },
            { level: 2, text: 'Usage' },
            { level: 3, text: 'Custom hint area' },
          ],
        },
        {
          frontmatter: {
            ...frontmatter,
            id: 'grid',
            title: 'Grid',
            category: 'foundation',
            importNames: undefined,
            package: undefined,
            keywords: undefined,
            figmaFile: 'Grid & Spacing',
            figmaProject: '01. Fundamentals',
            figmaVersionLabel: '',
          },
          path: 'docs/foundations/grid.md',
          headings: [{ level: 2, text: 'Breakpoints' }],
        },
      ],
      'docs/index.md'
    );

    expect(index).toContain('## How to use these files');
    expect(index.slice(index.indexOf('## Foundations'))).toMatchInlineSnapshot(`
      "## Foundations

      ### Grid

      - Document: [foundations/grid.md](foundations/grid.md)
      - Figma: [Grid & Spacing](https://www.figma.com/design/FILEKEY?node-id=17260-166) (unpublished state, 2026-10-07)
      - Chapters:
        - [Breakpoints](foundations/grid.md#breakpoints)

      ## Components

      ### Accordion

      \`DSAccordion\`, \`DSAccordionGroup\` from \`@stihl-design-system/components\`. Keywords: accordion, disclosure.

      - Document: [components/accordion.md](components/accordion.md)
      - Figma: [Core Components](https://www.figma.com/design/FILEKEY?node-id=17260-166) (version "Components published", 2026-10-07)
      - Chapters:
        - [Accordion single](components/accordion.md#accordion-single)
        - [Content and Assets](components/accordion.md#content-and-assets)
          - [Custom hint area](components/accordion.md#custom-hint-area)
        - [Usage](components/accordion.md#usage)
          - [Custom hint area](components/accordion.md#custom-hint-area-1)
      "
    `);
  });
});
