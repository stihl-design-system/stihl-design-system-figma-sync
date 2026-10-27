import { existsSync, readFileSync } from 'node:fs';
import { parse } from 'yaml';
import type { SourceConfig } from '../config.ts';
import type { FigmaClient } from '../figma/client.ts';
import type { Frontmatter } from '../markdown/renderMarkdown.ts';

export function loadEnv(): void {
  if (existsSync('.env')) {
    process.loadEnvFile('.env');
  }
}

export interface CliArgs {
  documents: string[];
  /** Use the current file state instead of the latest named version */
  latest: boolean;
}

export function parseArgs(argv: string[]): CliArgs {
  const documents: string[] = [];
  let latest = false;
  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i];
    if (arg === '--document' || arg === '-d') {
      const value = argv[++i];
      if (!value) {
        throw new Error('--document requires a value');
      }
      documents.push(value);
    } else if (arg?.startsWith('--document=')) {
      documents.push(arg.slice('--document='.length));
    } else if (arg === '--latest') {
      latest = true;
    }
  }
  return { documents, latest };
}

export interface TargetVersion {
  id: string;
  label: string;
  createdAt: string;
}

/**
 * Named versions are the designers' deliberate "publish" signal; the raw file
 * version changes on every edit. `--latest` opts into the latter.
 */
export async function resolveTargetVersion(
  client: FigmaClient,
  file: SourceConfig,
  latest: boolean
): Promise<TargetVersion> {
  if (!latest) {
    const named = await client.getLatestNamedVersion(file.fileKey);
    if (named) {
      return {
        id: named.id,
        label: named.label ?? '',
        createdAt: named.created_at,
      };
    }
    if (!file.allowUnpublished) {
      throw new Error(
        `File ${file.fileKey} (${file.name}) has no named version. Create one in Figma (File > Save to version history), set allowUnpublished on the source, or run with --latest.`
      );
    }
  }
  const meta = await client.getFileMeta(file.fileKey);
  return { id: meta.version, label: '', createdAt: meta.lastModified };
}

export function readFrontmatter(
  path: string
): Partial<Frontmatter> | undefined {
  if (!existsSync(path)) {
    return undefined;
  }
  const match = readFileSync(path, 'utf8').match(/^---\n([\s\S]*?)\n---\n/);
  return match?.[1] ? (parse(match[1]) as Partial<Frontmatter>) : undefined;
}

/** Resolves the target version once per Figma file; documents share it. */
export function createVersionResolver(
  client: FigmaClient,
  latest: boolean
): (file: SourceConfig) => Promise<TargetVersion> {
  const cache = new Map<string, Promise<TargetVersion>>();
  return (file) => {
    let pending = cache.get(file.fileKey);
    if (!pending) {
      pending = resolveTargetVersion(client, file, latest);
      cache.set(file.fileKey, pending);
    }
    return pending;
  };
}
