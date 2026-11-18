import { useSyncExternalStore } from 'react';

const listeners = new Set<() => void>();

function subscribe(listener: () => void): () => void {
  listeners.add(listener);
  window.addEventListener('popstate', listener);
  return () => {
    listeners.delete(listener);
    window.removeEventListener('popstate', listener);
  };
}

export function navigate(to: string, replace = false): void {
  if (replace) {
    window.history.replaceState(null, '', to);
  } else {
    window.history.pushState(null, '', to);
  }
  listeners.forEach((listener) => listener());
}

export function useRoute(): { path: string; query: URLSearchParams } {
  const href = useSyncExternalStore(
    subscribe,
    () => window.location.pathname + window.location.search
  );
  const url = new URL(href, window.location.origin);
  return { path: url.pathname, query: url.searchParams };
}
