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
  /** Text of the section the figure sits in, as a text change shows it */
  sectionText?: string;
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
  /** Reading order within the document, shared with the text changes */
  position?: number;
}

/** A renamed heading is a change of the text, so texts are never only renamed */
export type TextStatus = Exclude<ImageStatus, 'renamed'>;

export interface TextSide {
  /** Heading trail, for example "Button › Formatting" */
  section: string;
  /** Heading and body as plain text: links as "text (url)", no figures or captions */
  text: string;
}

/** A section of a page whose text designers changed in Figma */
export interface ReviewText {
  /** `<category dir>/<document id>#<heading trail>` */
  id: string;
  documentKey: string;
  status: TextStatus;
  before?: TextSide;
  after?: TextSide;
  /** Reading order within the document, shared with the images */
  position: number;
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
  /** Changed text sections; reviews created before text changes were compared have none */
  texts?: ReviewText[];
}

export type DecisionStatus = 'accepted' | 'rejected';

export interface Decision {
  /** Id of the image or the text section */
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
  /** Text sections that changed */
  texts: number;
  /** Images and text sections that need a decision (everything but renamed images) */
  total: number;
  accepted: number;
  rejected: number;
}

export type CaptionEditStatus = 'pending' | 'applied' | 'outdated';

/** A figure description edited on the review page */
export interface CaptionEdit {
  id: number;
  imageId: string;
  caption: string;
  editor: string;
  editedAt: string;
  /** pending until the workflow wrote it; outdated when the image changed before that */
  status: CaptionEditStatus;
  appliedAt: string | null;
  /** The commit on main that contains the description */
  commit: string | null;
}

/** What the workflow needs to write an edit into the repository */
export interface PendingCaptionEdit extends CaptionEdit {
  reviewId: string;
  /** Repository path of the image at `headSha` */
  path: string;
  headSha: string;
}

export interface ReviewDetail extends ReviewSummary {
  manifest: ReviewManifest;
  decisions: Decision[];
  /** Every edit of the review, oldest first; the last one of an image is its description */
  captionEdits: CaptionEdit[];
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

/** Images and text sections, for example "2 changed, 1 added images; 3 text sections" */
export function describeChanges(counts: ReviewCounts, texts: number): string {
  const images = (['changed', 'added', 'removed', 'renamed'] as const).some(
    (status) => counts[status] > 0
  )
    ? `${describeCounts(counts)} ${Object.values(counts).reduce((sum, count) => sum + count, 0) === 1 ? 'image' : 'images'}`
    : '';
  const sections =
    texts > 0
      ? `${texts} ${texts === 1 ? 'text section' : 'text sections'}`
      : '';
  return [images, sections].filter(Boolean).join('; ') || 'no changes';
}

export function describeCounts(counts: ReviewCounts): string {
  const parts = (['changed', 'added', 'removed', 'renamed'] as const)
    .filter((status) => counts[status] > 0)
    .map((status) => `${counts[status]} ${status}`);
  return parts.length > 0 ? parts.join(', ') : 'no changes';
}
