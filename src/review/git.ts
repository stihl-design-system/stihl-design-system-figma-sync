import { execFileSync } from 'node:child_process';
import type { CommitInfo } from '../../review/shared/manifest.ts';

const MAX_BUFFER = 512 * 1024 * 1024;

/** The few git reads a review needs; an interface so tests can supply two trees without a repository */
export interface GitReader {
  /** Repository path to blob id for every file below the prefix at the commit */
  listFiles(commit: string, prefix: string): Map<string, string>;
  readBlob(blob: string): Buffer;
  readText(commit: string, path: string): string | undefined;
  commitInfo(ref: string): CommitInfo;
}

export function createGitReader(cwd = process.cwd()): GitReader {
  const git = (args: string[]): Buffer =>
    execFileSync('git', args, {
      cwd,
      maxBuffer: MAX_BUFFER,
      stdio: ['ignore', 'pipe', 'pipe'],
    });

  return {
    listFiles(commit, prefix) {
      const files = new Map<string, string>();
      const output = git(['ls-tree', '-r', '-z', commit, '--', prefix]);
      for (const entry of output.toString('utf8').split('\0')) {
        // <mode> <type> <blob>\t<path>
        const match = entry.match(/^\d+ blob ([0-9a-f]+)\t(.+)$/s);
        if (match?.[1] && match[2]) {
          files.set(match[2], match[1]);
        }
      }
      return files;
    },
    readBlob(blob) {
      return git(['cat-file', 'blob', blob]);
    },
    readText(commit, path) {
      try {
        return git(['show', `${commit}:${path}`]).toString('utf8');
      } catch {
        return undefined;
      }
    },
    commitInfo(ref) {
      const [sha = '', date = '', ...subject] = git([
        'show',
        '-s',
        '--format=%H%n%cI%n%s',
        `${ref}^{commit}`,
      ])
        .toString('utf8')
        .trimEnd()
        .split('\n');
      return { sha, date, subject: subject.join('\n') };
    },
  };
}
