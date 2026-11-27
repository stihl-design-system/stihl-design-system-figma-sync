/** A run of text on one side of a word diff */
export interface DiffPart {
  text: string;
  /** Removed from the previous text (before side) or new in the next text (after side) */
  changed: boolean;
}

export interface TextDiff {
  before: DiffPart[];
  after: DiffPart[];
}

type Chunk =
  | { kind: 'equal'; text: string }
  | { kind: 'change'; removed: string; added: string };

/** Words, single punctuation marks and runs of whitespace */
const TOKEN = /\s+|[\p{L}\p{N}]+|[^\s\p{L}\p{N}]/gu;
const WORD = /[\p{L}\p{N}]+/gu;

/**
 * An unchanged run with at most this many words between two changes is marked as changed too.
 * Otherwise a rewritten sentence breaks into many small marks around shared words like "the".
 */
const MAX_ISLAND_WORDS = 2;

/** Compares two texts word by word, like `git diff --word-diff` */
export function diffWords(before: string, after: string): TextDiff {
  const chunks = joinIslands(
    compare(before.match(TOKEN) ?? [], after.match(TOKEN) ?? [])
  );
  return {
    before: toParts(chunks, 'removed'),
    after: toParts(chunks, 'added'),
  };
}

/** Longest common subsequence of the tokens, as alternating equal and changed chunks */
function compare(a: string[], b: string[]): Chunk[] {
  const width = b.length + 1;
  // Common tokens of a[i..] and b[j..] at i * width + j
  const common = new Uint32Array((a.length + 1) * width);
  const at = (i: number, j: number): number => common[i * width + j] ?? 0;
  for (let i = a.length - 1; i >= 0; i--) {
    for (let j = b.length - 1; j >= 0; j--) {
      common[i * width + j] =
        a[i] === b[j]
          ? at(i + 1, j + 1) + 1
          : Math.max(at(i + 1, j), at(i, j + 1));
    }
  }

  const chunks: Chunk[] = [];
  const push = (side: 'equal' | 'removed' | 'added', token: string): void => {
    const last = chunks.at(-1);
    if (side === 'equal') {
      if (last?.kind === 'equal') {
        last.text += token;
      } else {
        chunks.push({ kind: 'equal', text: token });
      }
    } else if (last?.kind === 'change') {
      last[side] += token;
    } else {
      const change: Chunk = { kind: 'change', removed: '', added: '' };
      change[side] = token;
      chunks.push(change);
    }
  };

  let i = 0;
  let j = 0;
  while (i < a.length || j < b.length) {
    if (i < a.length && j < b.length && a[i] === b[j]) {
      push('equal', a[i++] ?? '');
      j++;
    } else if (
      j < b.length &&
      (i === a.length || at(i, j + 1) >= at(i + 1, j))
    ) {
      push('added', b[j++] ?? '');
    } else {
      push('removed', a[i++] ?? '');
    }
  }
  return chunks;
}

function joinIslands(chunks: Chunk[]): Chunk[] {
  const result: Chunk[] = [];
  for (const chunk of chunks) {
    const island = result.at(-1);
    const previous = result.at(-2);
    if (
      chunk.kind === 'change' &&
      island?.kind === 'equal' &&
      previous?.kind === 'change' &&
      (island.text.match(WORD) ?? []).length <= MAX_ISLAND_WORDS
    ) {
      result.splice(-2, 2, {
        kind: 'change',
        removed: previous.removed + island.text + chunk.removed,
        added: previous.added + island.text + chunk.added,
      });
    } else {
      result.push(chunk);
    }
  }
  return result;
}

function toParts(chunks: Chunk[], side: 'removed' | 'added'): DiffPart[] {
  const parts: DiffPart[] = [];
  const add = (text: string, changed: boolean): void => {
    if (!text) {
      return;
    }
    const last = parts.at(-1);
    if (last?.changed === changed) {
      last.text += text;
    } else {
      parts.push({ text, changed });
    }
  };
  for (const chunk of chunks) {
    if (chunk.kind === 'equal') {
      add(chunk.text, false);
    } else {
      // Spaces around a change are not marked, so a mark starts and ends at a word
      const [, lead = '', core = '', trail = ''] =
        /^(\s*)([\s\S]*?)(\s*)$/.exec(chunk[side]) ?? [];
      add(lead, false);
      add(core, true);
      add(trail, false);
    }
  }
  return parts;
}
