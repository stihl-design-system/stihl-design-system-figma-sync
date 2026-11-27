import type {
  ImageStatus,
  ReviewImage,
  ReviewManifest,
  ReviewText,
} from '../../../shared/manifest.ts';

/** What the review lists and takes decisions on: a changed image or a changed text section */
export type ReviewItem =
  | {
      kind: 'image';
      id: string;
      documentKey: string;
      status: ImageStatus;
      image: ReviewImage;
    }
  | {
      kind: 'text';
      id: string;
      documentKey: string;
      status: ImageStatus;
      text: ReviewText;
    };

export type ItemKind = ReviewItem['kind'];

/**
 * Images and texts in reading order: page by page as the manifest lists the
 * pages, within a page by position. Reviews from before text changes have no
 * positions, their images keep the order of the manifest.
 */
export function reviewItems(manifest: ReviewManifest): ReviewItem[] {
  const documentOrder = new Map(
    manifest.documents.map((document, index) => [document.key, index])
  );
  const items = [
    ...manifest.images.map((image, index) => ({
      item: {
        kind: 'image' as const,
        id: image.id,
        documentKey: image.documentKey,
        status: image.status,
        image,
      },
      position: image.position ?? index,
    })),
    ...(manifest.texts ?? []).map((text) => ({
      item: {
        kind: 'text' as const,
        id: text.id,
        documentKey: text.documentKey,
        status: text.status,
        text,
      },
      position: text.position,
    })),
  ];
  return items
    .sort(
      (a, b) =>
        (documentOrder.get(a.item.documentKey) ?? 0) -
          (documentOrder.get(b.item.documentKey) ?? 0) ||
        a.position - b.position
    )
    .map(({ item }) => item);
}
