import { describe, expect, it } from 'vitest';
import { diffWords, type DiffPart } from '../review/shared/textDiff.ts';

const text = (parts: DiffPart[]): string =>
  parts.map((part) => part.text).join('');
const marked = (parts: DiffPart[]): string[] =>
  parts.filter((part) => part.changed).map((part) => part.text);

describe('diffWords', () => {
  it('marks nothing in identical texts', () => {
    const diff = diffWords('A clear button.', 'A clear button.');
    expect(diff.before).toEqual([{ text: 'A clear button.', changed: false }]);
    expect(diff.after).toEqual([{ text: 'A clear button.', changed: false }]);
  });

  it('marks a replaced word on both sides', () => {
    const diff = diffWords(
      'Default has a red border.',
      'Default has a blue border.'
    );
    expect(diff.before).toEqual([
      { text: 'Default has a ', changed: false },
      { text: 'red', changed: true },
      { text: ' border.', changed: false },
    ]);
    expect(marked(diff.after)).toEqual(['blue']);
  });

  it('marks removed words only before and added words only after', () => {
    const diff = diffWords('An empty field.', 'An empty field with a hint.');
    expect(marked(diff.before)).toEqual([]);
    expect(marked(diff.after)).toEqual(['with a hint']);
  });

  it('compares punctuation apart from the word', () => {
    const diff = diffWords('Thin dark border.', 'Thin dark border,');
    expect(marked(diff.before)).toEqual(['.']);
    expect(marked(diff.after)).toEqual([',']);
  });

  it('joins changes separated by a short unchanged run', () => {
    const diff = diffWords(
      'Hover has a red thin border here.',
      'Hover has a blue thick border here.'
    );
    expect(marked(diff.before)).toEqual(['red thin']);
    expect(marked(diff.after)).toEqual(['blue thick']);
  });

  it('keeps longer unchanged runs between changes', () => {
    const diff = diffWords(
      'Red field with a thick dark border and a clear button.',
      'Blue field with a thick dark border and a search icon.'
    );
    expect(marked(diff.before)).toEqual(['Red', 'clear button']);
    expect(marked(diff.after)).toEqual(['Blue', 'search icon']);
  });

  it('keeps both texts intact', () => {
    const before =
      'Overview board of the combobox (medium size) in a grid with columns "default", "hover" and "disabled".';
    const after =
      'The Combobox component in various states. It shows the input-combobox in default, hover, focus, and disabled states.';
    const diff = diffWords(before, after);
    expect(text(diff.before)).toBe(before);
    expect(text(diff.after)).toBe(after);
  });

  it('handles an empty side', () => {
    const diff = diffWords('', 'New caption');
    expect(diff.before).toEqual([]);
    expect(diff.after).toEqual([{ text: 'New caption', changed: true }]);
  });
});
