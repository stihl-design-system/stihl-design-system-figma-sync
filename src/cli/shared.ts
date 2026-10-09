import { existsSync, readFileSync } from 'node:fs';
import { parse } from 'yaml';
import type { FigmaClient } from '../figma/client.ts';
import type { Frontmatter } from '../markdown/renderMarkdown.ts';

export function loadEnv(): void {
  if (existsSync('.env')) {
    process.loadEnvFile('.env');
  }
}

export interface CliArgs {
  components: string[];
  /** Use the current file state instead of the latest named version */
  latest: boolean;
}

export function parseArgs(argv: string[]): CliArgs {
  const components: string[] = [];
  let latest = false;
  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i];
    if (arg === '--component' || arg === '-c') {
      const value = argv[++i];
      if (!value) {
        throw new Error('--component requires a value');
      }
      components.push(value);
    } else if (arg?.startsWith('--component=')) {
      components.push(arg.slice('--component='.length));
    } else if (arg === '--latest') {
      latest = true;
    }
  }
  return { components, latest };
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
  fileKey: string,
  latest: boolean
): Promise<TargetVersion> {
  if (latest) {
    const meta = await client.getFileMeta(fileKey);
    return { id: meta.version, label: '', createdAt: meta.lastModified };
  }
  const named = await client.getLatestNamedVersion(fileKey);
  if (!named) {
    throw new Error(
      `File ${fileKey} has no named version. Create one in Figma (File > Save to version history) or run with --latest.`
    );
  }
  return {
    id: named.id,
    label: named.label ?? '',
    createdAt: named.created_at,
  };
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
