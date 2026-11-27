import {
  DSAccordion,
  DSButton,
  DSChipGroup,
  DSFlag,
  DSHeading,
  DSIcon,
  DSNotification,
  DSText,
  DSTextUtility,
} from '@stihl-design-system/components';
import classNames from 'classnames';
import { useEffect, useRef, useState } from 'react';
import {
  needsDecision,
  type Decision,
  type DecisionStatus,
  type ImageStatus,
  type ReviewDetail,
} from '../../../shared/manifest.ts';
import {
  formatDate,
  IMAGE_STATUS_LABEL,
  itemTitle,
  REVIEW_STATUS,
  textLabel,
  undecided,
} from '../lib/format.ts';
import type { ItemKind, ReviewItem } from '../lib/items.ts';
import styles from './Sidebar.module.scss';

export type DecisionFilter = DecisionStatus | 'open';

export interface Filters {
  decisions: DecisionFilter[];
  statuses: ImageStatus[];
  kinds: ItemKind[];
}

const DECISION_FILTERS: { id: DecisionFilter; label: string }[] = [
  { id: 'open', label: 'To decide' },
  { id: 'accepted', label: 'Accepted' },
  { id: 'rejected', label: 'Rejected' },
];

const STATUSES: ImageStatus[] = ['changed', 'added', 'removed', 'renamed'];

const KINDS: { id: ItemKind; label: string }[] = [
  { id: 'image', label: 'Images' },
  { id: 'text', label: 'Texts' },
];

function decisionState(
  item: ReviewItem,
  decisions: Map<string, Decision>
): { icon: React.ComponentProps<typeof DSIcon>['name']; label: string } {
  const status = decisions.get(item.id)?.status;
  if (status === 'accepted') {
    return { icon: 'circle-check-colored', label: 'Accepted' };
  }
  if (status === 'rejected') {
    return { icon: 'diamond-exclamationmark-colored', label: 'Rejected' };
  }
  return needsDecision(item)
    ? { icon: 'circle-stroke', label: 'To decide' }
    : { icon: 'minus', label: 'No decision needed' };
}

interface SidebarProps {
  review: ReviewDetail;
  /** All images and texts of the review, in reading order */
  items: ReviewItem[];
  /** The ones the filters leave */
  listed: ReviewItem[];
  decisions: Map<string, Decision>;
  selectedId: string | undefined;
  filters: Filters;
  onFilter: (filters: Filters) => void;
  onSelect: (imageId: string) => void;
  onAcceptAll: (imageIds: string[], documentTitle: string) => void;
  /** The last "accept all", offered for undo until it is dismissed */
  acceptedAll: { count: number; documentTitle: string } | null;
  onUndoAcceptAll: () => void;
  onDismissAcceptAll: () => void;
  onFinish: () => void;
  onReopen: () => void;
}

export function Sidebar({
  review,
  items,
  listed,
  decisions,
  selectedId,
  filters,
  onFilter,
  onSelect,
  onAcceptAll,
  acceptedAll,
  onUndoAcceptAll,
  onDismissAcceptAll,
  onFinish,
  onReopen,
}: SidebarProps) {
  const { manifest } = review;
  const locked = review.status !== 'open';
  const remaining = undecided(review);
  const selectedDocument = items.find(
    (item) => item.id === selectedId
  )?.documentKey;
  const [open, setOpen] = useState<Set<string>>(
    () => new Set(selectedDocument ? [selectedDocument] : [])
  );
  const selectedRow = useRef<HTMLButtonElement>(null);

  // Following J and K into the next document opens it
  useEffect(() => {
    if (selectedDocument) {
      setOpen((current) =>
        current.has(selectedDocument)
          ? current
          : new Set(current).add(selectedDocument)
      );
    }
  }, [selectedDocument]);
  useEffect(() => {
    selectedRow.current?.scrollIntoView({ block: 'nearest' });
  }, [selectedId, open]);

  const count = (filter: DecisionFilter): number =>
    items.filter(
      (item) =>
        needsDecision(item) &&
        (decisions.get(item.id)?.status ?? 'open') === filter
    ).length;
  const statusCount = (status: ImageStatus): number =>
    items.filter((item) => item.status === status).length;
  const presentStatuses = STATUSES.filter((status) => statusCount(status) > 0);
  const kindCount = (kind: ItemKind): number =>
    items.filter((item) => item.kind === kind).length;
  const presentKinds = KINDS.filter(({ id }) => kindCount(id) > 0);

  return (
    <aside className={styles.sidebar} aria-label='Review overview'>
      <div className={styles.summary}>
        <DSTextUtility size='small'>
          Review from {formatDate(review.createdAt)}
        </DSTextUtility>
        <DSHeading tag='h2' size='small'>
          {review.title}
        </DSHeading>
        <div className={styles.progress}>
          <progress
            max={review.total}
            value={review.total - remaining}
            aria-label='Decided changes'
          />
          <DSTextUtility size='small'>
            {review.total - remaining} of {review.total} decided
            {review.rejected > 0 && `, ${review.rejected} rejected`}
          </DSTextUtility>
        </div>
      </div>

      <div className={styles.filters}>
        <DSChipGroup
          id='filter-decision'
          label='Show'
          size='small'
          selectionMode='multiple'
          disableTooltips
          chips={DECISION_FILTERS.map(({ id, label }) => ({
            id,
            label: `${label} (${count(id)})`,
            isSelected: filters.decisions.includes(id),
          }))}
          onChipsChange={(chips) =>
            onFilter({
              ...filters,
              decisions: chips
                .filter((chip) => chip.isSelected)
                .map((chip) => chip.id as DecisionFilter),
            })
          }
        />
        {presentKinds.length > 1 && (
          <DSChipGroup
            id='filter-kind'
            label='Content'
            size='small'
            selectionMode='multiple'
            disableTooltips
            chips={presentKinds.map(({ id, label }) => ({
              id,
              label: `${label} (${kindCount(id)})`,
              isSelected: filters.kinds.includes(id),
            }))}
            onChipsChange={(chips) =>
              onFilter({
                ...filters,
                kinds: chips
                  .filter((chip) => chip.isSelected)
                  .map((chip) => chip.id as ItemKind),
              })
            }
          />
        )}
        {presentStatuses.length > 1 && (
          <DSChipGroup
            id='filter-status'
            label='Kind of change'
            size='small'
            selectionMode='multiple'
            disableTooltips
            chips={presentStatuses.map((status) => ({
              id: status,
              label: `${IMAGE_STATUS_LABEL[status]} (${statusCount(status)})`,
              isSelected: filters.statuses.includes(status),
            }))}
            onChipsChange={(chips) =>
              onFilter({
                ...filters,
                statuses: chips
                  .filter((chip) => chip.isSelected)
                  .map((chip) => chip.id as ImageStatus),
              })
            }
          />
        )}
      </div>

      <nav className={styles.documents} aria-label='Changes by page'>
        {listed.length === 0 && (
          <DSText size='small' className={styles.empty}>
            No change matches the filters.
          </DSText>
        )}
        {manifest.documents.map((document) => {
          const inDocument = listed.filter(
            (item) => item.documentKey === document.key
          );
          if (inDocument.length === 0) {
            return null;
          }
          const toDecide = inDocument
            .filter((item) => needsDecision(item) && !decisions.has(item.id))
            .map((item) => item.id);
          const isOpen = open.has(document.key);
          return (
            <DSAccordion
              key={document.key}
              size='small'
              summary={{
                headingText: document.title,
                headingTag: 'h3',
                headingSize: 'small',
              }}
              numberIndicatorValue={
                toDecide.length > 0 ? String(toDecide.length) : undefined
              }
              numberIndicatorAriaLabel='changes to decide'
              isOpen={isOpen}
              onToggle={(event) => {
                const next = new Set(open);
                if (event.currentTarget.open) {
                  next.add(document.key);
                } else {
                  next.delete(document.key);
                }
                setOpen(next);
              }}
            >
              {isOpen && (
                <>
                  {!locked && toDecide.length > 1 && (
                    <DSButton
                      type='button'
                      variant='ghost'
                      size='small'
                      iconName='check'
                      isFlush
                      onClick={() => onAcceptAll(toDecide, document.title)}
                    >
                      Accept all {toDecide.length} open
                    </DSButton>
                  )}
                  <ul className={styles.images}>
                    {inDocument.map((item) => {
                      const state = decisionState(item, decisions);
                      const selected = item.id === selectedId;
                      return (
                        <li key={item.id}>
                          <button
                            type='button'
                            ref={selected ? selectedRow : undefined}
                            className={classNames(styles.row, {
                              [styles.rowSelected as string]: selected,
                            })}
                            aria-current={selected ? 'true' : undefined}
                            onClick={() => onSelect(item.id)}
                          >
                            <DSIcon
                              name={state.icon}
                              size='small'
                              aria={{ 'aria-label': state.label }}
                            />
                            <span className={styles.rowTitle}>
                              {itemTitle(item, document)}
                            </span>
                            {item.kind === 'text' ? (
                              <DSFlag color='status-info'>
                                {textLabel(item.status)}
                              </DSFlag>
                            ) : (
                              item.status !== 'changed' && (
                                <DSFlag color='status-info'>
                                  {IMAGE_STATUS_LABEL[item.status]}
                                </DSFlag>
                              )
                            )}
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </>
              )}
            </DSAccordion>
          );
        })}
      </nav>

      <div className={styles.finish}>
        {acceptedAll && !locked && (
          <DSNotification
            variant='success'
            closeButtonProps={{ label: 'Dismiss' }}
            onClose={onDismissAcceptAll}
            customActionArea={
              <DSButton
                type='button'
                variant='outline'
                size='small'
                onClick={onUndoAcceptAll}
              >
                Undo
              </DSButton>
            }
          >
            Accepted {acceptedAll.count}{' '}
            {acceptedAll.count === 1 ? 'change' : 'changes'} in{' '}
            {acceptedAll.documentTitle}
          </DSNotification>
        )}
        {locked ? (
          <>
            <DSNotification
              variant={review.status === 'approved' ? 'success' : 'warning'}
            >
              {REVIEW_STATUS[review.status].label} by {review.finishedBy},{' '}
              {formatDate(review.finishedAt)}
            </DSNotification>
            <DSButton
              type='button'
              variant='ghost'
              size='small'
              onClick={onReopen}
            >
              Reopen review
            </DSButton>
          </>
        ) : (
          <>
            <DSButton type='button' stretched onClick={onFinish}>
              Finish review
            </DSButton>
            {remaining > 0 && (
              <DSTextUtility size='small'>
                {remaining}{' '}
                {remaining === 1 ? 'change still needs' : 'changes still need'}{' '}
                a decision
              </DSTextUtility>
            )}
          </>
        )}
      </div>
    </aside>
  );
}
