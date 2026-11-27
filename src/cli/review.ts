import { execFileSync } from 'node:child_process';
import { appendFileSync, mkdirSync, writeFileSync } from 'node:fs';
import { dirname } from 'node:path';
import { loadConfig } from '../config.ts';
import { buildReview } from '../review/buildReview.ts';
import { createGitReader } from '../review/git.ts';
import {
  describeChanges,
  needsDecision,
  type ReviewManifest,
} from '../../review/shared/manifest.ts';
import { loadEnv } from './shared.ts';

interface ReviewArgs {
  base?: string;
  head: string;
  out: string;
  publish: boolean;
  url?: string;
}

function parseReviewArgs(argv: string[]): ReviewArgs {
  const args: ReviewArgs = {
    head: 'HEAD',
    out: '.tmp/review.json',
    publish: false,
  };
  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i];
    if (arg === '--publish') {
      args.publish = true;
    } else if (
      arg === '--base' ||
      arg === '--head' ||
      arg === '--out' ||
      arg === '--url'
    ) {
      const value = argv[++i];
      if (!value) {
        throw new Error(`${arg} requires a value`);
      }
      args[arg.slice(2) as 'base' | 'head' | 'out' | 'url'] = value;
    } else {
      throw new Error(`Unknown argument ${arg}`);
    }
  }
  return args;
}

function repositoryName(): string {
  if (process.env.GITHUB_REPOSITORY) {
    return process.env.GITHUB_REPOSITORY;
  }
  const remote = execFileSync('git', ['remote', 'get-url', 'origin'], {
    encoding: 'utf8',
  }).trim();
  const match = remote.match(/github\.com[:/](.+?)(?:\.git)?$/);
  if (!match?.[1]) {
    throw new Error(
      `Cannot derive the GitHub repository from ${remote}; set GITHUB_REPOSITORY`
    );
  }
  return match[1];
}

interface PublishedReview {
  id: string;
  url: string;
  /** false when the review of these two commits already existed */
  created: boolean;
}

async function publish(
  manifest: ReviewManifest,
  url: string
): Promise<PublishedReview> {
  const token = process.env.REVIEW_PUBLISH_TOKEN;
  if (!token) {
    throw new Error('REVIEW_PUBLISH_TOKEN is required for --publish');
  }
  const response = await fetch(new URL('/api/reviews', url), {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(manifest),
  });
  if (!response.ok) {
    throw new Error(
      `Publishing the review failed: ${response.status} ${(await response.text()).slice(0, 300)}`
    );
  }
  return (await response.json()) as PublishedReview;
}

/**
 * Compares the documentation images and texts of two commits and, with
 * --publish, creates the review on the review page. Exit code 0 also when
 * nothing changed; `changes` in the step outputs tells the workflow.
 */
async function main(): Promise<void> {
  loadEnv();
  const args = parseReviewArgs(process.argv.slice(2));
  if (!args.base) {
    throw new Error(
      'Usage: npm run review -- --base <commit> [--head <commit>] [--out <file>] [--publish] [--url <review page>]'
    );
  }
  const manifest = buildReview({
    git: createGitReader(),
    base: args.base,
    head: args.head,
    docsDir: loadConfig().docsDir,
    repository: repositoryName(),
    log: console.log,
  });
  const texts = manifest.texts?.length ?? 0;
  const changes = manifest.images.filter(needsDecision).length + texts;
  const counts = describeChanges(manifest.counts, texts);
  console.log(`${manifest.title}: ${counts}`);

  mkdirSync(dirname(args.out), { recursive: true });
  writeFileSync(args.out, JSON.stringify(manifest, null, 2));
  console.log(`Wrote ${args.out}`);

  let published: PublishedReview | undefined;
  if (changes === 0) {
    console.log(
      'No visible image changes and no text changes, no review needed'
    );
  } else if (args.publish) {
    const url = args.url ?? process.env.REVIEW_URL;
    if (!url) {
      throw new Error('--publish needs --url or REVIEW_URL');
    }
    published = await publish(manifest, url);
    console.log(`Review: ${published.url}`);
  }

  if (process.env.GITHUB_OUTPUT) {
    appendFileSync(
      process.env.GITHUB_OUTPUT,
      [
        `changes=${changes}`,
        `summary=${counts}`,
        `title=${manifest.title.replace(/\r?\n/g, ' ')}`,
        `review_id=${published?.id ?? ''}`,
        `review_url=${published?.url ?? ''}`,
        `review_created=${published?.created ?? false}`,
        '',
      ].join('\n')
    );
  }
  if (process.env.GITHUB_STEP_SUMMARY) {
    appendFileSync(
      process.env.GITHUB_STEP_SUMMARY,
      [
        `### Design review: ${manifest.title}`,
        '',
        `Compared \`${manifest.base.sha.slice(0, 7)}\` with \`${manifest.head.sha.slice(0, 7)}\`: ${counts}.`,
        '',
        published
          ? `Review: ${published.url}`
          : changes === 0
            ? 'No visible image changes and no text changes, no review was created.'
            : 'Not published.',
        '',
      ].join('\n')
    );
  }
}

main().catch((error: unknown) => {
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
});
