import type { Node } from '@figma/rest-api-spec';
import { sortByReadingOrder } from './collectBlocks.ts';

/** What a documentation figure contains, read from its Figma layers instead of its pixels */
export interface FigureFacts {
  /** Visible text labels in reading order, measurements and callout numbers excluded */
  labels: string[];
  /** Values such as 8px, 16px, 44dp, 200ms */
  measurements: string[];
  /** Numbers in annotation circles, as written */
  callouts: string[];
  /** Component instances with their variant properties, e.g. "button (variant=filled, state=enabled)" */
  components: string[];
  /** "Do" or "Don't" when the board carries a verdict chip */
  verdict?: 'Do' | "Don't";
}

const MEASUREMENT = /^[~≈]?\d+([.,]\d+)?\s*(px|dp|pt|sp|rem|em|%|ms|s|deg|x)$/i;
const CALLOUT_CONTAINER = /annotation|callout|marker/i;
const ANNOTATION_LABEL = /^#?\d{1,2}$/;
const VERDICT = /^(do|don['’]?t|dont)$/i;
const MAX_LABELS = 24;
const MAX_LABEL_LENGTH = 80;
const MAX_COMPONENTS = 12;

type AnyNode = Node & {
  visible?: boolean;
  children?: Node[];
  characters?: string;
  componentProperties?: Record<string, { value?: unknown; type?: string }>;
};

function isVisible(node: AnyNode): boolean {
  return node.visible !== false;
}

/** Strips the emoji and id prefixes designers put on property names ("◆ variant#12:3" to "variant") */
function propertyName(raw: string): string {
  return raw
    .split('#')[0]!
    .replace(/^[^\p{L}\p{N}]+/u, '')
    .trim();
}

function describeInstance(node: AnyNode): string | undefined {
  const properties = node.componentProperties;
  if (!properties) {
    return undefined;
  }
  const parts: string[] = [];
  for (const [key, property] of Object.entries(properties)) {
    const name = propertyName(key);
    const value = property.value;
    if (!name || value === undefined || value === false || value === '') {
      continue;
    }
    if (property.type === 'INSTANCE_SWAP') {
      continue;
    }
    parts.push(value === true ? name : `${name}=${String(value)}`);
  }
  const base = node.name.trim().replace(/^[./_]+/, '');
  if (!base || base.startsWith('.')) {
    return undefined;
  }
  return parts.length > 0 ? `${base} (${parts.join(', ')})` : base;
}

function cleanLabel(text: string): string {
  return text.replace(/\s+/g, ' ').trim();
}

/**
 * Collects labels, measurements, callouts, component variants and a do/don't
 * verdict from the visible layers of an exported figure. Nested instances are
 * listed once at their outermost level so a button inside a card counts as a card.
 */
export function collectFigureFacts(root: Node): FigureFacts {
  const labels: string[] = [];
  const measurements: string[] = [];
  const callouts: string[] = [];
  const components: string[] = [];
  let verdict: FigureFacts['verdict'];

  const visit = (node: AnyNode, inAnnotation: boolean, inInstance: boolean) => {
    if (!isVisible(node)) {
      return;
    }
    const annotation = inAnnotation || CALLOUT_CONTAINER.test(node.name);
    if (node.type === 'TEXT') {
      const text = cleanLabel(node.characters ?? '');
      if (!text) {
        return;
      }
      if (VERDICT.test(text)) {
        verdict = /^do$/i.test(text) ? 'Do' : "Don't";
        return;
      }
      if (MEASUREMENT.test(text)) {
        measurements.push(text.replace(/\s+/g, ''));
        return;
      }
      if (annotation && ANNOTATION_LABEL.test(text)) {
        callouts.push(text.replace(/^#/, ''));
        return;
      }
      if (text.length <= MAX_LABEL_LENGTH) {
        labels.push(text);
      } else {
        labels.push(`${text.slice(0, MAX_LABEL_LENGTH - 3).trimEnd()}...`);
      }
      return;
    }
    let nowInInstance = inInstance;
    if (node.type === 'INSTANCE' && !inInstance) {
      const described = describeInstance(node);
      if (described) {
        components.push(described);
      }
      nowInInstance = true;
    }
    if (node.children) {
      for (const child of sortByReadingOrder(node.children)) {
        visit(child as AnyNode, annotation, nowInInstance);
      }
    }
  };

  for (const child of sortByReadingOrder((root as AnyNode).children ?? [])) {
    visit(child as AnyNode, false, false);
  }

  const unique = (values: string[]) => [...new Set(values)];
  return {
    labels: unique(labels).slice(0, MAX_LABELS),
    measurements: unique(measurements),
    callouts: unique(callouts).sort(
      (a, b) => Number(a) - Number(b) || a.localeCompare(b)
    ),
    components: unique(components).slice(0, MAX_COMPONENTS),
    ...(verdict ? { verdict } : {}),
  };
}

export function hasFacts(facts: FigureFacts | undefined): facts is FigureFacts {
  return (
    !!facts &&
    (facts.labels.length > 0 ||
      facts.measurements.length > 0 ||
      facts.callouts.length > 0 ||
      facts.components.length > 0 ||
      facts.verdict !== undefined)
  );
}

/** Deterministic one-line description for figures without a vision caption */
export function describeFigure(facts: FigureFacts): string | undefined {
  if (!hasFacts(facts)) {
    return undefined;
  }
  const parts: string[] = [];
  if (facts.verdict) {
    parts.push(`${facts.verdict} example.`);
  }
  if (facts.components.length > 0) {
    parts.push(`Shows ${facts.components.join('; ')}.`);
  }
  if (facts.measurements.length > 0) {
    parts.push(`Measurements: ${facts.measurements.join(', ')}.`);
  }
  if (facts.callouts.length > 0) {
    parts.push(`Callouts ${facts.callouts.join(', ')}.`);
  }
  if (facts.labels.length > 0) {
    parts.push(
      `Text in the figure: ${facts.labels.map((l) => `"${l}"`).join(', ')}.`
    );
  }
  return parts.join(' ');
}
