import pixelmatch from 'pixelmatch';

/**
 * One comparison for the build (numbers in the manifest) and the browser
 * (highlight overlay), so the page never marks something the summary did not count.
 */
export const DIFF_OPTIONS = { threshold: 0.1, includeAA: false } as const;

/** Bright violet, deliberately outside the design system palette so it stands out on the boards */
export const DIFF_COLOR: [number, number, number] = [255, 0, 255];

const REGION_CELL = 24;
const MAX_REGIONS = 40;

export type PixelData = Uint8Array | Uint8ClampedArray;

export interface RgbaImage {
  data: PixelData;
  width: number;
  height: number;
}

/** Bounding box of one connected area of changed pixels */
export interface Region {
  x: number;
  y: number;
  width: number;
  height: number;
  pixels: number;
}

export interface PixelDiff {
  /** Size of the shared canvas both images were compared on */
  width: number;
  height: number;
  resized: boolean;
  changedPixels: number;
  /** Share of changed pixels, 0 to 1 */
  ratio: number;
  regions: Region[];
  /** RGBA, transparent except for changed pixels in DIFF_COLOR */
  mask: Uint8ClampedArray;
}

/** Copies an image to the top left of a transparent canvas of the target size */
export function padTo(
  image: RgbaImage,
  width: number,
  height: number
): PixelData {
  const aligned = image.data.byteOffset % 4 === 0;
  if (image.width === width && image.height === height && aligned) {
    return image.data;
  }
  const padded = new Uint8ClampedArray(width * height * 4);
  const rowLength = image.width * 4;
  for (let y = 0; y < image.height; y++) {
    const start = y * rowLength;
    padded.set(image.data.subarray(start, start + rowLength), y * width * 4);
  }
  return padded;
}

/**
 * Groups changed pixels into regions: the mask is bucketed into cells, touching
 * cells form one region. Coarsens the cells until the list stays navigable.
 */
export function findRegions(
  mask: PixelData,
  width: number,
  height: number,
  cell = REGION_CELL
): Region[] {
  const columns = Math.ceil(width / cell);
  const rows = Math.ceil(height / cell);
  const counts = new Uint32Array(columns * rows);
  const minX = new Int32Array(columns * rows).fill(width);
  const minY = new Int32Array(columns * rows).fill(height);
  const maxX = new Int32Array(columns * rows).fill(-1);
  const maxY = new Int32Array(columns * rows).fill(-1);

  for (let y = 0; y < height; y++) {
    const row = Math.floor(y / cell) * columns;
    for (let x = 0; x < width; x++) {
      if (mask[(y * width + x) * 4 + 3] === 0) {
        continue;
      }
      const index = row + Math.floor(x / cell);
      counts[index] = (counts[index] ?? 0) + 1;
      if (x < (minX[index] ?? 0)) {
        minX[index] = x;
      }
      if (x > (maxX[index] ?? 0)) {
        maxX[index] = x;
      }
      if (y < (minY[index] ?? 0)) {
        minY[index] = y;
      }
      if (y > (maxY[index] ?? 0)) {
        maxY[index] = y;
      }
    }
  }

  const visited = new Uint8Array(columns * rows);
  const regions: Region[] = [];
  for (let start = 0; start < counts.length; start++) {
    if (!counts[start] || visited[start]) {
      continue;
    }
    let left = width;
    let top = height;
    let right = -1;
    let bottom = -1;
    let pixels = 0;
    const queue = [start];
    visited[start] = 1;
    while (queue.length > 0) {
      const index = queue.pop() as number;
      pixels += counts[index] ?? 0;
      left = Math.min(left, minX[index] ?? width);
      top = Math.min(top, minY[index] ?? height);
      right = Math.max(right, maxX[index] ?? -1);
      bottom = Math.max(bottom, maxY[index] ?? -1);
      const column = index % columns;
      const row = Math.floor(index / columns);
      for (let dy = -1; dy <= 1; dy++) {
        for (let dx = -1; dx <= 1; dx++) {
          const nextColumn = column + dx;
          const nextRow = row + dy;
          if (
            nextColumn < 0 ||
            nextRow < 0 ||
            nextColumn >= columns ||
            nextRow >= rows
          ) {
            continue;
          }
          const next = nextRow * columns + nextColumn;
          if (counts[next] && !visited[next]) {
            visited[next] = 1;
            queue.push(next);
          }
        }
      }
    }
    regions.push({
      x: left,
      y: top,
      width: right - left + 1,
      height: bottom - top + 1,
      pixels,
    });
  }

  if (regions.length > MAX_REGIONS && cell < Math.max(width, height)) {
    return findRegions(mask, width, height, cell * 2);
  }
  // Reading order, so "next change" walks the board top to bottom
  return regions.sort((a, b) => a.y - b.y || a.x - b.x);
}

/**
 * Anti-aliased pixels are not counted as changes, which leaves changed shapes
 * as broken outlines in the mask. Painting the ones connected to a counted
 * pixel completes the shapes without marking rendering noise elsewhere.
 */
function fillEdges(
  before: PixelData,
  after: PixelData,
  mask: Uint8ClampedArray,
  width: number,
  height: number
): void {
  const differing = new Uint8ClampedArray(mask.length);
  pixelmatch(before, after, differing, width, height, {
    ...DIFF_OPTIONS,
    includeAA: true,
    diffMask: true,
  });
  const painted = new Uint8Array(width * height);
  for (let i = 0; i < painted.length; i++) {
    painted[i] = mask[i * 4 + 3] === 0 ? 0 : 1;
  }
  const color = [...DIFF_COLOR, 255];
  const queue: number[] = [];
  const spread = (index: number): void => {
    const x = index % width;
    const y = (index - x) / width;
    for (let dy = -1; dy <= 1; dy++) {
      const row = y + dy;
      if (row < 0 || row >= height) {
        continue;
      }
      for (let dx = -1; dx <= 1; dx++) {
        const column = x + dx;
        const next = row * width + column;
        if (
          column >= 0 &&
          column < width &&
          !painted[next] &&
          differing[next * 4 + 3] !== 0
        ) {
          painted[next] = 1;
          mask.set(color, next * 4);
          queue.push(next);
        }
      }
    }
  };
  // Only the counted pixels on a border can have unpainted neighbours; the queue holds the edge pixels
  const counted = painted.slice();
  for (let i = 0; i < counted.length; i++) {
    if (counted[i]) {
      spread(i);
    }
  }
  while (queue.length > 0) {
    spread(queue.pop() as number);
  }
}

export interface DiffOptions {
  /** Fill changed shapes up to their soft edges; for display, the numbers stay the same */
  fillEdges?: boolean;
}

/** Compares two images; different sizes are aligned top left on a shared canvas */
export function diffImages(
  before: RgbaImage,
  after: RgbaImage,
  options: DiffOptions = {}
): PixelDiff {
  const width = Math.max(before.width, after.width);
  const height = Math.max(before.height, after.height);
  const mask = new Uint8ClampedArray(width * height * 4);
  const beforeData = padTo(before, width, height);
  const afterData = padTo(after, width, height);
  let changedPixels = pixelmatch(beforeData, afterData, mask, width, height, {
    ...DIFF_OPTIONS,
    diffMask: true,
    diffColor: DIFF_COLOR,
  });
  const resized =
    before.width !== after.width || before.height !== after.height;
  if (resized) {
    // Area only one of the images covers always counts, whatever its pixels are
    const sharedWidth = Math.min(before.width, after.width);
    const sharedHeight = Math.min(before.height, after.height);
    for (let y = 0; y < height; y++) {
      for (let x = y < sharedHeight ? sharedWidth : 0; x < width; x++) {
        const offset = (y * width + x) * 4;
        if (mask[offset + 3] === 0) {
          mask.set([...DIFF_COLOR, 255], offset);
          changedPixels++;
        }
      }
    }
  }
  const regions = changedPixels > 0 ? findRegions(mask, width, height) : [];
  if (options.fillEdges && changedPixels > 0) {
    fillEdges(beforeData, afterData, mask, width, height);
  }
  return {
    width,
    height,
    resized,
    changedPixels,
    ratio: changedPixels / (width * height),
    regions,
    mask,
  };
}
