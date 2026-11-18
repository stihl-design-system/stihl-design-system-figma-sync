import { useEffect, useState } from 'react';
import type { ReviewImage } from '../../../shared/manifest.ts';
import {
  diffImages,
  type Region,
  type RgbaImage,
} from '../../../shared/pixelDiff.ts';
import { imageUrl } from './format.ts';

export interface Comparison {
  status: 'loading' | 'ready' | 'error';
  /** Canvas both images share; the larger one of each dimension */
  width: number;
  height: number;
  beforeUrl?: string;
  afterUrl?: string;
  /** Transparent image with the changed pixels in the highlight colour */
  maskUrl?: string;
  regions: Region[];
  changedPixels: number;
  error?: string;
}

async function load(url: string): Promise<HTMLImageElement> {
  const image = new Image();
  image.src = url;
  try {
    await image.decode();
  } catch {
    throw new Error(`The image could not be loaded: ${url}`);
  }
  return image;
}

function pixels(image: HTMLImageElement): RgbaImage {
  const canvas = document.createElement('canvas');
  canvas.width = image.naturalWidth;
  canvas.height = image.naturalHeight;
  const context = canvas.getContext('2d', { willReadFrequently: true });
  if (!context) {
    throw new Error('This browser cannot read image pixels');
  }
  context.drawImage(image, 0, 0);
  return context.getImageData(0, 0, canvas.width, canvas.height);
}

function toBlob(canvas: HTMLCanvasElement): Promise<Blob | null> {
  return new Promise((resolve) => canvas.toBlob(resolve));
}

function initial(image: ReviewImage, base: string, head: string): Comparison {
  return {
    status: 'loading',
    width: Math.max(image.before?.width ?? 0, image.after?.width ?? 0),
    height: Math.max(image.before?.height ?? 0, image.after?.height ?? 0),
    beforeUrl: image.before && imageUrl(base, image.before.path),
    afterUrl: image.after && imageUrl(head, image.after.path),
    regions: [],
    changedPixels: 0,
  };
}

/**
 * Loads both versions of an image and compares them in the browser with the
 * comparison the manifest was built with, so the overlay matches its numbers.
 */
export function useComparison(
  image: ReviewImage,
  base: string,
  head: string
): Comparison {
  const [comparison, setComparison] = useState(() =>
    initial(image, base, head)
  );

  useEffect(() => {
    const start = initial(image, base, head);
    let cancelled = false;
    let maskUrl: string | undefined;
    setComparison(start);

    (async () => {
      const [before, after] = await Promise.all([
        start.beforeUrl ? load(start.beforeUrl) : undefined,
        start.afterUrl ? load(start.afterUrl) : undefined,
      ]);
      if (cancelled) {
        return;
      }
      if (!before || !after) {
        setComparison({ ...start, status: 'ready' });
        return;
      }
      // Let the images paint before the comparison blocks the thread
      await new Promise((resolve) => requestAnimationFrame(resolve));
      const diff = diffImages(pixels(before), pixels(after), {
        fillEdges: true,
      });
      const canvas = document.createElement('canvas');
      canvas.width = diff.width;
      canvas.height = diff.height;
      canvas
        .getContext('2d')
        ?.putImageData(
          new ImageData(
            diff.mask as Uint8ClampedArray<ArrayBuffer>,
            diff.width,
            diff.height
          ),
          0,
          0
        );
      const blob = await toBlob(canvas);
      if (cancelled) {
        return;
      }
      maskUrl = blob ? URL.createObjectURL(blob) : undefined;
      setComparison({
        ...start,
        status: 'ready',
        width: diff.width,
        height: diff.height,
        maskUrl,
        regions: diff.regions,
        changedPixels: diff.changedPixels,
      });
    })().catch((error: unknown) => {
      if (!cancelled) {
        setComparison({
          ...start,
          status: 'error',
          error: error instanceof Error ? error.message : String(error),
        });
      }
    });

    return () => {
      cancelled = true;
      if (maskUrl) {
        URL.revokeObjectURL(maskUrl);
      }
    };
    // The id identifies the image; a refreshed review must not restart the comparison
  }, [image.id, base, head]);

  return comparison;
}

/** Warms the browser cache for the image the reviewer is likely to open next */
export function preload(
  image: ReviewImage | undefined,
  base: string,
  head: string
): void {
  for (const url of [
    image?.before && imageUrl(base, image.before.path),
    image?.after && imageUrl(head, image.after.path),
  ]) {
    if (url) {
      new Image().src = url;
    }
  }
}
