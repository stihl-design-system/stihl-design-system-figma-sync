export interface DocumentHeading {
  level: number;
  /** Heading text as written in the Markdown (escapes included) */
  text: string;
}

/** GitHub style heading anchor */
export function headingSlug(text: string): string {
  return text
    .replace(/\\([\\`*_[\]<>])/g, '$1')
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s-]/gu, '')
    .trim()
    .replace(/\s+/g, '-');
}

export function stripFrontmatter(markdown: string): string {
  return markdown.replace(/^---\n[\s\S]*?\n---\n/, '');
}

export function parseHeadings(markdown: string): DocumentHeading[] {
  const headings: DocumentHeading[] = [];
  for (const line of stripFrontmatter(markdown).split('\n')) {
    const match = line.match(/^(#{1,6}) (.+)$/);
    if (match?.[1] && match[2]) {
      headings.push({ level: match[1].length, text: match[2] });
    }
  }
  return headings;
}

export function withUniqueSlugs<T extends DocumentHeading>(
  headings: T[]
): (T & { slug: string })[] {
  const seen = new Map<string, number>();
  return headings.map((heading) => {
    const base = headingSlug(heading.text);
    const count = seen.get(base) ?? 0;
    seen.set(base, count + 1);
    return { ...heading, slug: count === 0 ? base : `${base}-${count}` };
  });
}
