import type { DocCategory } from '../../src/config.ts';
import {
  plainText,
  splitChapters,
  type ContentBundle,
  type ContentDocument,
} from './content.ts';

export interface SearchHit {
  document: ContentDocument;
  chapter: string;
  slug: string;
  score: number;
  snippet: string;
}

export interface SearchOptions {
  category?: DocCategory;
  limit?: number;
}

export function tokenize(text: string): string[] {
  return plainText(text)
    .toLowerCase()
    .split(/[^\p{L}\p{N}]+/u)
    .filter((term) => term.length > 1);
}

function countOccurrences(haystack: string, needle: string): number {
  let count = 0;
  let index = haystack.indexOf(needle);
  while (index !== -1) {
    count++;
    index = haystack.indexOf(needle, index + needle.length);
  }
  return count;
}

function snippetFor(markdown: string, terms: string[]): string {
  const lines = markdown
    .split('\n')
    .map((line) =>
      plainText(line)
        .replace(/!\[[^\]]*\]\([^)]*\)/g, '')
        .trim()
    )
    .filter((line) => line !== '' && !line.startsWith('#'));
  let best = lines[0];
  let bestCount = 0;
  for (const candidate of lines) {
    const lower = candidate.toLowerCase();
    const count = terms.filter((term) => lower.includes(term)).length;
    if (count > bestCount) {
      best = candidate;
      bestCount = count;
    }
  }
  if (!best) {
    return '';
  }
  const clean = best.replace(/^[-*] |^\d+\. |\*\*/g, '');
  return clean.length > 220 ? `${clean.slice(0, 217).trimEnd()}...` : clean;
}

/**
 * Ranks chapters by simple term matching: document title and keywords weigh
 * most, chapter headings next, body occurrences least. Chapters that contain
 * every query term get a bonus so multi word queries surface the right board.
 */
export function search(
  bundle: ContentBundle,
  query: string,
  options: SearchOptions = {}
): SearchHit[] {
  const terms = [...new Set(tokenize(query))];
  if (terms.length === 0) {
    return [];
  }
  const limit = Math.min(Math.max(options.limit ?? 10, 1), 30);
  const hits: SearchHit[] = [];

  for (const document of bundle.documents) {
    if (options.category && document.category !== options.category) {
      continue;
    }
    const title = document.title.toLowerCase();
    const keywords = document.keywords.map((k) => k.toLowerCase());
    const names = document.importNames.map((n) => n.toLowerCase());
    let documentScore = 0;
    const documentTerms = new Set<string>();
    for (const term of terms) {
      if (title === term || names.includes(term)) {
        documentScore += 20;
      } else if (title.includes(term)) {
        documentScore += 10;
      }
      if (keywords.some((keyword) => keyword === term)) {
        documentScore += 8;
      } else if (keywords.some((keyword) => keyword.includes(term))) {
        documentScore += 4;
      }
      if (
        title.includes(term) ||
        names.includes(term) ||
        keywords.some((k) => k.includes(term))
      ) {
        documentTerms.add(term);
      }
    }

    const chapters = splitChapters(document.markdown);
    for (const [index, chapter] of chapters.entries()) {
      const heading = chapter.title.toLowerCase();
      const body = plainText(chapter.markdown).toLowerCase();
      let ownScore = 0;
      let matched = 0;
      for (const term of terms) {
        const inHeading = heading.includes(term) ? 5 : 0;
        const inBody = Math.min(countOccurrences(body, term), 5);
        if (inHeading || inBody || documentTerms.has(term)) {
          matched++;
        }
        ownScore += inHeading + inBody;
      }
      // A title or keyword match alone lists the document once, via its first chapter
      if (ownScore === 0 && (documentScore === 0 || index > 0)) {
        continue;
      }
      let score = documentScore + ownScore;
      if (matched === terms.length) {
        score += 15;
      }
      hits.push({
        document,
        chapter: chapter.title,
        slug: chapter.slug,
        score,
        snippet: snippetFor(chapter.markdown, terms),
      });
    }
  }

  return hits
    .sort(
      (a, b) =>
        b.score - a.score || a.document.title.localeCompare(b.document.title)
    )
    .slice(0, limit);
}
