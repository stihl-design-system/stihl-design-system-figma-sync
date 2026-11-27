import { posix } from 'node:path';
import type { TextSide, TextStatus } from '../../review/shared/manifest.ts';

/** Undoes `escapeText` of the Markdown renderer */
export function unescapeText(text: string): string {
  return text.replace(/\\([\\`*_[\]<>])/g, '$1');
}

/**
 * The text of a generated Markdown line as a reader sees it: links as
 * "text (url)", so a changed target is visible too, no bold markers, no escapes.
 */
export function plainText(line: string): string {
  return unescapeText(
    line
      .replace(/\[((?:\\.|[^\]\\])*)\]\(([^)\s]+)\)/g, '$1 ($2)')
      .replace(/(?<!\\)\*\*/g, '')
  );
}

export interface Section {
  /** Heading trail, for example "Button › Formatting"; empty for text above the first heading */
  trail: string;
  heading: string;
  /** Paragraphs, lists and notes as plain text, without figures and their captions */
  body: string;
  /** Line of the heading, for reading order */
  line: number;
  /** Repository paths of the figures in the section, with their line */
  figures: { path: string; line: number }[];
}

/** Heading and body, as a text change compares and shows them */
export function sectionText(section: Section): string {
  return [section.heading, section.body].filter(Boolean).join('\n\n');
}

/** Splits a generated document into the text between one heading and the next */
export function parseSections(
  markdown: string,
  markdownPath: string
): Section[] {
  const lines = markdown.split('\n');
  let start = 0;
  if (lines[0] === '---') {
    const end = lines.indexOf('---', 1);
    start = end === -1 ? 0 : end + 1;
  }

  const sections: Section[] = [];
  const trail: { level: number; text: string }[] = [];
  let current: Section & { lines: string[] } = {
    trail: '',
    heading: '',
    body: '',
    line: start,
    figures: [],
    lines: [],
  };
  const close = (): void => {
    current.body = current.lines
      .join('\n')
      .replace(/\n{3,}/g, '\n\n')
      .trim();
    const { lines: _lines, ...section } = current;
    if (section.heading || section.body || section.figures.length > 0) {
      sections.push(section);
    }
  };

  for (let i = start; i < lines.length; i++) {
    const line = lines[i] ?? '';
    const heading = line.match(/^(#{1,6})\s+(.*)$/);
    if (heading?.[1] && heading[2]) {
      close();
      const level = heading[1].length;
      while (trail.length > 0 && (trail.at(-1)?.level ?? 0) >= level) {
        trail.pop();
      }
      const text = unescapeText(heading[2].trim());
      trail.push({ level, text });
      current = {
        trail: trail.map((entry) => entry.text).join(' › '),
        heading: text,
        body: '',
        line: i,
        figures: [],
        lines: [],
      };
      continue;
    }
    const image = line.match(/^!\[.*\]\((.+\.png)\)$/);
    if (image?.[1]) {
      current.figures.push({
        path: posix.join(posix.dirname(markdownPath), image[1]),
        line: i,
      });
      continue;
    }
    if (/^_Figure: .*_$/.test(line)) {
      continue;
    }
    const note = line.match(/^> (.*)$/);
    current.lines.push(
      note ? `Note: ${plainText(note[1] ?? '')}` : plainText(line)
    );
  }
  close();
  return sections;
}

export interface TextChange {
  /** Heading trail of the newer side, numbered when a document repeats it */
  key: string;
  status: TextStatus;
  before?: TextSide & { line: number };
  after?: TextSide & { line: number };
}

/** Heading trails, numbered from the second time a trail appears in the document */
function keyed(sections: Section[]): Map<string, Section> {
  const keys = new Map<string, Section>();
  const seen = new Map<string, number>();
  for (const section of sections) {
    const count = (seen.get(section.trail) ?? 0) + 1;
    seen.set(section.trail, count);
    keys.set(
      count === 1 ? section.trail : `${section.trail} (${count})`,
      section
    );
  }
  return keys;
}

function side(section: Section): TextSide & { line: number } {
  return {
    section: section.trail,
    text: sectionText(section),
    line: section.line,
  };
}

/**
 * Compares the sections of two versions of a document. Sections are matched by
 * heading trail; a section whose heading was renamed counts as changed, not as
 * removed and added, when its body stayed the same or when it is left over
 * under the same parent heading. Sections without body text that appear or
 * disappear are left out, their figures show the change.
 */
export function compareSections(
  before: Section[],
  after: Section[]
): TextChange[] {
  const previous = keyed(before);
  const next = keyed(after);
  const changes: TextChange[] = [];
  const removed: [string, Section][] = [];
  for (const [key, section] of previous) {
    const match = next.get(key);
    if (!match) {
      removed.push([key, section]);
    } else if (sectionText(match) !== sectionText(section)) {
      changes.push({
        key,
        status: 'changed',
        before: side(section),
        after: side(match),
      });
    }
  }
  const added = [...next].filter(([key]) => !previous.has(key));

  // A renamed heading: first the same body under a new heading, then, under the same parent
  // heading, the sections that are left over in their order (a typo fixed in heading and text)
  const parent = (section: Section): string =>
    section.trail.split(' › ').slice(0, -1).join(' › ');
  const renamedTo = new Map<Section, Section>();
  const paired = new Set<Section>();
  const pair = (
    match: (candidate: Section, section: Section) => boolean
  ): void => {
    for (const [, section] of added) {
      if (renamedTo.has(section)) {
        continue;
      }
      const candidate = removed.find(
        ([, before]) => !paired.has(before) && match(before, section)
      )?.[1];
      if (candidate) {
        paired.add(candidate);
        renamedTo.set(section, candidate);
      }
    }
  };
  pair((before, section) => before.body !== '' && before.body === section.body);
  pair((before, section) => parent(before) === parent(section));

  for (const [key, section] of added) {
    const renamed = renamedTo.get(section);
    if (renamed) {
      if (sectionText(renamed) !== sectionText(section)) {
        changes.push({
          key,
          status: 'changed',
          before: side(renamed),
          after: side(section),
        });
      }
    } else if (section.body) {
      changes.push({ key, status: 'added', after: side(section) });
    }
  }
  for (const [key, section] of removed) {
    if (!paired.has(section) && section.body) {
      changes.push({ key, status: 'removed', before: side(section) });
    }
  }
  return changes;
}
