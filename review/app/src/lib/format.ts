import type {
  ImageStatus,
  ReviewDocument,
  ReviewImage,
  ReviewStatus,
  ReviewSummary,
} from '../../../shared/manifest.ts';
import type { ReviewItem } from './items.ts';

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

/** Last heading of the section, the page title for text above the first heading */
export function itemTitle(
  item: ReviewItem,
  document?: Pick<ReviewDocument, 'title'>
): string {
  if (item.kind === 'image') {
    return imageTitle(item.image);
  }
  const side = item.text.after ?? item.text.before;
  return side?.section.split(' › ').at(-1) || document?.title || item.id;
}

/** "Text", "Text added" or "Text removed" */
export function textLabel(status: ImageStatus): string {
  return status === 'changed'
    ? 'Text'
    : `Text ${IMAGE_STATUS_LABEL[status].toLowerCase()}`;
}

/** Figma versions of a page, "label (date) → label (date)" */
export function documentVersions(
  document: Pick<ReviewDocument, 'before' | 'after'> | undefined
): string {
  const versions = [document?.before, document?.after]
    .filter((version) => version !== undefined)
    .map(
      (version) =>
        `${version.label || 'Unnamed version'} (${formatDate(version.createdAt)})`
    );
  return [...new Set(versions)].join(' → ');
}

export function undecided(review: ReviewSummary): number {
  return review.total - review.accepted - review.rejected;
}
