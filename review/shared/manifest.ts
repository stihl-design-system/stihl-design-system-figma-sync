import type { Region } from './pixelDiff.ts';

/** `renamed` is informative only: same pixels under a new file name, no decision needed */
export type ImageStatus = 'changed' | 'added' | 'removed' | 'renamed';

export interface ImageSide {
  /** Repository path, for example docs/components/button/button-168-3988.png */
  path: string;
  width: number;
  height: number;
  /** Heading trail of the chapter the figure sits in */
  section?: string;
  caption?: string;
  /** The node in Figma at the version this side was exported from */
  figmaUrl?: string;
}

export interface ImageDiff {
  changedPixels: number;
  /** Share of changed pixels, 0 to 1 */
  ratio: number;
  regions: Region[];
}

export interface ReviewImage {
  /** `<category dir>/<document id>/<node id>`; stable across renamed sections */
  id: string;
  documentKey: string;
  status: ImageStatus;
  resized: boolean;
  before?: ImageSide;
  after?: ImageSide;
  diff?: ImageDiff;
}

export interface FigmaVersionInfo {
  id: string;
  label: string;
  createdAt: string;
}

export interface ReviewDocument {
  /** `<category dir>/<document id>`, for example components/button */
  key: string;
  title: string;
  category: string;
  figmaFile?: string;
  /** The documentation page in Figma (current file state) */
  sourceUrl?: string;
  before?: FigmaVersionInfo;
  after?: FigmaVersionInfo;
}

export interface CommitInfo {
  sha: string;
  subject: string;
  date: string;
}

export type ReviewCounts = Record<ImageStatus, number>;

export interface ReviewManifest {
  version: 1;
  /** owner/name on GitHub; the image route reads both commits from there */
  repository: string;
  title: string;
  base: CommitInfo;
  head: CommitInfo;
  counts: ReviewCounts;
  documents: ReviewDocument[];
  images: ReviewImage[];
}

export type DecisionStatus = 'accepted' | 'rejected';

export interface Decision {
  imageId: string;
  status: DecisionStatus;
  comment: string;
  reviewer: string;
  updatedAt: string;
}

export type ReviewStatus = 'open' | 'approved' | 'changes_requested';

export interface ReviewSummary {
  id: string;
  title: string;
  createdAt: string;
  status: ReviewStatus;
  finishedAt: string | null;
  finishedBy: string | null;
  counts: ReviewCounts;
  /** Images that need a decision (everything but renamed) */
  total: number;
  accepted: number;
  rejected: number;
}

export interface ReviewDetail extends ReviewSummary {
  manifest: ReviewManifest;
  decisions: Decision[];
}

export function reviewId(base: string, head: string): string {
  return `${base.slice(0, 7)}-${head.slice(0, 7)}`;
}

export function needsDecision(image: Pick<ReviewImage, 'status'>): boolean {
  return image.status !== 'renamed';
}

export function countImages(
  images: Pick<ReviewImage, 'status'>[]
): ReviewCounts {
  const counts: ReviewCounts = { changed: 0, added: 0, removed: 0, renamed: 0 };
  for (const image of images) {
    counts[image.status]++;
  }
  return counts;
}

export function describeCounts(counts: ReviewCounts): string {
  const parts = (['changed', 'added', 'removed', 'renamed'] as const)
    .filter((status) => counts[status] > 0)
    .map((status) => `${counts[status]} ${status}`);
  return parts.length > 0 ? parts.join(', ') : 'no changes';
}
