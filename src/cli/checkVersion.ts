import { appendFileSync } from 'node:fs';
import { loadConfig, selectComponents } from '../config.ts';
import { createFigmaClient, requireToken } from '../figma/client.ts';
import {
  loadEnv,
  parseArgs,
  readFrontmatter,
  resolveTargetVersion,
} from './shared.ts';

/**
 * Compares the target Figma version (latest named version by default) with the
 * version recorded in the Markdown frontmatter.
 * Exit code 0 = up to date, 1 = outdated (or never synced), 2 = error.
 */
async function main(): Promise<void> {
  loadEnv();
  const config = loadConfig();
  const { components, latest } = parseArgs(process.argv.slice(2));
  const client = createFigmaClient(requireToken());
  const target = await resolveTargetVersion(client, config.fileKey, latest);

  let outdated = false;
  for (const component of selectComponents(config, components)) {
    const local = readFrontmatter(component.output)?.figmaVersion;
    const state = local === target.id ? 'up to date' : 'outdated';
    console.log(
      `${component.id}: local ${local ?? 'none'}, target ${target.id} "${target.label}" (${state})`
    );
    outdated ||= state === 'outdated';
  }

  if (process.env.GITHUB_OUTPUT) {
    appendFileSync(
      process.env.GITHUB_OUTPUT,
      [
        `outdated=${outdated}`,
        `version=${target.id}`,
        `label=${target.label.replace(/\r?\n/g, ' ')}`,
        `createdAt=${target.createdAt}`,
        '',
      ].join('\n')
    );
  }
  process.exit(outdated ? 1 : 0);
}

main().catch((error: unknown) => {
  console.error(error instanceof Error ? error.message : error);
  process.exit(2);
});
