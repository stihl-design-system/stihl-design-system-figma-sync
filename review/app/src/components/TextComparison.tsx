import { DSText, DSTextUtility } from '@stihl-design-system/components';
import classNames from 'classnames';
import { Fragment, useMemo } from 'react';
import { diffWords, type DiffPart } from '../../../shared/textDiff.ts';
import styles from './TextComparison.module.scss';

interface TextComparisonProps {
  /** undefined when the text did not exist before */
  before: string | undefined;
  /** undefined when the text was removed */
  after: string | undefined;
  /** Keeps line breaks, for section texts with paragraphs and lists */
  preserveLines?: boolean;
}

/** Previous text left, new text right, with removed and added words marked like a word diff in git */
export function TextComparison({
  before,
  after,
  preserveLines = false,
}: TextComparisonProps) {
  const diff = useMemo(
    () => diffWords(before ?? '', after ?? ''),
    [before, after]
  );
  return (
    <div
      className={classNames(styles.versions, {
        [styles.lines as string]: preserveLines,
      })}
    >
      <Version
        label='Before'
        parts={diff.before}
        Mark='del'
        missing={before === undefined ? 'Not on the page before' : undefined}
      />
      <Version
        label='After'
        parts={diff.after}
        Mark='ins'
        missing={after === undefined ? 'Removed from the page' : undefined}
      />
    </div>
  );
}

interface VersionProps {
  label: string;
  parts: DiffPart[];
  /** `del` marks removed words in the previous text, `ins` new words in the next one */
  Mark: 'del' | 'ins';
  missing?: string;
}

function Version({ label, parts, Mark, missing }: VersionProps) {
  return (
    <div className={styles.version}>
      <DSTextUtility size='small' weight='bold'>
        {label}
      </DSTextUtility>
      {missing ? (
        <DSText size='small' className={styles.empty}>
          {missing}
        </DSText>
      ) : (
        <DSText size='small' className={styles.text}>
          {parts.map((part, index) =>
            part.changed ? (
              <Mark key={index} className={styles[Mark]}>
                {part.text}
              </Mark>
            ) : (
              <Fragment key={index}>{part.text}</Fragment>
            )
          )}
        </DSText>
      )}
    </div>
  );
}
