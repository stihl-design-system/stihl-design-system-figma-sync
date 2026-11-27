import {
  DSFlag,
  DSHeading,
  DSLink,
  DSText,
  DSTextUtility,
} from '@stihl-design-system/components';
import type { ReviewDocument, ReviewText } from '../../../shared/manifest.ts';
import { documentVersions, textLabel } from '../lib/format.ts';
import { DecisionBar, type DecisionBarProps } from './DecisionBar.tsx';
import { TextComparison } from './TextComparison.tsx';
import styles from './Viewer.module.scss';

interface TextViewerProps extends Omit<DecisionBarProps, 'noDecision'> {
  text: ReviewText;
  title: string;
  document: ReviewDocument | undefined;
}

/** A text section that designers changed in Figma, compared like a figure description */
export function TextViewer({
  text,
  title,
  document,
  ...decisionBar
}: TextViewerProps) {
  const versions = documentVersions(document);
  const before = text.before?.section;
  const after = text.after?.section;
  const trail =
    before && after && before !== after
      ? `${before} → ${after}`
      : (after ?? before);
  return (
    <section className={styles.viewer} aria-labelledby='item-title'>
      <header className={styles.head}>
        <div className={styles.titles}>
          <DSTextUtility size='small'>
            {document?.title ?? text.documentKey}
            {versions && `, ${versions}`}
          </DSTextUtility>
          <DSHeading tag='h1' size='small' id='item-title'>
            {title}
          </DSHeading>
          {trail && <DSText size='small'>{trail}</DSText>}
        </div>
        <div className={styles.facts}>
          <ul className={styles.flags} aria-label='Kind of change'>
            <li>
              <DSFlag color='status-info'>{textLabel(text.status)}</DSFlag>
            </li>
          </ul>
          {document?.sourceUrl && (
            <div className={styles.links}>
              <DSLink
                href={document.sourceUrl}
                target='_blank'
                variant='highlight'
                iconName='arrow-out'
                iconPosition='right'
              >
                Open the page in Figma
              </DSLink>
            </div>
          )}
        </div>
      </header>

      <div className={styles.textBody}>
        <TextComparison
          before={text.before?.text}
          after={text.after?.text}
          preserveLines
        />
      </div>

      <DecisionBar {...decisionBar} />
    </section>
  );
}
