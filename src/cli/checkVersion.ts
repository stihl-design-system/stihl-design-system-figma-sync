import { appendFileSync } from 'node:fs';
import { loadConfig, selectDocuments } from '../config.ts';
import { createFigmaClient, requireToken } from '../figma/client.ts';
import {
  createVersionResolver,
  loadEnv,
  parseArgs,
  readFrontmatter,
  type TargetVersion,
} from './shared.ts';

/**
 * Compares the target Figma version (latest named version by default) of every
 * source file with the version recorded in the Markdown frontmatter.
 * Exit code 0 = up to date, 1 = outdated (or never synced), 2 = error.
 */
async function main(): Promise<void> {
  loadEnv();
  const config = loadConfig();
  const { documents, latest } = parseArgs(process.argv.slice(2));
  const client = createFigmaClient(requireToken());
  const resolveVersion = createVersionResolver(client, latest);

  const outdatedFiles = new Map<string, TargetVersion>();
  for (const document of selectDocuments(config, documents)) {
    const target = await resolveVersion(document.file);
    const local = readFrontmatter(document.output)?.figmaVersion;
    const state = local === target.id ? 'up to date' : 'outdated';
    console.log(
      `${document.id}: local ${local ?? 'none'}, target ${target.id} "${target.label}" from ${document.file.name} (${state})`
    );
    if (state === 'outdated') {
      outdatedFiles.set(document.file.name, target);
    }
  }

  const outdated = outdatedFiles.size > 0;
  if (process.env.GITHUB_OUTPUT) {
    const summary = [...outdatedFiles]
      .map(
        ([name, target]) =>
          `${name}: ${target.label.replace(/\r?\n/g, ' ') || target.id}`
      )
      .join('; ');
    appendFileSync(
      process.env.GITHUB_OUTPUT,
      [`outdated=${outdated}`, `summary=${summary}`, ''].join('\n')
    );
  }
  process.exit(outdated ? 1 : 0);
}

main().catch((error: unknown) => {
  console.error(error instanceof Error ? error.message : error);
  process.exit(2);
});
