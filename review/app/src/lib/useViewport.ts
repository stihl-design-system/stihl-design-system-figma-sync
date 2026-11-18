import { useCallback, useLayoutEffect, useRef, useState } from 'react';
import type { Region } from '../../../shared/pixelDiff.ts';

export interface Transform {
  scale: number;
  x: number;
  y: number;
}

const MAX_SCALE = 8;
const PADDING = 24;
/** Part of the board that always stays inside the pane, so it cannot be lost while panning */
const KEEP_VISIBLE = 48;

interface Size {
  width: number;
  height: number;
}

function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

function fitTransform(pane: Size, board: Size): Transform {
  if (!pane.width || !pane.height || !board.width || !board.height) {
    return { scale: 1, x: 0, y: 0 };
  }
  const scale = Math.min(
    (pane.width - PADDING * 2) / board.width,
    (pane.height - PADDING * 2) / board.height,
    1
  );
  return {
    scale,
    x: (pane.width - board.width * scale) / 2,
    y: (pane.height - board.height * scale) / 2,
  };
}

function constrain(transform: Transform, pane: Size, board: Size): Transform {
  return {
    scale: transform.scale,
    x: clamp(
      transform.x,
      KEEP_VISIBLE - board.width * transform.scale,
      pane.width - KEEP_VISIBLE
    ),
    y: clamp(
      transform.y,
      KEEP_VISIBLE - board.height * transform.scale,
      pane.height - KEEP_VISIBLE
    ),
  };
}

/**
 * Zoom and pan shared by all panes of a comparison, so before and after
 * always show the same spot. Fits the board until the user zooms or pans.
 */
export function useViewport(width: number, height: number, resetKey: string) {
  const [pane, setPane] = useState<Size>({ width: 0, height: 0 });
  const [transform, setTransform] = useState<Transform>({
    scale: 1,
    x: 0,
    y: 0,
  });
  const fitted = useRef(true);
  const sizes = useRef({ pane, board: { width, height } });
  sizes.current = { pane, board: { width, height } };

  useLayoutEffect(() => {
    fitted.current = true;
  }, [resetKey]);
  useLayoutEffect(() => {
    if (fitted.current) {
      setTransform(fitTransform(pane, { width, height }));
    }
  }, [pane, width, height, resetKey]);

  const update = useCallback(
    (next: (current: Transform, pane: Size, board: Size) => Transform) => {
      fitted.current = false;
      setTransform((current) => {
        const { pane, board } = sizes.current;
        return constrain(next(current, pane, board), pane, board);
      });
    },
    []
  );

  /** Zooms around a point of the pane, the centre by default */
  const zoomBy = useCallback(
    (factor: number, point?: { x: number; y: number }) => {
      update((current, pane, board) => {
        const minScale = Math.min(fitTransform(pane, board).scale, 0.1);
        const scale = clamp(current.scale * factor, minScale, MAX_SCALE);
        const origin = point ?? { x: pane.width / 2, y: pane.height / 2 };
        const ratio = scale / current.scale;
        return {
          scale,
          x: origin.x - (origin.x - current.x) * ratio,
          y: origin.y - (origin.y - current.y) * ratio,
        };
      });
    },
    [update]
  );

  const fit = useCallback(() => {
    fitted.current = true;
    const { pane, board } = sizes.current;
    setTransform(fitTransform(pane, board));
  }, []);

  const actualSize = useCallback(() => {
    update((current, pane) => {
      const centre = {
        x: (pane.width / 2 - current.x) / current.scale,
        y: (pane.height / 2 - current.y) / current.scale,
      };
      return {
        scale: 1,
        x: pane.width / 2 - centre.x,
        y: pane.height / 2 - centre.y,
      };
    });
  }, [update]);

  /** Centres a changed area, zoomed in far enough to read it */
  const focusRegion = useCallback(
    (region: Region) => {
      update((_current, pane, board) => {
        const scale = clamp(
          Math.min(
            pane.width / (region.width * 2),
            pane.height / (region.height * 2)
          ),
          fitTransform(pane, board).scale,
          2
        );
        return {
          scale,
          x: pane.width / 2 - (region.x + region.width / 2) * scale,
          y: pane.height / 2 - (region.y + region.height / 2) * scale,
        };
      });
    },
    [update]
  );

  /** Ref for every pane: measures it and takes over the wheel (pan, with Ctrl or Cmd zoom) */
  const registerPane = useCallback(
    (element: HTMLElement | null) => {
      if (!element) {
        return;
      }
      const observer = new ResizeObserver(([entry]) => {
        if (entry) {
          const { width, height } = entry.contentRect;
          setPane((current) =>
            current.width === width && current.height === height
              ? current
              : { width, height }
          );
        }
      });
      observer.observe(element);
      const onWheel = (event: WheelEvent): void => {
        event.preventDefault();
        if (event.ctrlKey || event.metaKey) {
          const bounds = element.getBoundingClientRect();
          zoomBy(Math.exp(-event.deltaY * 0.01), {
            x: event.clientX - bounds.left,
            y: event.clientY - bounds.top,
          });
        } else {
          update((current) => ({
            ...current,
            x: current.x - event.deltaX,
            y: current.y - event.deltaY,
          }));
        }
      };
      element.addEventListener('wheel', onWheel, { passive: false });
      return () => {
        observer.disconnect();
        element.removeEventListener('wheel', onWheel);
      };
    },
    [update, zoomBy]
  );

  const drag = useRef<{ x: number; y: number } | undefined>(undefined);
  const paneHandlers = {
    onPointerDown: (event: React.PointerEvent<HTMLElement>): void => {
      if (event.button !== 0) {
        return;
      }
      event.currentTarget.setPointerCapture(event.pointerId);
      drag.current = { x: event.clientX, y: event.clientY };
    },
    onPointerMove: (event: React.PointerEvent<HTMLElement>): void => {
      const last = drag.current;
      if (!last) {
        return;
      }
      drag.current = { x: event.clientX, y: event.clientY };
      update((current) => ({
        ...current,
        x: current.x + event.clientX - last.x,
        y: current.y + event.clientY - last.y,
      }));
    },
    onPointerUp: (): void => {
      drag.current = undefined;
    },
    onPointerCancel: (): void => {
      drag.current = undefined;
    },
    onDoubleClick: (event: React.MouseEvent<HTMLElement>): void => {
      if (!fitted.current) {
        fit();
        return;
      }
      const bounds = event.currentTarget.getBoundingClientRect();
      const point = {
        x: event.clientX - bounds.left,
        y: event.clientY - bounds.top,
      };
      update((current) => ({
        scale: 1,
        x: point.x - (point.x - current.x) / current.scale,
        y: point.y - (point.y - current.y) / current.scale,
      }));
    },
  };

  return {
    transform,
    registerPane,
    paneHandlers,
    zoomBy,
    fit,
    actualSize,
    focusRegion,
  };
}

export type Viewport = ReturnType<typeof useViewport>;
