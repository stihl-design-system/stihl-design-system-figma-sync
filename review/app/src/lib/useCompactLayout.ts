import { useSyncExternalStore } from 'react';

/** Below breakpoint l (1024px, as `ds.media-query-max('l')`) the review overview moves into a drawer */
const COMPACT = '(max-width: 1023px)';

function subscribe(onChange: () => void): () => void {
  const list = window.matchMedia(COMPACT);
  list.addEventListener('change', onChange);
  return () => list.removeEventListener('change', onChange);
}

export function useCompactLayout(): boolean {
  return useSyncExternalStore(
    subscribe,
    () => window.matchMedia(COMPACT).matches
  );
}
