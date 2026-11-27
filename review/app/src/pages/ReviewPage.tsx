import {
  DSDrawer,
  DSNotification,
  DSSkeleton,
  useDSToast,
} from '@stihl-design-system/components';
import { useCallback, useEffect, useMemo, useState } from 'react';
import {
  needsDecision,
  type CaptionEdit,
  type Decision,
  type DecisionStatus,
  type ReviewDetail,
} from '../../../shared/manifest.ts';
import { api } from '../api.ts';
import {
  AcceptAllDialog,
  FinishDialog,
  RejectDialog,
} from '../components/Dialogs.tsx';
import { ImageViewer } from '../components/ImageViewer.tsx';
import { Sidebar, type Filters } from '../components/Sidebar.tsx';
import { TextViewer } from '../components/TextViewer.tsx';
import { itemTitle, undecided } from '../lib/format.ts';
import { reviewItems, type ReviewItem } from '../lib/items.ts';
import { ignoresShortcuts } from '../lib/shortcuts.ts';
import { useReviewer } from '../lib/reviewer.tsx';
import { preload } from '../lib/useComparison.ts';
import { usePageTitle } from '../lib/usePageTitle.ts';
import { navigate, useRoute } from '../router.ts';
import styles from './ReviewPage.module.scss';

type OpenDialog = 'reject' | 'finish' | 'acceptAll' | null;

interface BulkAccept {
  imageIds: string[];
  documentTitle: string;
}

function message(error: unknown): string {
  return error instanceof Error ? error.message : String(error);
}

interface ReviewPageProps {
  id: string;
  /** Below breakpoint l the overview is a drawer behind the menu button of the header */
  compact: boolean;
  menuOpen: boolean;
  onCloseMenu: () => void;
}

export function ReviewPage({
  id,
  compact,
  menuOpen,
  onCloseMenu,
}: ReviewPageProps) {
  const { query } = useRoute();
  const { queueDSToastMessage } = useDSToast();
  const [review, setReview] = useState<ReviewDetail>();
  const [error, setError] = useState<string>();
  const [filters, setFilters] = useState<Filters>({
    decisions: [],
    statuses: [],
    kinds: [],
  });
  const { name: reviewer, withName } = useReviewer();
  const [busy, setBusy] = useState(false);
  const [dialog, setDialog] = useState<OpenDialog>(null);
  /** The images an open "accept all" question is about */
  const [bulk, setBulk] = useState<BulkAccept | null>(null);
  /** The last "accept all" that went through, so it can be undone */
  const [acceptedAll, setAcceptedAll] = useState<BulkAccept | null>(null);

  const load = useCallback(() => {
    api.getReview(id).then(
      (loaded) => {
        setReview(loaded);
        setError(undefined);
      },
      (failure: unknown) => setError(message(failure))
    );
  }, [id]);
  useEffect(load, [load]);
  // Someone else may have decided in the meantime
  useEffect(() => {
    const onVisible = (): void => {
      if (document.visibilityState === 'visible') {
        load();
      }
    };
    document.addEventListener('visibilitychange', onVisible);
    return () => document.removeEventListener('visibilitychange', onVisible);
  }, [load]);
  const items = useMemo(
    () => (review ? reviewItems(review.manifest) : []),
    [review]
  );
  /** The newest edit of each image's description */
  const captionEdits = useMemo(() => {
    const latest = new Map<string, CaptionEdit>();
    for (const edit of review?.captionEdits ?? []) {
      latest.set(edit.imageId, edit);
    }
    return latest;
  }, [review]);
  const editCaption = useCallback(
    (imageId: string, caption: string, saved: () => void) => {
      withName((editor) => {
        api.editCaption(id, { imageId, caption, editor }).then(
          (result) => {
            setReview(
              (current) =>
                current && { ...current, captionEdits: result.captionEdits }
            );
            saved();
            queueDSToastMessage(
              'Description saved. It reaches the documentation with the next sync.',
              { variant: 'success' }
            );
          },
          (failure: unknown) =>
            queueDSToastMessage(message(failure), { variant: 'warning' })
        );
      });
    },
    [id, withName, queueDSToastMessage]
  );
  const decisions = useMemo(
    () =>
      new Map(
        (review?.decisions ?? []).map((decision) => [
          decision.imageId,
          decision,
        ])
      ),
    [review]
  );
  const filtered = useMemo(
    () =>
      items.filter(
        (item) =>
          (filters.kinds.length === 0 || filters.kinds.includes(item.kind)) &&
          (filters.statuses.length === 0 ||
            filters.statuses.includes(item.status)) &&
          (filters.decisions.length === 0 ||
            (needsDecision(item) &&
              filters.decisions.includes(
                decisions.get(item.id)?.status ?? 'open'
              )))
      ),
    [items, decisions, filters]
  );

  const isOpenItem = useCallback(
    (item: ReviewItem) => needsDecision(item) && !decisions.has(item.id),
    [decisions]
  );
  // `image` is the parameter of links from before text changes were reviewed
  const requested = query.get('item') ?? query.get('image');
  const selected =
    items.find((item) => item.id === requested) ??
    items.find(isOpenItem) ??
    items[0];
  const index = selected
    ? filtered.findIndex((item) => item.id === selected.id)
    : -1;
  const locked = review ? review.status !== 'open' : true;
  const selectedDocument = review?.manifest.documents.find(
    (entry) => entry.key === selected?.documentKey
  );
  const selectedTitle = selected && itemTitle(selected, selectedDocument);
  // Specific to general: image or text, page of the documentation, review
  usePageTitle(selectedTitle, selectedDocument?.title, review?.title);

  const select = useCallback(
    (itemId: string) => {
      navigate(`/r/${id}?item=${encodeURIComponent(itemId)}`, true);
    },
    [id]
  );
  const step = useCallback(
    (delta: 1 | -1) => {
      const target =
        index === -1
          ? filtered.at(delta === 1 ? 0 : -1)
          : filtered[index + delta];
      if (target) {
        select(target.id);
      }
    },
    [filtered, index, select]
  );
  useEffect(() => {
    const next = filtered[index + 1];
    if (review && next?.kind === 'image') {
      preload(next.image, review.manifest.base.sha, review.manifest.head.sha);
    }
  }, [review, filtered, index]);

  const decide = useCallback(
    async (
      imageIds: string[],
      status: DecisionStatus | null,
      comment: string,
      name: string
    ): Promise<boolean> => {
      setBusy(true);
      try {
        const result = await api.decide(id, {
          imageIds,
          status,
          comment,
          reviewer: name,
        });
        setReview(
          (current) => current && withDecisions(current, result.decisions)
        );
        return true;
      } catch (failure) {
        queueDSToastMessage(message(failure), { variant: 'warning' });
        // The review may have been finished or changed by someone else
        load();
        return false;
      } finally {
        setBusy(false);
      }
    },
    [id, load, queueDSToastMessage]
  );

  /** Moves on to the next image or text that still needs a decision, if the list has one */
  const advance = useCallback(() => {
    const next =
      filtered.slice(index + 1).find(isOpenItem) ??
      filtered.slice(0, Math.max(index, 0)).find(isOpenItem);
    if (next) {
      select(next.id);
    }
  }, [filtered, index, isOpenItem, select]);

  const canDecide = Boolean(selected && isOpenItem(selected) && !locked);
  const accept = useCallback(() => {
    if (!selected || !canDecide) {
      return;
    }
    withName(async (name) => {
      if (await decide([selected.id], 'accepted', '', name)) {
        advance();
      }
    });
  }, [selected, canDecide, withName, decide, advance]);
  const reject = useCallback(() => {
    if (canDecide) {
      withName(() => setDialog('reject'));
    }
  }, [canDecide, withName]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent): void => {
      if (ignoresShortcuts(event)) {
        return;
      }
      const key = event.key.toLowerCase();
      if (key === 'j') {
        step(1);
      } else if (key === 'k') {
        step(-1);
      } else if (key === 'a') {
        accept();
      } else if (key === 'r') {
        reject();
      } else {
        return;
      }
      event.preventDefault();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [step, accept, reject]);

  if (error && !review) {
    return (
      <main id='main' className={styles.message}>
        <DSNotification variant='error'>{error}</DSNotification>
      </main>
    );
  }
  if (!review) {
    return (
      <main id='main' className={styles.message} aria-busy='true'>
        <DSSkeleton variant='multi-line' textLineCount={6} />
      </main>
    );
  }

  const remaining = undecided(review);
  const decisionBar = selected && {
    decision: decisions.get(selected.id),
    locked,
    position: { index, total: filtered.length },
    busy,
    onPrevious: () => step(-1),
    onNext: () => step(1),
    onAccept: accept,
    onReject: reject,
    onUndo: () =>
      withName((name) => void decide([selected.id], null, '', name)),
  };
  const sidebar = (
    <Sidebar
      review={review}
      items={items}
      listed={filtered}
      decisions={decisions}
      selectedId={selected?.id}
      filters={filters}
      onFilter={setFilters}
      onSelect={(itemId) => {
        select(itemId);
        onCloseMenu();
      }}
      onAcceptAll={(imageIds, documentTitle) =>
        withName(() => {
          setBulk({ imageIds, documentTitle });
          setDialog('acceptAll');
        })
      }
      acceptedAll={
        acceptedAll && {
          count: acceptedAll.imageIds.length,
          documentTitle: acceptedAll.documentTitle,
        }
      }
      onUndoAcceptAll={() => {
        if (acceptedAll) {
          void decide(acceptedAll.imageIds, null, '', reviewer).then(
            (saved) => saved && setAcceptedAll(null)
          );
        }
      }}
      onDismissAcceptAll={() => setAcceptedAll(null)}
      onFinish={() => {
        if (remaining > 0) {
          setFilters({ ...filters, decisions: ['open'] });
          queueDSToastMessage(
            `${remaining} ${remaining === 1 ? 'change still needs' : 'changes still need'} a decision. The list now shows them.`,
            { variant: 'warning' }
          );
        } else {
          withName(() => setDialog('finish'));
        }
      }}
      onReopen={() => {
        api.reopen(id).then(
          (summary) =>
            setReview((current) => current && { ...current, ...summary }),
          (failure: unknown) =>
            queueDSToastMessage(message(failure), { variant: 'warning' })
        );
      }}
    />
  );
  return (
    <div className={styles.layout}>
      {compact ? (
        <DSDrawer
          isOpen={menuOpen}
          position='end'
          closeButtonProps={{ label: 'Close the review overview' }}
          onClose={onCloseMenu}
        >
          {sidebar}
        </DSDrawer>
      ) : (
        sidebar
      )}
      <main id='main' className={styles.main}>
        {selected && decisionBar ? (
          selected.kind === 'image' ? (
            <ImageViewer
              key={selected.id}
              manifest={review.manifest}
              image={selected.image}
              document={selectedDocument}
              captionEdit={captionEdits.get(selected.id)}
              onEditCaption={(caption, saved) =>
                editCaption(selected.id, caption, saved)
              }
              {...decisionBar}
            />
          ) : (
            <TextViewer
              key={selected.id}
              text={selected.text}
              title={selectedTitle ?? ''}
              document={selectedDocument}
              {...decisionBar}
            />
          )
        ) : (
          <div className={styles.message}>
            <DSNotification variant='info'>
              This review has no changes.
            </DSNotification>
          </div>
        )}
      </main>

      <RejectDialog
        isOpen={dialog === 'reject'}
        subject={selectedTitle ?? ''}
        onClose={() => setDialog(null)}
        onReject={(comment) => {
          setDialog(null);
          if (selected) {
            void decide([selected.id], 'rejected', comment, reviewer).then(
              (saved) => saved && advance()
            );
          }
        }}
      />
      <AcceptAllDialog
        isOpen={dialog === 'acceptAll'}
        count={bulk?.imageIds.length ?? 0}
        documentTitle={bulk?.documentTitle ?? ''}
        busy={busy}
        onClose={() => setDialog(null)}
        onAccept={() => {
          if (bulk) {
            void decide(bulk.imageIds, 'accepted', '', reviewer).then(
              (saved) => {
                setDialog(null);
                if (saved) {
                  setAcceptedAll(bulk);
                }
              }
            );
          }
        }}
      />
      <FinishDialog
        isOpen={dialog === 'finish'}
        accepted={review.accepted}
        rejected={review.rejected}
        busy={busy}
        onClose={() => setDialog(null)}
        onFinish={() => {
          setBusy(true);
          api
            .finish(id, reviewer)
            .then(
              (summary) => {
                setReview((current) => current && { ...current, ...summary });
                queueDSToastMessage('The review is finished', {
                  variant: 'success',
                });
              },
              (failure: unknown) => {
                queueDSToastMessage(message(failure), { variant: 'warning' });
                load();
              }
            )
            .finally(() => {
              setBusy(false);
              setDialog(null);
            });
        }}
      />
    </div>
  );
}

function withDecisions(
  review: ReviewDetail,
  decisions: Decision[]
): ReviewDetail {
  return {
    ...review,
    decisions,
    accepted: decisions.filter((d) => d.status === 'accepted').length,
    rejected: decisions.filter((d) => d.status === 'rejected').length,
  };
}
