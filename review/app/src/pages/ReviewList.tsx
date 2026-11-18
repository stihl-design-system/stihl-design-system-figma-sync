import {
  DSLinkCard,
  DSNotification,
  DSSkeleton,
  DSText,
  DSTitle,
} from '@stihl-design-system/components';
import { useEffect, useState } from 'react';
import {
  describeCounts,
  type ReviewSummary,
} from '../../../shared/manifest.ts';
import { api } from '../api.ts';
import { formatDate, REVIEW_STATUS, undecided } from '../lib/format.ts';
import { navigate } from '../router.ts';
import styles from './ReviewList.module.scss';

function progress(review: ReviewSummary): string {
  if (review.status !== 'open') {
    return `${review.finishedBy ?? 'Unknown'}, ${formatDate(review.finishedAt)}`;
  }
  const remaining = undecided(review);
  return remaining === 0
    ? 'All images decided, ready to finish'
    : `${remaining} of ${review.total} images to decide`;
}

export function ReviewList() {
  const [reviews, setReviews] = useState<ReviewSummary[]>();
  const [error, setError] = useState<string>();

  useEffect(() => {
    document.title = 'Design review | STIHL Design System';
    api
      .listReviews()
      .then(setReviews, (failure: unknown) =>
        setError(failure instanceof Error ? failure.message : String(failure))
      );
  }, []);

  return (
    <main id='main' className={styles.page}>
      <div className={styles.content}>
        <header className={styles.intro}>
          <DSTitle size='large'>Design reviews</DSTitle>
          <DSText>
            Every Figma documentation release that changes images gets a review.
            Check whether each change was intended, accept or reject it, and
            finish the review.
          </DSText>
        </header>

        {error && <DSNotification variant='error'>{error}</DSNotification>}
        {!reviews && !error && (
          <DSSkeleton variant='multi-line' textLineCount={4} />
        )}
        {reviews?.length === 0 && (
          <DSNotification variant='info'>
            There are no reviews yet. The first one appears after the next Figma
            documentation release that changes images.
          </DSNotification>
        )}
        {reviews && reviews.length > 0 && (
          <ul className={styles.reviews}>
            {reviews.map((review, index) => {
              const status = REVIEW_STATUS[review.status];
              return (
                <li key={review.id}>
                  <DSLinkCard
                    href={`/r/${review.id}`}
                    heading={{
                      headingText: review.title,
                      headingTag: 'h2',
                      headingSize: 'small',
                    }}
                    flags={[
                      { children: status.label, color: status.color },
                      ...(index === 0
                        ? [{ children: 'Latest', color: 'promo-neutral' }]
                        : []),
                    ]}
                    flagListAriaLabel='Status'
                    description={`${describeCounts(review.counts)}. ${progress(review)}.`}
                    metaData={`Created ${formatDate(review.createdAt)}`}
                    onClick={(event) => {
                      if (!event.metaKey && !event.ctrlKey && !event.shiftKey) {
                        event.preventDefault();
                        navigate(`/r/${review.id}`);
                      }
                    }}
                  />
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </main>
  );
}
