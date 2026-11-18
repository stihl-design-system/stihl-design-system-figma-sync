import { DSNotification, DSSpinner } from '@stihl-design-system/components';
import classNames from 'classnames';
import {
  useEffect,
  useRef,
  type CSSProperties,
  type ReactNode,
  type RefObject,
} from 'react';
import type { ReviewImage } from '../../../shared/manifest.ts';
import type { Comparison } from '../lib/useComparison.ts';
import type { Viewport } from '../lib/useViewport.ts';
import styles from './CompareStage.module.scss';

export type View = 'side' | 'swipe' | 'onion' | 'diff';
export type Blink = 'before' | 'after' | null;

interface CompareStageProps {
  image: ReviewImage;
  comparison: Comparison;
  viewport: Viewport;
  view: View;
  highlight: boolean;
  /** Opacity of the new image in the onion skin view, 0 to 1 */
  opacity: number;
  /** Share of the pane left of the swipe handle, 0 to 1 */
  swipe: number;
  onSwipe: (position: number) => void;
  blink: Blink;
}

interface PaneProps {
  viewport: Viewport;
  labels: { left?: string; right?: string };
  children: ReactNode;
  elementRef?: RefObject<HTMLDivElement | null>;
}

/** One view onto the board; all panes of a stage share zoom and position */
function Pane({ viewport, labels, children, elementRef }: PaneProps) {
  const own = useRef<HTMLDivElement>(null);
  const ref = elementRef ?? own;
  const { registerPane } = viewport;
  useEffect(() => registerPane(ref.current), [registerPane, ref]);

  return (
    <div className={styles.pane} ref={ref} {...viewport.paneHandlers}>
      {children}
      {labels.left && <span className={styles.label}>{labels.left}</span>}
      {labels.right && (
        <span className={classNames(styles.label, styles.labelRight)}>
          {labels.right}
        </span>
      )}
    </div>
  );
}

export function CompareStage({
  image,
  comparison,
  viewport,
  view,
  highlight,
  opacity,
  swipe,
  onSwipe,
  blink,
}: CompareStageProps) {
  const { transform } = viewport;
  const swipePane = useRef<HTMLDivElement>(null);
  const section = (image.after ?? image.before)?.section ?? '';

  const layer = (
    side: 'before' | 'after',
    style?: CSSProperties,
    className?: string
  ): ReactNode => {
    const url = side === 'before' ? comparison.beforeUrl : comparison.afterUrl;
    const size = image[side];
    return url && size ? (
      <img
        className={classNames(styles.layer, className)}
        src={url}
        width={size.width}
        height={size.height}
        style={style}
        alt={`${side === 'before' ? 'Previous' : 'New'} version: ${section}`}
        draggable={false}
      />
    ) : null;
  };

  const overlay = (always = false): ReactNode =>
    (highlight || always) && comparison.maskUrl ? (
      <img
        className={styles.mask}
        src={comparison.maskUrl}
        width={comparison.width}
        height={comparison.height}
        alt=''
        draggable={false}
      />
    ) : null;

  const board = (children: ReactNode): ReactNode => (
    <div
      className={classNames(styles.board, {
        [styles.pixelated as string]: transform.scale >= 3,
      })}
      style={
        {
          width: comparison.width,
          height: comparison.height,
          transform: `translate(${transform.x}px, ${transform.y}px) scale(${transform.scale})`,
          '--inverse-scale': 1 / transform.scale,
        } as CSSProperties
      }
    >
      {children}
    </div>
  );

  const pane = (
    key: string,
    labels: { left?: string; right?: string },
    children: ReactNode,
    elementRef?: RefObject<HTMLDivElement | null>
  ): ReactNode => (
    <Pane key={key} viewport={viewport} labels={labels} elementRef={elementRef}>
      {children}
    </Pane>
  );

  let panes: ReactNode;
  if (!image.before || !image.after) {
    panes = pane(
      'single',
      { left: image.after ? 'New image' : 'Removed image' },
      board(layer(image.after ? 'after' : 'before'))
    );
  } else if (blink) {
    panes = pane(
      'blink',
      { left: blink === 'before' ? 'Before' : 'After' },
      board(
        <>
          {layer(blink)}
          {overlay()}
        </>
      )
    );
  } else if (view === 'side') {
    panes = (
      <>
        {pane(
          'before',
          { left: 'Before' },
          board(
            <>
              {layer('before')}
              {overlay()}
            </>
          )
        )}
        {pane(
          'after',
          { left: 'After' },
          board(
            <>
              {layer('after')}
              {overlay()}
            </>
          )
        )}
      </>
    );
  } else if (view === 'swipe') {
    const moveTo = (clientX: number): void => {
      const bounds = swipePane.current?.getBoundingClientRect();
      if (bounds) {
        onSwipe(
          Math.min(Math.max((clientX - bounds.left) / bounds.width, 0), 1)
        );
      }
    };
    panes = pane(
      'swipe',
      { left: 'Before', right: 'After' },
      <>
        {board(
          <>
            {layer('before')}
            {overlay()}
          </>
        )}
        <div
          className={styles.clip}
          style={{ clipPath: `inset(0 0 0 ${swipe * 100}%)` }}
        >
          {board(
            <>
              {layer('after')}
              {overlay()}
            </>
          )}
        </div>
        <div
          className={styles.handle}
          style={{ left: `${swipe * 100}%` }}
          role='slider'
          tabIndex={0}
          aria-label='Swipe position between the previous and the new version'
          aria-orientation='horizontal'
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(swipe * 100)}
          onPointerDown={(event) => {
            event.stopPropagation();
            event.currentTarget.setPointerCapture(event.pointerId);
          }}
          onPointerMove={(event) => {
            if (event.currentTarget.hasPointerCapture(event.pointerId)) {
              event.stopPropagation();
              moveTo(event.clientX);
            }
          }}
          onDoubleClick={(event) => event.stopPropagation()}
          onKeyDown={(event) => {
            const step = event.shiftKey ? 0.1 : 0.02;
            if (event.key === 'ArrowLeft') {
              onSwipe(Math.max(swipe - step, 0));
            } else if (event.key === 'ArrowRight') {
              onSwipe(Math.min(swipe + step, 1));
            } else if (event.key === 'Home') {
              onSwipe(0);
            } else if (event.key === 'End') {
              onSwipe(1);
            } else {
              return;
            }
            event.preventDefault();
          }}
        >
          <span className={styles.knob} aria-hidden='true' />
        </div>
      </>,
      swipePane
    );
  } else if (view === 'onion') {
    panes = pane(
      'onion',
      { left: `Before, new version at ${Math.round(opacity * 100)} %` },
      board(
        <>
          {layer('before')}
          {layer('after', { opacity })}
          {overlay()}
        </>
      )
    );
  } else {
    panes = pane(
      'diff',
      { left: 'Changed pixels' },
      board(
        <>
          {layer('after', undefined, styles.faded)}
          {overlay(true)}
        </>
      )
    );
  }

  return (
    <div className={styles.stage}>
      {panes}
      {comparison.status === 'loading' && (
        <div className={styles.status} role='status'>
          <DSSpinner size='large' aria={{ 'aria-label': 'Comparing images' }} />
        </div>
      )}
      {comparison.status === 'error' && (
        <div className={styles.status}>
          <DSNotification variant='error'>{comparison.error}</DSNotification>
        </div>
      )}
    </div>
  );
}
