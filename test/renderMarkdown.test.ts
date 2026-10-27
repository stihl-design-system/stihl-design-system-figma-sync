import { readFileSync } from 'node:fs';
import type { Node } from '@figma/rest-api-spec';
import { describe, expect, it } from 'vitest';
import { collectBlocks, type Block } from '../src/extract/collectBlocks.ts';
import {
  renderMarkdown,
  type Frontmatter,
} from '../src/markdown/renderMarkdown.ts';

const frontmatter: Frontmatter = {
  id: 'accordion',
  title: 'Accordion',
  category: 'component',
  importNames: ['DSAccordion'],
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

describe('renderMarkdown', () => {
  it('renders frontmatter, headings, inline styles, nested lists and images', () => {
    const blocks: Block[] = [
      { type: 'heading', level: 2, text: 'Formatting', nodeId: 'h' },
      {
        type: 'paragraph',
        nodeId: 'p',
        inlines: [
          { text: 'Follow the ' },
          { text: 'grid', href: 'https://example.com/grid' },
          { text: ' and ' },
          { text: 'keep it short', bold: true },
          { text: '.' },
        ],
      },
      {
        type: 'list',
        nodeId: 'l',
        items: [
          {
            level: 1,
            ordered: true,
            inlines: [{ text: 'Header', bold: true }],
          },
          { level: 2, ordered: false, inlines: [{ text: 'Summary' }] },
          { level: 1, ordered: true, inlines: [{ text: 'Content' }] },
        ],
      },
      { type: 'image', nodeId: '1:2', alt: 'Anatomy' },
      { type: 'image', nodeId: '1:3', alt: 'Missing export' },
    ];

    const markdown = renderMarkdown(blocks, {
      frontmatter,
      imagePaths: new Map([['1:2', 'accordion/anatomy-1-2.png']]),
    });

    expect(markdown).toMatchInlineSnapshot(`
      "---
      id: accordion
      title: Accordion
      category: component
      importNames:
        - DSAccordion
      package: "@stihl-design-system/components"
      keywords:
        - accordion
        - disclosure
      figmaFile: Core Components
      figmaProject: 02. Core Components
      figmaFileKey: FILEKEY
      figmaNodeId: 17260:166
      figmaVersion: "123"
      figmaVersionLabel: Components published
      figmaVersionCreatedAt: 2026-10-07T09:00:47Z
      syncedAt: 2026-10-09T00:00:00.000Z
      sourceUrl: https://www.figma.com/design/FILEKEY?node-id=17260-166
      ---

      # Accordion

      ## Formatting

      Follow the [grid](https://example.com/grid) and **keep it short**.

      1. **Header**
         - Summary
      1. Content

      ![Anatomy](accordion/anatomy-1-2.png)
      "
    `);
  });

  it('escapes Markdown control characters in text', () => {
    const markdown = renderMarkdown(
      [
        {
          type: 'paragraph',
          nodeId: 'p',
          inlines: [{ text: 'Use *asterisks* and [brackets]' }],
        },
      ],
      { frontmatter, imagePaths: new Map() }
    );
    expect(markdown).toContain('Use \\*asterisks\\* and \\[brackets\\]');
  });

  it('closes gaps in the heading hierarchy without flattening siblings', () => {
    const heading = (level: number, text: string): Block => ({
      type: 'heading',
      level,
      text,
      nodeId: text,
    });
    const markdown = renderMarkdown(
      [
        heading(2, 'Behavior'),
        heading(4, 'Focus management'),
        heading(2, 'Content'),
        heading(4, 'Accessible copy'),
        heading(3, 'Title'),
        heading(4, 'Recommendations'),
      ],
      { frontmatter, imagePaths: new Map() }
    );
    expect(markdown.split('\n').filter((line) => line.startsWith('#')))
      .toMatchInlineSnapshot(`
        [
          "# Accordion",
          "## Behavior",
          "### Focus management",
          "## Content",
          "### Accessible copy",
          "### Title",
          "#### Recommendations",
        ]
      `);
  });

  it('renders the Accordion fixture to a stable document', () => {
    const fixture = JSON.parse(
      readFileSync('test/fixtures/accordion-nodes.json', 'utf8')
    ) as {
      nodes: Record<string, { document: Node }>;
    };
    const blocks = collectBlocks(fixture.nodes['17260:166']!.document, {
      fileKey: 'FILEKEY',
      headingLevels: { '64': 2, '48': 3, '24': 4 },
    });
    const imagePaths = new Map(
      blocks
        .filter((b) => b.type === 'image')
        .map((b) => [b.nodeId, `accordion/${b.nodeId}.png`])
    );
    expect(
      renderMarkdown(blocks, { frontmatter, imagePaths })
    ).toMatchSnapshot();
  });
});
