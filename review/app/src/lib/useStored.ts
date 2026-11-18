import { useCallback, useState } from 'react';

/** State that survives a reload, for preferences such as the view or the reviewer name */
export function useStored<T>(
  key: string,
  fallback: T
): [T, (value: T) => void] {
  const [value, setValue] = useState<T>(() => {
    try {
      const stored = window.localStorage.getItem(key);
      return stored === null ? fallback : (JSON.parse(stored) as T);
    } catch {
      return fallback;
    }
  });
  const store = useCallback(
    (next: T) => {
      setValue(next);
      try {
        window.localStorage.setItem(key, JSON.stringify(next));
      } catch {
        // Private mode: the preference just does not persist
      }
    },
    [key]
  );
  return [value, store];
}
