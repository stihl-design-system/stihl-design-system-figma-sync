import type {
  Node,
  SubcanvasNode,
  TextNode,
  TypeStyle,
} from '@figma/rest-api-spec';

export interface Inline {
  text: string;
  bold?: boolean;
  href?: string;
}

export interface ListItem {
  /** 1 = top level, 2 = nested one level, ... */
  level: number;
  ordered: boolean;
  inlines: Inline[];
}

export type Block =
  | { type: 'heading'; level: number; text: string; nodeId: string }
  | { type: 'paragraph'; inlines: Inline[]; nodeId: string }
  | { type: 'list'; items: ListItem[]; nodeId: string }
  | { type: 'image'; nodeId: string; alt: string };

export interface CollectOptions {
  fileKey: string;
  /** fontSize (as string key) to heading level */
  headingLevels: Record<string, number>;
  /** Container names (trimmed, case-insensitive) that are exported as images */
  imageFrameNames?: string[];
  /** Exact text content that is template noise and gets dropped */
  skipTexts?: string[];
  /** Container names that never contain documentation */
  skipFrameNames?: string[];
}

const DEFAULTS = {
  imageFrameNames: ['Frame For Specs'],
  skipTexts: ['Link TO →'],
  skipFrameNames: ['logo', 'divider'],
};

const Y_TOLERANCE = 8;
const BOLD_WEIGHT = 600;

type ChildNode = SubcanvasNode;

function hasChildren(node: Node): node is Node & { children: ChildNode[] } {
  return Array.isArray((node as { children?: unknown }).children);
}

function boundingBox(node: Node): { x: number; y: number } {
  const box = (
    node as { absoluteBoundingBox?: { x: number; y: number } | null }
  ).absoluteBoundingBox;
  return box ?? { x: 0, y: 0 };
}

/** Reading order: top to bottom, left to right within the same row. */
export function sortByReadingOrder<T extends Node>(nodes: T[]): T[] {
  return [...nodes].sort((a, b) => {
    const boxA = boundingBox(a);
    const boxB = boundingBox(b);
    const dy = boxA.y - boxB.y;
    if (Math.abs(dy) <= Y_TOLERANCE) {
      return boxA.x - boxB.x;
    }
    return dy;
  });
}

function normalizeName(name: string): string {
  return name.trim().toLowerCase();
}

function containsVisibleText(node: Node): boolean {
  if ((node as { visible?: boolean }).visible === false) {
    return false;
  }
  if (node.type === 'TEXT') {
    return node.characters.trim().length > 0;
  }
  return hasChildren(node) && node.children.some(containsVisibleText);
}

function hyperlinkToHref(
  style: Partial<TypeStyle> | undefined,
  fileKey: string
): string | undefined {
  const link = style?.hyperlink;
  if (!link) {
    return undefined;
  }
  if (link.type === 'URL' && link.url) {
    return link.url;
  }
  if (link.type === 'NODE' && link.nodeID) {
    return `https://www.figma.com/design/${fileKey}?node-id=${link.nodeID.replace(':', '-')}`;
  }
  return undefined;
}

/** Splits one line of a text node into inline runs with uniform bold/link styling. */
function lineToInlines(
  node: TextNode,
  line: string,
  offset: number,
  fileKey: string
): Inline[] {
  const inlines: Inline[] = [];
  const baseBold = (node.style.fontWeight ?? 400) >= BOLD_WEIGHT;
  const baseHref = hyperlinkToHref(node.style, fileKey);

  for (let i = 0; i < line.length; i++) {
    const overrideId = node.characterStyleOverrides[offset + i] ?? 0;
    const override =
      overrideId === 0
        ? undefined
        : node.styleOverrideTable[String(overrideId)];
    const bold =
      override?.fontWeight !== undefined
        ? override.fontWeight >= BOLD_WEIGHT
        : baseBold;
    const href =
      override?.hyperlink !== undefined
        ? hyperlinkToHref(override, fileKey)
        : baseHref;
    const char = line[i] ?? '';
    const last = inlines.at(-1);
    if (last && last.bold === bold && last.href === href) {
      last.text += char;
    } else {
      inlines.push({ text: char, bold, href });
    }
  }

  return inlines
    .map((inline) => {
      const cleaned: Inline = { text: inline.text };
      if (inline.bold) {
        cleaned.bold = true;
      }
      if (inline.href) {
        cleaned.href = inline.href;
      }
      return cleaned;
    })
    .filter((inline) => inline.text.length > 0);
}

function textToBlocks(
  node: TextNode,
  options: Required<CollectOptions>
): Block[] {
  const characters = node.characters;
  if (options.skipTexts.includes(characters.trim())) {
    return [];
  }

  const headingLevel = options.headingLevels[String(node.style.fontSize)];
  if (headingLevel !== undefined) {
    const text = characters.replace(/\s+/g, ' ').trim();
    return text
      ? [{ type: 'heading', level: headingLevel, text, nodeId: node.id }]
      : [];
  }

  const blocks: Block[] = [];
  const lines = characters.split('\n');
  let offset = 0;
  let currentList: Extract<Block, { type: 'list' }> | undefined;

  lines.forEach((line, index) => {
    const lineType = node.lineTypes[index] ?? 'NONE';
    const indentation = node.lineIndentations[index] ?? 0;
    const inlines = lineToInlines(node, line, offset, options.fileKey);
    offset += line.length + 1;

    if (
      inlines
        .map((i) => i.text)
        .join('')
        .trim().length === 0
    ) {
      currentList = undefined;
      return;
    }

    if (lineType === 'NONE') {
      currentList = undefined;
      blocks.push({
        type: 'paragraph',
        inlines: trimInlines(inlines),
        nodeId: node.id,
      });
      return;
    }

    if (!currentList) {
      currentList = { type: 'list', items: [], nodeId: node.id };
      blocks.push(currentList);
    }
    currentList.items.push({
      level: Math.max(1, indentation),
      ordered: lineType === 'ORDERED',
      inlines: trimInlines(inlines),
    });
  });

  return blocks;
}

function trimInlines(inlines: Inline[]): Inline[] {
  const result = inlines.map((i) => ({ ...i }));
  const first = result[0];
  const last = result.at(-1);
  if (first) {
    first.text = first.text.trimStart();
  }
  if (last) {
    last.text = last.text.trimEnd();
  }
  return result.filter((i) => i.text.length > 0);
}

/**
 * Transforms the node tree of a documentation page or section into a flat list of blocks.
 * Headings are detected by font size, lists via Figma line types, images via container names.
 */
export function collectBlocks(
  root: Node,
  userOptions: CollectOptions
): Block[] {
  const options: Required<CollectOptions> = { ...DEFAULTS, ...userOptions };
  const imageNames = new Set(options.imageFrameNames.map(normalizeName));
  const skipNames = new Set(options.skipFrameNames.map(normalizeName));
  const blocks: Block[] = [];
  let lastHeading = '';

  const visit = (node: Node, depth: number): void => {
    if ((node as { visible?: boolean }).visible === false) {
      return;
    }
    if (node.type === 'TEXT') {
      // Loose text directly on the canvas is scratch content, not documentation
      if (depth === 1 && root.type === 'CANVAS') {
        return;
      }
      for (const block of textToBlocks(node, options)) {
        if (block.type === 'heading') {
          lastHeading = block.text;
        }
        blocks.push(block);
      }
      return;
    }
    if (!hasChildren(node)) {
      return;
    }
    const name = normalizeName(node.name);
    if (skipNames.has(name)) {
      return;
    }
    if (imageNames.has(name)) {
      blocks.push({
        type: 'image',
        nodeId: node.id,
        alt: lastHeading || node.name.trim(),
      });
      return;
    }
    if (depth > 0 && !containsVisibleText(node)) {
      return;
    }
    for (const child of sortByReadingOrder(node.children)) {
      visit(child, depth + 1);
    }
  };

  visit(root, 0);
  return blocks;
}
