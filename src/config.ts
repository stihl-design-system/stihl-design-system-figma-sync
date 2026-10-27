import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

/** Mirrors the four projects of the Figma team "Design System" */
export type DocCategory = 'foundation' | 'component' | 'pattern' | 'guideline';

export const CATEGORY_DIRS: Record<DocCategory, string> = {
  foundation: 'foundations',
  component: 'components',
  pattern: 'patterns',
  guideline: 'guidelines',
};

export interface SourceConfig {
  /** Short handle referenced by documents */
  id: string;
  /** Figma file name as shown in the team project, for frontmatter and index */
  name: string;
  /** Figma team project the file lives in */
  project: string;
  fileKey: string;
  /** Overrides the global fontSize to heading level map for files with other typography */
  headingLevels?: Record<string, number>;
  /** Fall back to the current file state when the file has no named version */
  allowUnpublished?: boolean;
}

export interface DocumentConfig {
  id: string;
  title: string;
  /** Id of the source file */
  source: string;
  category: DocCategory;
  /** Exported React names documented on this page (e.g. DSButton, DSButtonRound) */
  importNames?: string[];
  /** Search terms and aliases for agents and the index */
  keywords?: string[];
  nodeId: string;
}

/** A document with its source resolved and output paths derived */
export interface ResolvedDocument extends DocumentConfig {
  file: SourceConfig;
  output: string;
  imageDir: string;
}

export interface SyncConfig {
  /** fontSize (as string key) to Markdown heading level */
  headingLevels: Record<string, number>;
  imageExport: { format: 'png' | 'svg'; scale: number };
  /** Generated discovery index listing all documents and their sections */
  indexOutput: string;
  /** Directory the category folders are created in */
  docsDir: string;
  sources: SourceConfig[];
  documents: DocumentConfig[];
}

export function headingLevelsFor(
  config: SyncConfig,
  file: SourceConfig
): Record<string, number> {
  return file.headingLevels ?? config.headingLevels;
}

export function loadConfig(path = 'components.config.json'): SyncConfig {
  return JSON.parse(readFileSync(resolve(path), 'utf8')) as SyncConfig;
}

export function resolveDocument(
  config: SyncConfig,
  document: DocumentConfig
): ResolvedDocument {
  const file = config.sources.find((s) => s.id === document.source);
  if (!file) {
    throw new Error(
      `Document "${document.id}" references unknown source "${document.source}" (known: ${config.sources.map((s) => s.id).join(', ')})`
    );
  }
  const base = `${config.docsDir}/${CATEGORY_DIRS[document.category]}/${document.id}`;
  return { ...document, file, output: `${base}.md`, imageDir: base };
}

export function selectDocuments(
  config: SyncConfig,
  ids: string[]
): ResolvedDocument[] {
  if (ids.length === 0) {
    return config.documents.map((d) => resolveDocument(config, d));
  }
  return ids.map((id) => {
    const document = config.documents.find((d) => d.id === id);
    if (!document) {
      throw new Error(
        `Unknown document "${id}" (known: ${config.documents.map((d) => d.id).join(', ')})`
      );
    }
    return resolveDocument(config, document);
  });
}
