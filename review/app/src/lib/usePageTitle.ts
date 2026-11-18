import { useEffect } from 'react';

const TOUCHPOINT = 'Design Review';
const BRAND = 'STIHL';
/** En dash (U+2013), the separator of the STIHL page title syntax */
const SEPARATOR = ' \u2013 ';

/**
 * Page title after the design system syntax: from the specific to the general,
 * `Path A – Path B – touchpoint name – STIHL`.
 */
export function pageTitle(...path: (string | undefined)[]): string {
  const segments = [...path.filter(Boolean), TOUCHPOINT, BRAND];
  // A figure named like its page would otherwise be read out twice
  return segments
    .filter((segment, index) => segment !== segments[index + 1])
    .join(SEPARATOR);
}

export function usePageTitle(...path: (string | undefined)[]): void {
  const title = pageTitle(...path);
  useEffect(() => {
    document.title = title;
  }, [title]);
}
