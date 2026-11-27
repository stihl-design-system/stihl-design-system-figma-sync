import { posix } from 'node:path';
import { parse } from 'yaml';
import { CATEGORY_DIRS } from '../config.ts';
import { figmaNodeUrl, type Frontmatter } from '../markdown/renderMarkdown.ts';
import {
  countImages,
  needsDecision,
  type FigmaVersionInfo,
  type ImageSide,
  type ReviewDocument,
  type ReviewImage,
  type ReviewManifest,
  type ReviewText,
} from '../../review/shared/manifest.ts';
import {
  compareImage,
  pairImages,
  pairMovedImages,
  parseImagePath,
  type ComparedImage,
  type ImageSize,
} from './compareImages.ts';
import {
  compareSections,
  parseSections,
  sectionText,
  unescapeText,
  type Section,
} from './compareTexts.ts';
import type { GitReader } from './git.ts';

export interface Figure {
  /** Heading trail, for example "Button › Formatting" */
  section: string;
  caption?: string;
  /** Position in the document, for reading order */
  order: number;
}

export function parseFrontmatter(
  markdown: string | undefined
): Partial<Frontmatter> | undefined {
  const match = markdown?.match(/^---\n([\s\S]*?)\n---\n/);
  return match?.[1] ? (parse(match[1]) as Partial<Frontmatter>) : undefined;
}

/** Reads section and caption of every figure from a generated document, keyed by repository path */
export function parseFigures(
  markdown: string,
  markdownPath: string
): Map<string, Figure> {
  const figures = new Map<string, Figure>();
  const trail: { level: number; text: string }[] = [];
  const lines = markdown.split('\n');
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i] ?? '';
    const heading = line.match(/^(#{1,6})\s+(.*)$/);
    if (heading?.[1] && heading[2]) {
      const level = heading[1].length;
      while (trail.length > 0 && (trail.at(-1)?.level ?? 0) >= level) {
        trail.pop();
      }
      trail.push({ level, text: unescapeText(heading[2].trim()) });
      continue;
    }
    const image = line.match(/^!\[.*\]\((.+\.png)\)$/);
    if (!image?.[1]) {
      continue;
    }
    let next = i + 1;
    while (next < lines.length && lines[next]?.trim() === '') {
      next++;
    }
    const caption = lines[next]?.match(/^_Figure: (.*)_$/)?.[1];
    figures.set(posix.join(posix.dirname(markdownPath), image[1]), {
      section: trail.map(({ text }) => text).join(' › '),
      caption: caption ? unescapeText(caption) : undefined,
      order: figures.size,
    });
  }
  return figures;
}

interface DocumentSide {
  frontmatter: Partial<Frontmatter>;
  figures: Map<string, Figure>;
  sections: Section[];
  /** Figure path to the line it is on and the text of its section */
  figureSections: Map<string, { line: number; text: string }>;
}

function versionInfo(
  frontmatter: Partial<Frontmatter> | undefined
): FigmaVersionInfo | undefined {
  return frontmatter?.figmaVersion
    ? {
        id: String(frontmatter.figmaVersion),
        label: frontmatter.figmaVersionLabel ?? '',
        createdAt: frontmatter.figmaVersionCreatedAt ?? '',
      }
    : undefined;
}

function imageSide(
  size: ImageSize | undefined,
  side: DocumentSide | undefined,
  docsDir: string
): ImageSide | undefined {
  if (!size) {
    return undefined;
  }
  // Per side: a figure whose board was rebuilt in Figma has a different node before and after
  const node = parseImagePath(size.path, docsDir)?.node ?? '';
  const figure = side?.figures.get(size.path);
  const { figmaFileKey, figmaVersion } = side?.frontmatter ?? {};
  return {
    ...size,
    section: figure?.section,
    caption: figure?.caption,
    sectionText: side?.figureSections.get(size.path)?.text || undefined,
    // Pinned to the version the image was exported from, so "previous" shows the old board
    figmaUrl:
      figmaFileKey && /^\d+-\d+$/.test(node)
        ? `${figmaNodeUrl(figmaFileKey, node)}${figmaVersion ? `&version-id=${figmaVersion}` : ''}`
        : undefined,
  };
}

/** Named after the Figma versions the changed pages were published with */
function reviewTitle(labels: string[]): string | undefined {
  const [first, second, ...rest] = labels;
  if (!first) {
    return undefined;
  }
  if (!second) {
    return first;
  }
  return rest.length > 0
    ? `${first} and ${rest.length + 1} more`
    : `${first}, ${second}`;
}

export interface BuildReviewOptions {
  git: GitReader;
  base: string;
  head: string;
  docsDir: string;
  /** owner/name on GitHub */
  repository: string;
  log?: (message: string) => void;
}

/** Compares the documentation images and texts of two commits and describes every change */
export function buildReview(options: BuildReviewOptions): ReviewManifest {
  const { git, docsDir, log = () => undefined } = options;
  const base = git.commitInfo(options.base);
  const head = git.commitInfo(options.head);

  const sides = new Map<string, DocumentSide | undefined>();
  const documentSide = (
    commit: string,
    documentKey: string
  ): DocumentSide | undefined => {
    const cacheKey = `${commit}:${documentKey}`;
    if (!sides.has(cacheKey)) {
      const path = `${docsDir}/${documentKey}.md`;
      const markdown = git.readText(commit, path);
      const sections = markdown ? parseSections(markdown, path) : [];
      sides.set(
        cacheKey,
        markdown
          ? {
              frontmatter: parseFrontmatter(markdown) ?? {},
              figures: parseFigures(markdown, path),
              sections,
              figureSections: new Map(
                sections.flatMap((section) =>
                  section.figures.map(({ path: figure, line }) => [
                    figure,
                    { line, text: sectionText(section) },
                  ])
                )
              ),
            }
          : undefined
      );
    }
    return sides.get(cacheKey);
  };

  const baseFiles = git.listFiles(base.sha, docsDir);
  const headFiles = git.listFiles(head.sha, docsDir);
  const pairs = pairMovedImages(
    pairImages(baseFiles, headFiles, docsDir),
    docsDir,
    (path, side) => {
      const documentKey = parseImagePath(path, docsDir)?.documentKey ?? '';
      const commit = side === 'before' ? base.sha : head.sha;
      return documentSide(commit, documentKey)?.figures.get(path)?.order;
    }
  );
  const compared: ComparedImage[] = [];
  for (const pair of pairs) {
    const image = compareImage(pair, (blob) => git.readBlob(blob));
    if (image) {
      compared.push(image);
    }
  }
  const moved = pairs.filter(
    ({ before, after }) =>
      before &&
      after &&
      parseImagePath(before.path, docsDir)?.node !==
        parseImagePath(after.path, docsDir)?.node
  ).length;
  log(
    `${pairs.length} image files differ between ${base.sha.slice(0, 7)} and ${head.sha.slice(0, 7)}, ${compared.length} with a visible change or a new name${moved > 0 ? `; ${moved} matched to the previous figure of their section because the Figma node changed` : ''}`
  );

  const categoryOrder: string[] = Object.values(CATEGORY_DIRS);
  const documents = new Map<string, ReviewDocument>();
  const addDocument = (
    documentKey: string,
    before: DocumentSide | undefined,
    after: DocumentSide | undefined
  ): void => {
    if (!documents.has(documentKey)) {
      const frontmatter = after?.frontmatter ?? before?.frontmatter ?? {};
      documents.set(documentKey, {
        key: documentKey,
        title: frontmatter.title ?? documentKey,
        category: frontmatter.category ?? '',
        figmaFile: frontmatter.figmaFile,
        sourceUrl: frontmatter.sourceUrl,
        before: versionInfo(before?.frontmatter),
        after: versionInfo(after?.frontmatter),
      });
    }
  };

  // Removed images and sections follow the ones that still exist
  const REMOVED = 100_000;
  const texts: ReviewText[] = [];
  for (const documentKey of changedDocuments(baseFiles, headFiles, docsDir)) {
    const before = documentSide(base.sha, documentKey);
    const after = documentSide(head.sha, documentKey);
    const changes = compareSections(
      before?.sections ?? [],
      after?.sections ?? []
    );
    if (changes.length > 0) {
      addDocument(documentKey, before, after);
    }
    for (const { key, status, before: previous, after: next } of changes) {
      texts.push({
        id: `${documentKey}#${key}`,
        documentKey,
        status,
        before: previous && { section: previous.section, text: previous.text },
        after: next && { section: next.section, text: next.text },
        position: next?.line ?? REMOVED + (previous?.line ?? 0),
      });
    }
  }
  if (texts.length > 0) {
    log(`${texts.length} text sections changed`);
  }

  const images: (ReviewImage & { order: number })[] = [];
  for (const image of compared) {
    const before = documentSide(base.sha, image.documentKey);
    const after = documentSide(head.sha, image.documentKey);
    addDocument(image.documentKey, before, after);
    const position =
      (image.after && after?.figureSections.get(image.after.path)?.line) ??
      REMOVED +
        ((image.before &&
          before?.figureSections.get(image.before.path)?.line) ??
          0);
    const order =
      (image.after && after?.figures.get(image.after.path)?.order) ??
      // Removed figures follow the ones that still exist
      100_000 +
        ((image.before && before?.figures.get(image.before.path)?.order) ?? 0);
    images.push({
      id: image.id,
      documentKey: image.documentKey,
      status: image.status,
      resized: image.resized,
      before: imageSide(image.before, before, docsDir),
      after: imageSide(image.after, after, docsDir),
      diff: image.diff,
      position,
      order,
    });
  }

  const sortedDocuments = [...documents.values()].sort(
    (a, b) =>
      categoryOrder.indexOf(a.key.split('/')[0] ?? '') -
        categoryOrder.indexOf(b.key.split('/')[0] ?? '') ||
      a.title.localeCompare(b.title)
  );
  const documentOrder = new Map(sortedDocuments.map((d, i) => [d.key, i]));
  images.sort(
    (a, b) =>
      (documentOrder.get(a.documentKey) ?? 0) -
        (documentOrder.get(b.documentKey) ?? 0) ||
      a.order - b.order ||
      a.id.localeCompare(b.id)
  );
  texts.sort(
    (a, b) =>
      (documentOrder.get(a.documentKey) ?? 0) -
        (documentOrder.get(b.documentKey) ?? 0) || a.position - b.position
  );

  const labels = new Set(
    [...images.filter(needsDecision), ...texts]
      .map((item) => documents.get(item.documentKey)?.after?.label)
      .filter((label): label is string => Boolean(label))
  );
  return {
    version: 1,
    repository: options.repository,
    title: reviewTitle([...labels]) ?? head.subject,
    base,
    head,
    counts: countImages(images),
    documents: sortedDocuments,
    images: images.map(({ order: _order, ...image }) => image),
    texts,
  };
}

/** Keys of the documentation pages whose Markdown differs between the two trees */
function changedDocuments(
  baseFiles: Map<string, string>,
  headFiles: Map<string, string>,
  docsDir: string
): string[] {
  const categories = new Set<string>(Object.values(CATEGORY_DIRS));
  const keys = new Set<string>();
  for (const path of new Set([...baseFiles.keys(), ...headFiles.keys()])) {
    const match = path.match(/^(.+)\/([^/]+)\/([^/]+)\.md$/);
    if (
      match?.[1] === docsDir &&
      categories.has(match[2] ?? '') &&
      baseFiles.get(path) !== headFiles.get(path)
    ) {
      keys.add(`${match[2]}/${match[3]}`);
    }
  }
  return [...keys];
}
