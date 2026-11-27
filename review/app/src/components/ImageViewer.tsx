import {
  DSAccordion,
  DSButton,
  DSButtonRound,
  DSCheckbox,
  DSFlag,
  DSHeading,
  DSLink,
  DSPopover,
  DSSegmentedControl,
  DSSlider,
  DSText,
  DSTextarea,
  DSTextUtility,
} from '@stihl-design-system/components';
import classNames from 'classnames';
import { useCallback, useEffect, useState } from 'react';
import type {
  CaptionEdit,
  ReviewDocument,
  ReviewImage,
  ReviewManifest,
} from '../../../shared/manifest.ts';
import {
  documentVersions,
  formatDate,
  formatShare,
  IMAGE_STATUS_LABEL,
  imageTitle,
} from '../lib/format.ts';
import { ignoresShortcuts } from '../lib/shortcuts.ts';
import { useComparison } from '../lib/useComparison.ts';
import { useStored } from '../lib/useStored.ts';
import { useViewport } from '../lib/useViewport.ts';
import { CompareStage, type Blink, type View } from './CompareStage.tsx';
import { DecisionBar, type DecisionBarProps } from './DecisionBar.tsx';
import { TextComparison } from './TextComparison.tsx';
import styles from './Viewer.module.scss';

const VIEWS: { label: string; value: View }[] = [
  { label: 'Side by side', value: 'side' },
  { label: 'Swipe', value: 'swipe' },
  { label: 'Onion skin', value: 'onion' },
  { label: 'Diff', value: 'diff' },
];

const SHORTCUTS: [keys: string, action: string][] = [
  ['J / K', 'Next / previous image'],
  ['A / R', 'Accept / reject'],
  ['1 to 4', 'Side by side, swipe, onion skin, diff'],
  ['D', 'Highlight diff on or off'],
  ['N', 'Jump to the next changed area'],
  ['Space', 'Blink between before and after'],
  ['+ / −', 'Zoom in / out (or Ctrl + scroll)'],
  ['0', 'Fit the image'],
];

const MAX_CAPTION_LENGTH = 2000;

/** Who edited the description and whether it is in the documentation yet */
function editState(edit: CaptionEdit): string {
  const edited = `Edited by ${edit.editor}, ${formatDate(edit.editedAt)}.`;
  if (edit.status === 'applied') {
    return `${edited} In the documentation since ${formatDate(edit.appliedAt)}.`;
  }
  if (edit.status === 'outdated') {
    return `${edited} Not applied: the image changed before the next sync.`;
  }
  return `${edited} Reaches the documentation with the next sync.`;
}

interface ImageViewerProps extends Omit<DecisionBarProps, 'noDecision'> {
  manifest: ReviewManifest;
  image: ReviewImage;
  document: ReviewDocument | undefined;
  /** The newest edit of the description on this page, if anyone edited it */
  captionEdit: CaptionEdit | undefined;
  /** Saves a new description; `saved` runs once it is stored */
  onEditCaption: (caption: string, saved: () => void) => void;
}

export function ImageViewer({
  manifest,
  image,
  document,
  captionEdit,
  onEditCaption,
  ...decisionBar
}: ImageViewerProps) {
  const comparison = useComparison(image, manifest.base.sha, manifest.head.sha);
  const viewport = useViewport(comparison.width, comparison.height, image.id);
  const [view, setView] = useStored<View>('review.view', 'side');
  const [highlight, setHighlight] = useStored('review.highlight', true);
  // Unchanged texts are context and stay as the reviewer left them; a changed one opens on every image
  const [captionOpen, setCaptionOpen] = useStored('review.captionOpen', true);
  const [captionChangeOpen, setCaptionChangeOpen] = useState(true);
  const [sectionOpen, setSectionOpen] = useStored('review.sectionOpen', false);
  const [sectionChangeOpen, setSectionChangeOpen] = useState(true);
  const [opacity, setOpacity] = useState(50);
  const [swipe, setSwipe] = useState(0.5);
  const [blink, setBlink] = useState<Blink>(null);
  const [activeRegion, setActiveRegion] = useState<number | null>(null);

  const comparable = Boolean(image.before && image.after);
  const { regions } = comparison;
  const { zoomBy, fit, actualSize, focusRegion } = viewport;

  const chooseView = useCallback(
    (next: View) => {
      setView(next);
      setBlink(null);
    },
    [setView]
  );
  const nextRegion = useCallback(() => {
    if (regions.length === 0) {
      return;
    }
    const index = ((activeRegion ?? -1) + 1) % regions.length;
    setActiveRegion(index);
    focusRegion(regions[index] as (typeof regions)[number]);
  }, [activeRegion, regions, focusRegion]);
  const toggleBlink = useCallback(() => {
    setBlink((current) => (current === 'before' ? 'after' : 'before'));
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent): void => {
      if (ignoresShortcuts(event)) {
        return;
      }
      const key = event.key.toLowerCase();
      const numbered = VIEWS[Number(key) - 1];
      if (numbered && comparable) {
        chooseView(numbered.value);
      } else if (key === 'd' && comparable) {
        setHighlight(!highlight);
      } else if (key === 'n') {
        nextRegion();
      } else if (key === ' ' && comparable) {
        toggleBlink();
      } else if (key === 'escape') {
        setBlink(null);
      } else if (key === '+' || key === '=') {
        zoomBy(1.25);
      } else if (key === '-') {
        zoomBy(0.8);
      } else if (key === '0') {
        fit();
      } else {
        return;
      }
      event.preventDefault();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [
    comparable,
    highlight,
    chooseView,
    setHighlight,
    nextRegion,
    toggleBlink,
    zoomBy,
    fit,
  ]);

  const side = image.after ?? image.before;
  // An edit on this page replaces the generated description of the new version
  const afterCaption = image.after
    ? (captionEdit?.caption ?? image.after.caption)
    : undefined;
  const caption = afterCaption ?? image.before?.caption;
  const captionChanged = Boolean(
    image.before?.caption &&
    afterCaption &&
    image.before.caption !== afterCaption
  );
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState('');
  const trimmedDraft = draft.replace(/\s+/g, ' ').trim();
  const sectionChanged = Boolean(
    image.before &&
    image.after &&
    image.before.sectionText !== image.after.sectionText
  );
  const versions = documentVersions(document);

  return (
    <section className={styles.viewer} aria-labelledby='image-title'>
      <header className={styles.head}>
        <div className={styles.titles}>
          <DSTextUtility size='small'>
            {document?.title ?? image.documentKey}
            {versions && `, ${versions}`}
          </DSTextUtility>
          <DSHeading tag='h1' size='small' id='image-title'>
            {imageTitle(image)}
          </DSHeading>
          {side?.section && <DSText size='small'>{side.section}</DSText>}
        </div>
        <div className={styles.facts}>
          <ul className={styles.flags} aria-label='Kind of change'>
            <li>
              <DSFlag color='status-info'>
                {IMAGE_STATUS_LABEL[image.status]}
              </DSFlag>
            </li>
            {image.resized && image.before && image.after && (
              <li>
                <DSFlag color='status-warning'>
                  Size changed: {image.before.width} × {image.before.height} →{' '}
                  {image.after.width} × {image.after.height}
                </DSFlag>
              </li>
            )}
          </ul>
          {image.diff && (
            <DSTextUtility size='small'>
              {formatShare(image.diff.ratio)} of the image changed in{' '}
              {image.diff.regions.length}{' '}
              {image.diff.regions.length === 1 ? 'area' : 'areas'}
            </DSTextUtility>
          )}
          <div className={styles.links}>
            {image.after?.figmaUrl && (
              <DSLink
                href={image.after.figmaUrl}
                target='_blank'
                variant='highlight'
                iconName='arrow-out'
                iconPosition='right'
              >
                Open in Figma
              </DSLink>
            )}
            {image.before?.figmaUrl && (
              <DSLink
                href={image.before.figmaUrl}
                target='_blank'
                variant='highlight'
                iconName='arrow-out'
                iconPosition='right'
              >
                Previous version in Figma
              </DSLink>
            )}
          </div>
        </div>
      </header>

      <div className={styles.toolbar}>
        {comparable && (
          <>
            <DSSegmentedControl
              legend='View'
              hideLegend
              name='view'
              size='small'
              options={VIEWS}
              value={view}
              onChange={(event) => chooseView(event.target.value as View)}
            />
            <DSCheckbox
              label='Highlight diff'
              checked={highlight || view === 'diff'}
              disabled={view === 'diff' && !blink}
              onChange={() => setHighlight(!highlight)}
            />
            {view === 'onion' && !blink && (
              <div className={styles.slider}>
                <DSSlider
                  id='onion-opacity'
                  label='Opacity of the new version'
                  hideLabel
                  hideNumberInput
                  min={0}
                  max={100}
                  value={opacity}
                  onChange={(event) => setOpacity(Number(event.target.value))}
                />
              </div>
            )}
          </>
        )}
        <div className={styles.tools}>
          {comparable && (
            <>
              <DSButton
                type='button'
                variant='ghost'
                size='small'
                aria={{ 'aria-pressed': blink !== null }}
                tooltip='Shows before and after in the same place, Space switches'
                onClick={() => setBlink(blink ? null : 'before')}
              >
                Blink
              </DSButton>
              <DSButton
                type='button'
                variant='outline'
                size='small'
                iconName='haircross'
                tooltip='Jumps to the next changed area (N)'
                onClick={nextRegion}
              >
                {regions.length === 0
                  ? 'Next change'
                  : `Next change (${activeRegion === null ? regions.length : `${activeRegion + 1}/${regions.length}`})`}
              </DSButton>
            </>
          )}
          <div className={styles.zoom}>
            <DSButtonRound
              iconName='magnifying-glass-minus'
              onClick={() => zoomBy(0.8)}
            >
              Zoom out
            </DSButtonRound>
            <DSTextUtility size='small' className={styles.zoomValue}>
              {Math.round(viewport.transform.scale * 100)} %
            </DSTextUtility>
            <DSButtonRound
              iconName='magnifying-glass-plus'
              onClick={() => zoomBy(1.25)}
            >
              Zoom in
            </DSButtonRound>
            <DSButton type='button' variant='ghost' size='small' onClick={fit}>
              Fit
            </DSButton>
            <DSButton
              type='button'
              variant='ghost'
              size='small'
              onClick={actualSize}
            >
              100 %
            </DSButton>
          </div>
          <DSPopover
            placement='bottom-end'
            defaultAnchorButtonProps={{ label: 'Keyboard shortcuts' }}
          >
            <dl className={styles.shortcuts}>
              {SHORTCUTS.map(([keys, action]) => (
                <div key={keys}>
                  <dt>{keys}</dt>
                  <dd>{action}</dd>
                </div>
              ))}
            </dl>
          </DSPopover>
        </div>
      </div>

      <CompareStage
        image={image}
        comparison={comparison}
        viewport={viewport}
        view={view}
        highlight={highlight}
        opacity={opacity / 100}
        swipe={swipe}
        onSwipe={setSwipe}
        blink={blink}
      />

      {/* Shrinks and scrolls when the window is low, the images keep their minimum height */}
      <div className={styles.texts}>
        {(caption || image.after) && (
          <div
            className={classNames(styles.caption, {
              [styles.wide as string]: captionChanged && !editing,
            })}
          >
            <DSAccordion
              size='x-small'
              isFlush
              isOpen={captionChanged ? captionChangeOpen : captionOpen}
              onToggle={(event) =>
                (captionChanged ? setCaptionChangeOpen : setCaptionOpen)(
                  event.currentTarget.open
                )
              }
              summary={{
                // Generated by the vision model unless someone edited it on this page
                headingText: `Image description (${captionEdit ? 'edited' : 'AI generated'}${captionChanged ? ', changed' : ''})`,
                headingSize: 'small',
              }}
            >
              {editing ? (
                <form
                  className={styles.captionForm}
                  onSubmit={(event) => {
                    event.preventDefault();
                    onEditCaption(trimmedDraft, () => setEditing(false));
                  }}
                >
                  <DSTextarea
                    id='caption-edit'
                    label='Image description of the new version'
                    size='small'
                    resize='auto'
                    maxLength={MAX_CAPTION_LENGTH}
                    value={draft}
                    onChange={(event) => setDraft(event.target.value)}
                  />
                  <div className={styles.captionActions}>
                    <DSButton
                      type='button'
                      variant='outline'
                      size='small'
                      onClick={() => setEditing(false)}
                    >
                      Cancel
                    </DSButton>
                    <DSButton
                      type='submit'
                      size='small'
                      disabled={!trimmedDraft || trimmedDraft === afterCaption}
                    >
                      Save description
                    </DSButton>
                  </div>
                </form>
              ) : captionChanged ? (
                <TextComparison
                  before={image.before?.caption}
                  after={afterCaption}
                />
              ) : (
                <DSText size='small'>
                  {caption ?? 'This image has no description yet.'}
                </DSText>
              )}
              {!editing && image.after && (
                <div className={styles.captionMeta}>
                  {captionEdit && (
                    <DSTextUtility size='small'>
                      {editState(captionEdit)}
                    </DSTextUtility>
                  )}
                  <DSButton
                    type='button'
                    variant='ghost'
                    size='small'
                    iconName='pen'
                    isFlush
                    onClick={() => {
                      setDraft(afterCaption ?? '');
                      setEditing(true);
                    }}
                  >
                    Edit description
                  </DSButton>
                </div>
              )}
            </DSAccordion>
          </div>
        )}

        {side?.sectionText && (
          <div
            className={classNames(styles.caption, {
              [styles.wide as string]: sectionChanged,
            })}
          >
            <DSAccordion
              size='x-small'
              isFlush
              isOpen={sectionChanged ? sectionChangeOpen : sectionOpen}
              onToggle={(event) =>
                (sectionChanged ? setSectionChangeOpen : setSectionOpen)(
                  event.currentTarget.open
                )
              }
              summary={{
                headingText: sectionChanged
                  ? 'Section Text in Figma (changed)'
                  : 'Section Text in Figma',
                headingSize: 'small',
              }}
            >
              {sectionChanged ? (
                <TextComparison
                  before={image.before?.sectionText}
                  after={image.after?.sectionText}
                  preserveLines
                />
              ) : (
                <DSText size='small' className={styles.sectionText}>
                  {side.sectionText}
                </DSText>
              )}
            </DSAccordion>
          </div>
        )}
      </div>

      <DecisionBar
        {...decisionBar}
        noDecision={
          image.status === 'renamed'
            ? 'Only the file name changed, the image is identical. No decision needed.'
            : undefined
        }
      />
    </section>
  );
}
