import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname } from 'node:path';
import { loadConfig, selectComponents } from '../config.ts';
import { createFigmaClient, requireToken } from '../figma/client.ts';
import { collectBlocks } from '../extract/collectBlocks.ts';
import { exportImages } from '../images/exportImages.ts';
import { figmaNodeUrl, renderMarkdown } from '../markdown/renderMarkdown.ts';
import {
  loadEnv,
  parseArgs,
  readFrontmatter,
  resolveTargetVersion,
} from './shared.ts';

function withoutSyncedAt(markdown: string): string {
  return markdown.replace(/^syncedAt: .*$/m, '');
}

async function main(): Promise<void> {
  loadEnv();
  const config = loadConfig();
  const { components, latest } = parseArgs(process.argv.slice(2));
  const client = createFigmaClient(requireToken());
  const target = await resolveTargetVersion(client, config.fileKey, latest);
  console.log(
    `Target version ${target.id} (${target.label || 'current file state'}, ${target.createdAt})`
  );

  for (const component of selectComponents(config, components)) {
    console.log(
      `Syncing ${component.id} from ${config.fileKey} / ${component.nodeId}`
    );
    const response = await client.getNodes(
      config.fileKey,
      [component.nodeId],
      target.id
    );
    const node = response.nodes[component.nodeId];
    if (!node) {
      throw new Error(
        `Node ${component.nodeId} not found in file ${config.fileKey}`
      );
    }

    const blocks = collectBlocks(node.document, {
      fileKey: config.fileKey,
      headingLevels: config.headingLevels,
    });

    const imagePaths = await exportImages(blocks, {
      client,
      fileKey: config.fileKey,
      imageDir: component.imageDir,
      markdownPath: component.output,
      format: config.imageExport.format,
      scale: config.imageExport.scale,
      version: target.id,
    });

    const previous = readFrontmatter(component.output);
    const markdown = renderMarkdown(blocks, {
      imagePaths,
      frontmatter: {
        component: component.id,
        title: component.title,
        figmaFileKey: config.fileKey,
        figmaNodeId: component.nodeId,
        figmaVersion: target.id,
        figmaVersionLabel: target.label,
        figmaVersionCreatedAt: target.createdAt,
        syncedAt: new Date().toISOString(),
        sourceUrl: figmaNodeUrl(config.fileKey, component.nodeId),
      },
    });

    const existing = await readFile(component.output, 'utf8').catch(
      () => undefined
    );
    if (existing && withoutSyncedAt(existing) === withoutSyncedAt(markdown)) {
      console.log(
        `  ${component.output} unchanged (syncedAt ${previous?.syncedAt})`
      );
      continue;
    }

    await mkdir(dirname(component.output), { recursive: true });
    await writeFile(component.output, markdown);
    console.log(
      `  wrote ${component.output} (${blocks.length} blocks, ${imagePaths.size} images)`
    );
  }
}

main().catch((error: unknown) => {
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
});
