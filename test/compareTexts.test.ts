import { describe, expect, it } from 'vitest';
import {
  compareSections,
  parseSections,
  plainText,
  type Section,
} from '../src/review/compareTexts.ts';

const PATH = 'docs/components/button.md';

function sections(lines: string[]): Section[] {
  return parseSections(
    ['---', 'id: button', '---', '', '# Button', '', ...lines].join('\n'),
    PATH
  );
}

describe('plainText', () => {
  it('shows link targets and drops emphasis and escapes', () => {
    expect(
      plainText(
        '**Label** Uses the [input component](https://figma.com/x?node-id=1-2) and \\*stars\\*'
      )
    ).toBe(
      'Label Uses the input component (https://figma.com/x?node-id=1-2) and *stars*'
    );
  });
});

describe('parseSections', () => {
  it('splits the text at headings and leaves out figures and captions', () => {
    const parsed = sections([
      'Intro text.',
      '',
      '## Formatting',
      '',
      '### Sizes',
      '',
      'Two sizes:',
      '',
      '- small',
      '   - only in tables',
      '',
      '![Sizes](button/sizes-3-4.png)',
      '',
      '_Figure: Two buttons._',
      '',
      '> Use the small size sparingly.',
    ]);

    expect(
      parsed.map(({ trail, heading, body }) => ({ trail, heading, body }))
    ).toEqual([
      { trail: 'Button', heading: 'Button', body: 'Intro text.' },
      { trail: 'Button › Formatting', heading: 'Formatting', body: '' },
      {
        trail: 'Button › Formatting › Sizes',
        heading: 'Sizes',
        body: 'Two sizes:\n\n- small\n   - only in tables\n\nNote: Use the small size sparingly.',
      },
    ]);
    expect(parsed[2]?.figures).toEqual([
      { path: 'docs/components/button/sizes-3-4.png', line: 17 },
    ]);
  });
});

describe('compareSections', () => {
  it('reports changed, added and removed text by heading trail', () => {
    const changes = compareSections(
      sections([
        '## Usage',
        '',
        'Use it once.',
        '',
        '## Old',
        '',
        'Gone soon.',
      ]),
      sections(['## Usage', '', 'Use it twice.', '', '### New', '', 'Fresh.'])
    );

    expect(
      changes.map(({ key, status, before, after }) => ({
        key,
        status,
        before: before?.text,
        after: after?.text,
      }))
    ).toEqual([
      {
        key: 'Button › Usage',
        status: 'changed',
        before: 'Usage\n\nUse it once.',
        after: 'Usage\n\nUse it twice.',
      },
      {
        key: 'Button › Usage › New',
        status: 'added',
        before: undefined,
        after: 'New\n\nFresh.',
      },
      {
        key: 'Button › Old',
        status: 'removed',
        before: 'Old\n\nGone soon.',
        after: undefined,
      },
    ]);
  });

  it('treats a renamed heading over the same text as a change', () => {
    const changes = compareSections(
      sections(['## Behaviour', '', 'Opens on click.']),
      sections(['## Behavior', '', 'Opens on click.'])
    );

    expect(changes).toMatchObject([
      {
        key: 'Button › Behavior',
        status: 'changed',
        before: { section: 'Button › Behaviour' },
        after: { section: 'Button › Behavior' },
      },
    ]);
  });

  it('pairs a renamed heading with edited text under the same parent', () => {
    const changes = compareSections(
      sections([
        '## Rules',
        '',
        '### If thes can be used',
        '',
        'It mus tbe used.',
      ]),
      sections([
        '## Rules',
        '',
        '### If it can be used',
        '',
        'It must be used.',
      ])
    );

    expect(changes.map(({ key, status }) => ({ key, status }))).toEqual([
      { key: 'Button › Rules › If it can be used', status: 'changed' },
    ]);
  });

  it('leaves out sections without text and matches repeated headings in order', () => {
    const changes = compareSections(
      sections(['## Do', '', 'First.', '', '## Do', '', 'Second.']),
      sections([
        '## Do',
        '',
        'First.',
        '',
        '## Do',
        '',
        'Second, edited.',
        '',
        '## Images only',
        '',
        '![x](button/x-1-1.png)',
      ])
    );

    expect(changes.map(({ key, status }) => ({ key, status }))).toEqual([
      { key: 'Button › Do (2)', status: 'changed' },
    ]);
  });

  it('finds nothing when only figures and captions changed', () => {
    expect(
      compareSections(
        sections([
          '## Usage',
          '',
          'Text.',
          '',
          '![a](button/a-1-1.png)',
          '',
          '_Figure: Old._',
        ]),
        sections([
          '## Usage',
          '',
          'Text.',
          '',
          '![b](button/b-2-2.png)',
          '',
          '_Figure: New._',
        ])
      )
    ).toEqual([]);
  });
});
