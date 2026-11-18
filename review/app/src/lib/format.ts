import type {
  ImageStatus,
  ReviewImage,
  ReviewStatus,
  ReviewSummary,
} from '../../../shared/manifest.ts';

export const IMAGE_STATUS_LABEL: Record<ImageStatus, string> = {
  changed: 'Changed',
  added: 'Added',
  removed: 'Removed',
  renamed: 'Renamed',
};

/** Flag colours follow the Flag guidelines: info for neutral states, positive and warning for outcomes */
export const REVIEW_STATUS: Record<
  ReviewStatus,
  { label: string; color: 'status-info' | 'status-positive' | 'status-warning' }
> = {
  open: { label: 'In review', color: 'status-info' },
  approved: { label: 'Approved', color: 'status-positive' },
  changes_requested: { label: 'Changes requested', color: 'status-warning' },
};

const DATE_FORMAT = new Intl.DateTimeFormat('en-GB', {
  dateStyle: 'medium',
  timeStyle: 'short',
});

export function formatDate(iso: string | null | undefined): string {
  const date = iso ? new Date(iso) : undefined;
  return date && !Number.isNaN(date.getTime()) ? DATE_FORMAT.format(date) : '';
}

export function formatShare(ratio: number): string {
  const percent = ratio * 100;
  return percent > 0 && percent < 0.01 ? '< 0.01 %' : `${percent.toFixed(2)} %`;
}

export function imageUrl(sha: string, path: string): string {
  return `/img/${sha}/${path}`;
}

/** Last heading of the trail the figure sits under, the file name as a fallback */
export function imageTitle(image: ReviewImage): string {
  const side = image.after ?? image.before;
  return (
    side?.section?.split(' › ').at(-1) ??
    side?.path.split('/').at(-1) ??
    image.id
  );
}

export function undecided(review: ReviewSummary): number {
  return review.total - review.accepted - review.rejected;
}
