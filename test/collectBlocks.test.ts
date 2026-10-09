import { readFileSync } from 'node:fs';
import type { Node, TextNode } from '@figma/rest-api-spec';
import { describe, expect, it } from 'vitest';
import {
  collectBlocks,
  sortByReadingOrder,
} from '../src/extract/collectBlocks.ts';

const fixture = JSON.parse(
  readFileSync('test/fixtures/accordion-nodes.json', 'utf8')
) as {
  nodes: Record<string, { document: Node }>;
};
const page = fixture.nodes['17260:166']!.document;

const options = {
  fileKey: 'FILEKEY',
  headingLevels: { '64': 2, '48': 3, '24': 4 },
};

function text(overrides: Partial<TextNode> & { characters: string }): Node {
  const lines = overrides.characters.split('\n');
  return {
    id: '1:1',
    name: 'definition',
    type: 'TEXT',
    characterStyleOverrides: [],
    styleOverrideTable: {},
    lineTypes: lines.map(() => 'NONE'),
    lineIndentations: lines.map(() => 0),
    style: { fontSize: 18, fontWeight: 400 },
    ...overrides,
  } as unknown as Node;
}

function frame(children: Node[], name = 'Infos'): Node {
  return { id: '0:1', name, type: 'FRAME', children } as unknown as Node;
}

describe('collectBlocks on the Accordion fixture', () => {
  const blocks = collectBlocks(page, options);

  it('detects board titles as H2 by font size', () => {
    const h2 = blocks.flatMap((b) =>
      b.type === 'heading' && b.level === 2 ? [b.text] : []
    );
    expect(h2).toEqual([
      'Accordion single',
      'Accordion Group',
      'Formatting and Construction',
      'Content and Assets',
      'Behavior',
      'Examples/Variants',
    ]);
  });

  it('emits one image block per spec frame with the section title as alt text', () => {
    const images = blocks.filter((b) => b.type === 'image');
    expect(images.length).toBe(42);
    expect(images.find((b) => b.nodeId === '18443:9584')?.alt).toBe(
      'Focus management'
    );
  });

  it('resolves hyperlinks from style overrides', () => {
    const paragraph = blocks.find(
      (b) => b.type === 'paragraph' && b.nodeId === '17260:2427'
    );
    expect(paragraph?.type).toBe('paragraph');
    if (paragraph?.type === 'paragraph') {
      expect(paragraph.inlines.find((i) => i.href)).toMatchObject({
        text: 'content grid narrow',
        href: expect.stringContaining('Grid-%26-Spacing'),
      });
    }
  });

  it('drops hidden nodes and template placeholders', () => {
    const texts = blocks.flatMap((b) =>
      b.type === 'paragraph' ? b.inlines.map((i) => i.text) : []
    );
    expect(texts).not.toContain('Link TO →');
    expect(texts.join(' ')).not.toContain(
      'Overview when to use which link type'
    );
  });
});

describe('collectBlocks on synthetic nodes', () => {
  it('falls back to paragraphs when no style information matches', () => {
    const node = text({
      characters: 'Plain text',
      style: {} as TextNode['style'],
    });
    expect(collectBlocks(frame([node]), options)).toEqual([
      { type: 'paragraph', nodeId: '1:1', inlines: [{ text: 'Plain text' }] },
    ]);
  });

  it('builds nested mixed lists from line types and indentation', () => {
    const node = text({
      characters: 'Intro\nFirst\nSub a\nSub b\nSecond\n\nOutro',
      lineTypes: [
        'NONE',
        'ORDERED',
        'UNORDERED',
        'UNORDERED',
        'ORDERED',
        'NONE',
        'NONE',
      ],
      lineIndentations: [0, 1, 2, 2, 1, 0, 0],
    });
    const blocks = collectBlocks(frame([node]), options);
    expect(blocks.map((b) => b.type)).toEqual([
      'paragraph',
      'list',
      'paragraph',
    ]);
    expect(blocks[1]).toMatchObject({
      items: [
        { level: 1, ordered: true, inlines: [{ text: 'First' }] },
        { level: 2, ordered: false, inlines: [{ text: 'Sub a' }] },
        { level: 2, ordered: false, inlines: [{ text: 'Sub b' }] },
        { level: 1, ordered: true, inlines: [{ text: 'Second' }] },
      ],
    });
  });

  it('turns node-level NODE hyperlinks into Figma URLs', () => {
    const node = text({
      characters: 'Toast',
      style: {
        fontSize: 18,
        fontWeight: 400,
        hyperlink: { type: 'NODE', nodeID: '8844:4923' },
      } as TextNode['style'],
    });
    expect(collectBlocks(frame([node]), options)[0]).toMatchObject({
      inlines: [
        {
          text: 'Toast',
          href: 'https://www.figma.com/design/FILEKEY?node-id=8844-4923',
        },
      ],
    });
  });

  it('marks bold runs via character overrides', () => {
    const node = text({
      characters: 'Note: body',
      characterStyleOverrides: [1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
      styleOverrideTable: { '1': { fontWeight: 700 } as TextNode['style'] },
    });
    expect(collectBlocks(frame([node]), options)[0]).toMatchObject({
      inlines: [{ text: 'Note:', bold: true }, { text: ' body' }],
    });
  });

  it('sorts children top to bottom, then left to right', () => {
    const at = (id: string, x: number, y: number): Node =>
      ({
        id,
        name: id,
        type: 'RECTANGLE',
        absoluteBoundingBox: { x, y, width: 1, height: 1 },
      }) as unknown as Node;
    const sorted = sortByReadingOrder([
      at('c', 0, 100),
      at('b', 500, 2),
      at('a', 0, 0),
    ]);
    expect(sorted.map((n) => n.id)).toEqual(['a', 'b', 'c']);
  });
});
