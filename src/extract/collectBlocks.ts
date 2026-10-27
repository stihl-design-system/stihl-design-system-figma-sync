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
  | { type: 'image'; nodeId: string; alt: string }
  | { type: 'note'; inlines: Inline[]; nodeId: string };

export interface CollectOptions {
  fileKey: string;
  /** fontSize (as string key) to heading level */
  headingLevels: Record<string, number>;
  /** Container names (trimmed, case-insensitive) that are exported as images */
  imageFrameNames?: string[];
  /** Instance names whose text is a documentation callout (rendered as a quote) */
  noteInstanceNames?: string[];
  /** Exact text content that is template noise and gets dropped */
  skipTexts?: string[];
}

const DEFAULTS = {
  imageFrameNames: ['Frame For Specs'],
  noteInstanceNames: ['notification'],
  skipTexts: ['Link TO →'],
};

const Y_TOLERANCE = 8;
const BOLD_WEIGHT = 600;
const MAX_HEADING_LENGTH = 120;
const MAX_HEADING_WORD_LENGTH = 30;

/** Titles are short and made of words; sentences and font specimens are not titles. */
function looksLikeTitle(text: string): boolean {
  return (
    text.length <= MAX_HEADING_LENGTH &&
    text.split(/\s+/).every((word) => word.length <= MAX_HEADING_WORD_LENGTH)
  );
}

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

function isHeading(node: TextNode, options: CollectOptions): boolean {
  return (
    options.headingLevels[String(node.style.fontSize)] !== undefined &&
    (node.style.fontWeight ?? 400) >= BOLD_WEIGHT
  );
}

/** Documentation blocks built as components (e.g. "contribute") carry a heading; UI instances do not. */
function containsHeading(node: Node, options: CollectOptions): boolean {
  if ((node as { visible?: boolean }).visible === false) {
    return false;
  }
  if (node.type === 'TEXT') {
    return isHeading(node, options) && node.characters.trim().length > 0;
  }
  return (
    hasChildren(node) && node.children.some((c) => containsHeading(c, options))
  );
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

  // Heading sizes set in regular weight are lead paragraphs, not titles;
  // heading sized sentences longer than a title are lead paragraphs too (they stay bold)
  if (isHeading(node, options)) {
    const headingLevel = options.headingLevels[String(node.style.fontSize)]!;
    const text = characters.replace(/\s+/g, ' ').trim();
    if (!text) {
      return [];
    }
    if (looksLikeTitle(text)) {
      return [{ type: 'heading', level: headingLevel, text, nodeId: node.id }];
    }
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

/** All visible text of a container as one inline run per text node, in reading order. */
function collectTextInlines(
  node: Node,
  options: Required<CollectOptions>
): Inline[] {
  const inlines: Inline[] = [];
  const visit = (current: Node): void => {
    if ((current as { visible?: boolean }).visible === false) {
      return;
    }
    if (current.type === 'TEXT') {
      const text = current.characters.trim();
      if (!text || options.skipTexts.includes(text)) {
        return;
      }
      if (inlines.length > 0) {
        inlines.push({ text: ' ' });
      }
      // Raw characters keep the style override offsets aligned; the renderer collapses whitespace
      inlines.push(
        ...trimInlines(
          lineToInlines(current, current.characters, 0, options.fileKey)
        )
      );
      return;
    }
    if (hasChildren(current)) {
      for (const child of sortByReadingOrder(current.children)) {
        visit(child);
      }
    }
  };
  visit(node);
  return inlines;
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
  const noteNames = new Set(options.noteInstanceNames.map(normalizeName));
  const blocks: Block[] = [];
  let lastHeading = '';

  const visit = (node: Node, parent: Node | undefined): void => {
    if ((node as { visible?: boolean }).visible === false) {
      return;
    }
    if (node.type === 'TEXT') {
      // Loose text directly on the canvas or in a section is scratch content, not documentation
      if (parent?.type === 'CANVAS' || parent?.type === 'SECTION') {
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
    // Component definitions on the page are the component itself, not its documentation
    if (node.type === 'COMPONENT' || node.type === 'COMPONENT_SET') {
      return;
    }
    const name = normalizeName(node.name);
    if (node.type === 'INSTANCE' && noteNames.has(name)) {
      const inlines = collectTextInlines(node, options);
      if (inlines.length > 0) {
        blocks.push({ type: 'note', inlines, nodeId: node.id });
      }
      return;
    }
    if (node.type === 'INSTANCE' && !containsHeading(node, options)) {
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
    if (parent && !containsVisibleText(node)) {
      return;
    }
    for (const child of sortByReadingOrder(node.children)) {
      visit(child, node);
    }
  };

  visit(root, undefined);
  return blocks;
}
