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
  DSTextUtility,
} from '@stihl-design-system/components';
import { useCallback, useEffect, useState } from 'react';
import type {
  Decision,
  ReviewDocument,
  ReviewImage,
  ReviewManifest,
} from '../../../shared/manifest.ts';
import {
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
import styles from './ImageViewer.module.scss';

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

interface ImageViewerProps {
  manifest: ReviewManifest;
  image: ReviewImage;
  document: ReviewDocument | undefined;
  decision: Decision | undefined;
  /** The review is finished, decisions cannot change */
  locked: boolean;
  /** Position in the list the sidebar shows */
  position: { index: number; total: number };
  busy: boolean;
  onPrevious: () => void;
  onNext: () => void;
  onAccept: () => void;
  onReject: () => void;
  onUndo: () => void;
}

export function ImageViewer({
  manifest,
  image,
  document,
  decision,
  locked,
  position,
  busy,
  onPrevious,
  onNext,
  onAccept,
  onReject,
  onUndo,
}: ImageViewerProps) {
  const comparison = useComparison(image, manifest.base.sha, manifest.head.sha);
  const viewport = useViewport(comparison.width, comparison.height, image.id);
  const [view, setView] = useStored<View>('review.view', 'side');
  const [highlight, setHighlight] = useStored('review.highlight', true);
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
  const captionChanged =
    image.before?.caption !== image.after?.caption &&
    Boolean(image.before?.caption && image.after?.caption);
  const versions = [document?.before, document?.after]
    .filter((version) => version !== undefined)
    .map(
      (version) =>
        `${version.label || 'Unnamed version'} (${formatDate(version.createdAt)})`
    );

  return (
    <section className={styles.viewer} aria-labelledby='image-title'>
      <header className={styles.head}>
        <div className={styles.titles}>
          <DSTextUtility size='small'>
            {document?.title ?? image.documentKey}
            {versions.length > 0 && `, ${[...new Set(versions)].join(' → ')}`}
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

      {side?.caption && (
        <div className={styles.caption}>
          <DSAccordion
            size='x-small'
            summary={
              captionChanged
                ? 'Figure description (changed)'
                : 'Figure description'
            }
          >
            {captionChanged && (
              <DSText size='small'>
                <strong>Before:</strong> {image.before?.caption}
              </DSText>
            )}
            <DSText size='small'>
              {captionChanged && <strong>After: </strong>}
              {side.caption}
            </DSText>
          </DSAccordion>
        </div>
      )}

      <footer className={styles.decision}>
        <div className={styles.pager}>
          <DSButtonRound
            iconName='chevron-left'
            tooltip='Previous image (K)'
            onClick={onPrevious}
          >
            Previous image
          </DSButtonRound>
          <DSTextUtility size='small'>
            {position.index >= 0
              ? `${position.index + 1} of ${position.total}`
              : `${position.total} in the list`}
          </DSTextUtility>
          <DSButtonRound
            iconName='chevron-right'
            tooltip='Next image (J)'
            onClick={onNext}
          >
            Next image
          </DSButtonRound>
        </div>
        <div className={styles.verdict}>
          {image.status === 'renamed' ? (
            <DSText size='small'>
              Only the file name changed, the image is identical. No decision
              needed.
            </DSText>
          ) : decision ? (
            <>
              <DSFlag
                color={
                  decision.status === 'accepted'
                    ? 'status-positive'
                    : 'status-negative'
                }
              >
                {decision.status === 'accepted' ? 'Accepted' : 'Rejected'}
              </DSFlag>
              <DSText size='small' className={styles.verdictText}>
                {decision.reviewer}, {formatDate(decision.updatedAt)}
                {decision.comment && `: “${decision.comment}”`}
              </DSText>
              {!locked && (
                <DSButton
                  type='button'
                  variant='ghost'
                  size='small'
                  loading={busy}
                  onClick={onUndo}
                >
                  Undo
                </DSButton>
              )}
            </>
          ) : locked ? (
            <DSText size='small'>No decision was recorded.</DSText>
          ) : (
            <>
              <DSButton
                type='button'
                variant='outline'
                iconName='cross'
                tooltip='Reject (R)'
                onClick={onReject}
              >
                Reject
              </DSButton>
              <DSButton
                type='button'
                iconName='check'
                tooltip='Accept (A)'
                loading={busy}
                onClick={onAccept}
              >
                Accept
              </DSButton>
            </>
          )}
        </div>
      </footer>
    </section>
  );
}
