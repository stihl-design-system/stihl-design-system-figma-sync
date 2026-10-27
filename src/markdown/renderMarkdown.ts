import { stringify } from 'yaml';
import type { DocCategory } from '../config.ts';
import type { Block, Inline } from '../extract/collectBlocks.ts';

export interface Frontmatter {
  component: string;
  title: string;
  category: DocCategory;
  importName?: string;
  package?: string;
  keywords?: string[];
  figmaFileKey: string;
  figmaNodeId: string;
  figmaVersion: string;
  figmaVersionLabel: string;
  figmaVersionCreatedAt: string;
  syncedAt: string;
  sourceUrl: string;
}

export interface RenderOptions {
  frontmatter: Frontmatter;
  /** nodeId to path relative to the Markdown file */
  imagePaths: Map<string, string>;
}

export function figmaNodeUrl(fileKey: string, nodeId: string): string {
  return `https://www.figma.com/design/${fileKey}?node-id=${nodeId.replace(':', '-')}`;
}

function escapeText(text: string): string {
  return text.replace(/[\\`*_[\]<>]/g, (char) => `\\${char}`);
}

function renderInlines(inlines: Inline[]): string {
  return inlines
    .map((inline) => {
      let text = escapeText(inline.text);
      if (inline.bold && text.trim()) {
        const leading = text.match(/^\s*/)?.[0] ?? '';
        const trailing = text.match(/\s*$/)?.[0] ?? '';
        text = `${leading}**${text.trim()}**${trailing}`;
      }
      if (inline.href) {
        text = `[${text}](${inline.href})`;
      }
      return text;
    })
    .join('')
    .replace(/\s+/g, ' ');
}

/**
 * Figma sections often jump from a board title (H2) straight to a section title (H4).
 * Closes those gaps so every heading is at most one level below its parent.
 */
export function normalizeHeadingLevels(blocks: Block[]): Block[] {
  const open: { source: number; rendered: number }[] = [];
  return blocks.map((block) => {
    if (block.type !== 'heading') {
      return block;
    }
    while (open.length > 0 && open.at(-1)!.source >= block.level) {
      open.pop();
    }
    const parentLevel = open.at(-1)?.rendered ?? 1;
    const rendered = Math.min(block.level, parentLevel + 1);
    open.push({ source: block.level, rendered });
    return { ...block, level: rendered };
  });
}

function renderBlock(block: Block, options: RenderOptions): string | undefined {
  switch (block.type) {
    case 'heading':
      return `${'#'.repeat(Math.min(6, block.level))} ${escapeText(block.text)}`;
    case 'paragraph':
      return renderInlines(block.inlines);
    case 'list': {
      const minLevel = Math.min(...block.items.map((item) => item.level));
      // 3 spaces nest correctly under both "- " and "1. " markers
      return block.items
        .map((item) => {
          const indent = '   '.repeat(item.level - minLevel);
          const marker = item.ordered ? '1.' : '-';
          return `${indent}${marker} ${renderInlines(item.inlines)}`;
        })
        .join('\n');
    }
    case 'image': {
      const path = options.imagePaths.get(block.nodeId);
      if (!path) {
        return undefined;
      }
      return `![${escapeText(block.alt)}](${path})`;
    }
  }
}

export function renderMarkdown(
  blocks: Block[],
  options: RenderOptions
): string {
  const frontmatter = stringify(options.frontmatter).trimEnd();
  const body = [`# ${escapeText(options.frontmatter.title)}`];

  for (const block of normalizeHeadingLevels(blocks)) {
    const rendered = renderBlock(block, options);
    if (rendered !== undefined && rendered.trim().length > 0) {
      body.push(rendered);
    }
  }

  return `---\n${frontmatter}\n---\n\n${body.join('\n\n')}\n`;
}
