import {
  DSButton,
  DSButtonRound,
  DSFlag,
  DSText,
  DSTextUtility,
} from '@stihl-design-system/components';
import type { Decision } from '../../../shared/manifest.ts';
import { formatDate } from '../lib/format.ts';
import styles from './DecisionBar.module.scss';

export interface DecisionBarProps {
  decision: Decision | undefined;
  /** Shown instead of the decision buttons when the change takes no decision */
  noDecision?: string;
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

/** Paging through the list and the decision on the image or text shown */
export function DecisionBar({
  decision,
  noDecision,
  locked,
  position,
  busy,
  onPrevious,
  onNext,
  onAccept,
  onReject,
  onUndo,
}: DecisionBarProps) {
  return (
    <footer className={styles.decision}>
      <div className={styles.pager}>
        <DSButtonRound
          iconName='chevron-left'
          tooltip='Previous in the list (K)'
          onClick={onPrevious}
        >
          Previous in the list
        </DSButtonRound>
        <DSTextUtility size='small'>
          {position.index >= 0
            ? `${position.index + 1} of ${position.total}`
            : `${position.total} in the list`}
        </DSTextUtility>
        <DSButtonRound
          iconName='chevron-right'
          tooltip='Next in the list (J)'
          onClick={onNext}
        >
          Next in the list
        </DSButtonRound>
      </div>
      <div className={styles.verdict}>
        {noDecision ? (
          <DSText size='small'>{noDecision}</DSText>
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
  );
}
