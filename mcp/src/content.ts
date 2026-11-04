import type { DocCategory } from '../../src/config.ts';
import { withUniqueSlugs } from '../../src/markdown/headings.ts';

/** One synced Figma documentation page, as shipped in content.json */
export interface ContentDocument {
  id: string;
  title: string;
  category: DocCategory;
  importNames: string[];
  package?: string;
  keywords: string[];
  /** Asset path of the Markdown file, e.g. `components/button.md`; images are resolved relative to it */
  path: string;
  sourceUrl: string;
  figmaFile: string;
  figmaProject: string;
  figmaVersionLabel: string;
  figmaVersionCreatedAt: string;
  syncedAt: string;
  /** Markdown body without frontmatter and without the H1 title */
  markdown: string;
}

export interface ContentBundle {
  generatedAt: string;
  documents: ContentDocument[];
}

export interface Chapter {
  title: string;
  slug: string;
  /** Markdown of the chapter including its own `##` heading */
  markdown: string;
}

export const CATEGORIES: readonly DocCategory[] = [
  'foundation',
  'component',
  'pattern',
  'guideline',
];

export const CATEGORY_LABELS: Record<DocCategory, string> = {
  foundation: 'Foundations',
  component: 'Components',
  pattern: 'Patterns',
  guideline: 'Guidelines',
};

const HEADING = /^(#{1,6}) (.+)$/;

/** Splits a document body at its `##` headings. Text before the first `##` becomes an "Intro" chapter. */
export function splitChapters(markdown: string): Chapter[] {
  const groups: { title: string; lines: string[] }[] = [];
  let current: { title: string; lines: string[] } | undefined;
  for (const line of markdown.split('\n')) {
    const match = line.match(HEADING);
    if (match?.[1]?.length === 2 && match[2]) {
      current = { title: match[2], lines: [line] };
      groups.push(current);
      continue;
    }
    if (!current) {
      if (line.trim() === '') {
        continue;
      }
      current = { title: 'Intro', lines: [] };
      groups.push(current);
    }
    current.lines.push(line);
  }
  return withUniqueSlugs(
    groups.map((group) => ({ level: 2, text: group.title, lines: group.lines }))
  ).map((group) => ({
    title: group.text,
    slug: group.slug,
    markdown: group.lines.join('\n').trim(),
  }));
}

export function findChapter(
  chapters: Chapter[],
  query: string
): Chapter | undefined {
  const needle = query.trim().toLowerCase();
  return (
    chapters.find(
      (chapter) =>
        chapter.slug === needle || chapter.title.toLowerCase() === needle
    ) ??
    chapters.find((chapter) => chapter.title.toLowerCase().includes(needle))
  );
}

/** Unescapes the Markdown escapes the renderer adds for literal characters */
export function plainText(markdown: string): string {
  return markdown.replace(/\\([\\`*_[\]<>])/g, '$1');
}

/** Short description for catalogues: the "Definition" paragraph if there is one, otherwise the first real sentence. */
export function summarize(doc: ContentDocument): string | undefined {
  const paragraphs = doc.markdown.split(/\n{2,}/).map((p) => p.trim());
  const definitionIndex = paragraphs.findIndex((p) =>
    /^#{2,6} Definition$/.test(p)
  );
  const candidates =
    definitionIndex >= 0 ? paragraphs.slice(definitionIndex + 1) : paragraphs;
  for (const paragraph of candidates) {
    if (paragraph === '' || /^(#|!\[)/.test(paragraph)) {
      continue;
    }
    // A list stands in for prose on many boards; its first item is the gist
    const firstLine = paragraph.split('\n')[0] ?? '';
    const text = plainText(
      (/^([-*]|\d+\.) /.test(firstLine) ? firstLine : paragraph)
        .replace(/^([-*]|\d+\.) /, '')
        .replace(/\s+/g, ' ')
        .trim()
    );
    if (text.length < 20 || text.endsWith(':')) {
      continue;
    }
    return text.length > 240 ? `${text.slice(0, 237).trimEnd()}...` : text;
  }
  return undefined;
}

/** Rewrites relative image references to absolute URLs under `origin` */
export function absolutizeImages(
  markdown: string,
  doc: ContentDocument,
  origin: string
): string {
  const base = new URL(doc.path, `${origin}/`);
  return markdown.replace(
    /!\[([^\]]*)\]\(([^)\s]+)\)/g,
    (whole, alt: string, target: string) => {
      if (/^[a-z]+:/i.test(target)) {
        return whole;
      }
      return `![${alt}](${new URL(target, base).href})`;
    }
  );
}

export function documentUrl(doc: ContentDocument, origin: string): string {
  return new URL(doc.path, `${origin}/`).href;
}

export function resourceUri(doc: ContentDocument): string {
  return `stihl-ds://${doc.category}/${doc.id}`;
}

export function findDocument(
  bundle: ContentBundle,
  id: string
): ContentDocument | undefined {
  const needle = id.trim().toLowerCase();
  return (
    bundle.documents.find((doc) => doc.id === needle) ??
    bundle.documents.find((doc) => doc.title.toLowerCase() === needle) ??
    bundle.documents.find((doc) =>
      doc.importNames.some((name) => name.toLowerCase() === needle)
    )
  );
}

export function sortedDocuments(
  bundle: ContentBundle,
  category?: DocCategory
): ContentDocument[] {
  return bundle.documents
    .filter((doc) => !category || doc.category === category)
    .sort(
      (a, b) =>
        CATEGORIES.indexOf(a.category) - CATEGORIES.indexOf(b.category) ||
        a.title.localeCompare(b.title)
    );
}
