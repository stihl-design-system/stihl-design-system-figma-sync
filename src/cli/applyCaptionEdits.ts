import { execFileSync } from 'node:child_process';
import {
  appendFileSync,
  mkdirSync,
  readFileSync,
  writeFileSync,
} from 'node:fs';
import { applyCaptionEdit } from '../images/editCaptions.ts';
import type { PendingCaptionEdit } from '../../review/shared/manifest.ts';
import { loadEnv } from './shared.ts';

/** Ids applied by the first run, for `--mark` once the commit is on main */
const STATE_FILE = '.tmp/caption-edits.json';
/** Body of the pull request */
const BODY_FILE = '.tmp/caption-edits.md';

function reviewApi(): (path: string, body?: unknown) => Promise<unknown> {
  const url = process.env.REVIEW_URL;
  const token = process.env.REVIEW_PUBLISH_TOKEN;
  if (!url || !token) {
    throw new Error('REVIEW_URL and REVIEW_PUBLISH_TOKEN are required');
  }
  return async (path, body) => {
    const response = await fetch(new URL(path, url), {
      method: body === undefined ? 'GET' : 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: body === undefined ? undefined : JSON.stringify(body),
    });
    if (!response.ok) {
      throw new Error(
        `${path} failed: ${response.status} ${(await response.text()).slice(0, 300)}`
      );
    }
    return response.json();
  };
}

/** Whether the file on disk is still the image the description was written for */
function sameImage(headSha: string, path: string): boolean {
  const git = (args: string[]): string =>
    execFileSync('git', args, {
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'ignore'],
    }).trim();
  try {
    return (
      git(['rev-parse', `${headSha}:${path}`]) === git(['hash-object', path])
    );
  } catch {
    // The file is gone, or the commit is not in this checkout
    return false;
  }
}

function output(values: Record<string, string | number>): void {
  if (process.env.GITHUB_OUTPUT) {
    appendFileSync(
      process.env.GITHUB_OUTPUT,
      Object.entries(values)
        .map(([key, value]) => `${key}=${value}\n`)
        .join('')
    );
  }
}

/**
 * Writes the figure descriptions edited on the review page into the repository.
 * Without arguments it applies every pending edit (the newest per image wins),
 * reports edits of images that changed since as outdated, and leaves the ids of
 * the applied ones in .tmp. `--mark <commit>` then reports them as applied once
 * that commit is on main.
 */
async function main(): Promise<void> {
  loadEnv();
  const api = reviewApi();
  const args = process.argv.slice(2);

  if (args[0] === '--mark') {
    const commit = args[1];
    if (!commit || !/^[0-9a-f]{40}$/.test(commit)) {
      throw new Error('Usage: npm run captions:apply -- --mark <commit sha>');
    }
    const { applied } = JSON.parse(readFileSync(STATE_FILE, 'utf8')) as {
      applied: number[];
    };
    if (applied.length > 0) {
      await api('/api/caption-edits/status', {
        ids: applied,
        status: 'applied',
        commit,
      });
    }
    console.log(`Marked ${applied.length} edits as applied in ${commit}`);
    return;
  }

  const { edits } = (await api('/api/caption-edits')) as {
    edits: PendingCaptionEdit[];
  };
  const byPath = new Map<string, PendingCaptionEdit[]>();
  for (const edit of edits) {
    byPath.set(edit.path, [...(byPath.get(edit.path) ?? []), edit]);
  }

  const applied: number[] = [];
  const outdated: number[] = [];
  const lines: string[] = [];
  for (const [path, group] of byPath) {
    // Pending edits come oldest first; the newest one is the description, the others are settled with it
    const latest = group.at(-1)!;
    const ids = group.map((edit) => edit.id);
    if (
      sameImage(latest.headSha, path) &&
      (await applyCaptionEdit(process.cwd(), latest))
    ) {
      applied.push(...ids);
      lines.push(`- \`${path}\`: ${latest.editor}, ${latest.editedAt}`);
    } else {
      outdated.push(...ids);
      console.log(`${path}: the image changed since the edit, not applied`);
    }
  }
  if (outdated.length > 0) {
    await api('/api/caption-edits/status', {
      ids: outdated,
      status: 'outdated',
    });
  }

  mkdirSync('.tmp', { recursive: true });
  writeFileSync(STATE_FILE, JSON.stringify({ applied }));
  writeFileSync(
    BODY_FILE,
    [
      'Figure descriptions edited on the review page. Each one is stored with editor and time in `captions.json` next to the image and kept by later syncs as long as the image stays the same.',
      '',
      ...lines,
      '',
    ].join('\n')
  );
  console.log(
    `${edits.length} pending edits: ${lines.length} images updated, ${outdated.length} edits outdated`
  );
  output({ applied: applied.length, images: lines.length });
}

main().catch((error: unknown) => {
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
});
