import {
  DSNotification,
  DSSkeleton,
  useDSToast,
} from '@stihl-design-system/components';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  needsDecision,
  type Decision,
  type DecisionStatus,
  type ReviewDetail,
  type ReviewImage,
} from '../../../shared/manifest.ts';
import { api } from '../api.ts';
import {
  FinishDialog,
  NameDialog,
  RejectDialog,
} from '../components/Dialogs.tsx';
import { ImageViewer } from '../components/ImageViewer.tsx';
import { Sidebar, type Filters } from '../components/Sidebar.tsx';
import { imageTitle, undecided } from '../lib/format.ts';
import { ignoresShortcuts } from '../lib/shortcuts.ts';
import { preload } from '../lib/useComparison.ts';
import { useStored } from '../lib/useStored.ts';
import { navigate, useRoute } from '../router.ts';
import styles from './ReviewPage.module.scss';

type OpenDialog = 'name' | 'reject' | 'finish' | null;

function message(error: unknown): string {
  return error instanceof Error ? error.message : String(error);
}

export function ReviewPage({ id }: { id: string }) {
  const { query } = useRoute();
  const { queueDSToastMessage } = useDSToast();
  const [review, setReview] = useState<ReviewDetail>();
  const [error, setError] = useState<string>();
  const [filters, setFilters] = useState<Filters>({
    decisions: [],
    statuses: [],
  });
  const [reviewer, setReviewer] = useStored('review.reviewer', '');
  const [busy, setBusy] = useState(false);
  const [dialog, setDialog] = useState<OpenDialog>(null);
  /** What the reviewer wanted to do when the page had to ask for the name first */
  const afterName = useRef<((name: string) => void) | null>(null);

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
  useEffect(() => {
    if (review) {
      document.title = `${review.title} | Design review`;
    }
  }, [review]);

  const images = useMemo(() => review?.manifest.images ?? [], [review]);
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
      images.filter(
        (image) =>
          (filters.statuses.length === 0 ||
            filters.statuses.includes(image.status)) &&
          (filters.decisions.length === 0 ||
            (needsDecision(image) &&
              filters.decisions.includes(
                decisions.get(image.id)?.status ?? 'open'
              )))
      ),
    [images, decisions, filters]
  );

  const isOpenImage = useCallback(
    (image: ReviewImage) => needsDecision(image) && !decisions.has(image.id),
    [decisions]
  );
  const requested = query.get('image');
  const selected =
    images.find((image) => image.id === requested) ??
    images.find(isOpenImage) ??
    images[0];
  const index = selected
    ? filtered.findIndex((image) => image.id === selected.id)
    : -1;
  const locked = review ? review.status !== 'open' : true;

  const select = useCallback(
    (imageId: string) => {
      navigate(`/r/${id}?image=${encodeURIComponent(imageId)}`, true);
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
    if (review) {
      preload(
        filtered[index + 1],
        review.manifest.base.sha,
        review.manifest.head.sha
      );
    }
  }, [review, filtered, index]);

  const withName = useCallback(
    (action: (name: string) => void) => {
      if (reviewer) {
        action(reviewer);
      } else {
        afterName.current = action;
        setDialog('name');
      }
    },
    [reviewer]
  );

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

  /** Moves on to the next image that still needs a decision, if the list has one */
  const advance = useCallback(() => {
    const next =
      filtered.slice(index + 1).find(isOpenImage) ??
      filtered.slice(0, Math.max(index, 0)).find(isOpenImage);
    if (next) {
      select(next.id);
    }
  }, [filtered, index, isOpenImage, select]);

  const canDecide = Boolean(selected && isOpenImage(selected) && !locked);
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
  return (
    <div className={styles.layout}>
      <Sidebar
        review={review}
        images={filtered}
        decisions={decisions}
        selectedId={selected?.id}
        filters={filters}
        onFilter={setFilters}
        onSelect={select}
        onAcceptAll={(imageIds, title) =>
          withName(async (name) => {
            if (await decide(imageIds, 'accepted', '', name)) {
              queueDSToastMessage(
                `Accepted ${imageIds.length} images in ${title}`,
                { variant: 'success' }
              );
            }
          })
        }
        onFinish={() => {
          if (remaining > 0) {
            setFilters({ ...filters, decisions: ['open'] });
            queueDSToastMessage(
              `${remaining} ${remaining === 1 ? 'image still needs' : 'images still need'} a decision. The list now shows them.`,
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
      <main id='main' className={styles.main}>
        {selected ? (
          <ImageViewer
            key={selected.id}
            manifest={review.manifest}
            image={selected}
            document={review.manifest.documents.find(
              (document) => document.key === selected.documentKey
            )}
            decision={decisions.get(selected.id)}
            locked={locked}
            position={{ index, total: filtered.length }}
            busy={busy}
            onPrevious={() => step(-1)}
            onNext={() => step(1)}
            onAccept={accept}
            onReject={reject}
            onUndo={() =>
              withName((name) => void decide([selected.id], null, '', name))
            }
          />
        ) : (
          <div className={styles.message}>
            <DSNotification variant='info'>
              This review has no images.
            </DSNotification>
          </div>
        )}
      </main>

      <NameDialog
        isOpen={dialog === 'name'}
        onClose={() => {
          afterName.current = null;
          setDialog(null);
        }}
        onSave={(name) => {
          setReviewer(name);
          setDialog(null);
          afterName.current?.(name);
          afterName.current = null;
        }}
      />
      <RejectDialog
        isOpen={dialog === 'reject'}
        subject={selected ? imageTitle(selected) : ''}
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
