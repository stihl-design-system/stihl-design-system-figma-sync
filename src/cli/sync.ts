import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname } from 'node:path';
import {
  headingLevelsFor,
  loadConfig,
  resolveDocument,
  selectDocuments,
  type SyncConfig,
} from '../config.ts';
import { createFigmaClient, requireToken } from '../figma/client.ts';
import { collectBlocks } from '../extract/collectBlocks.ts';
import { exportImages } from '../images/exportImages.ts';
import {
  parseHeadings,
  renderIndex,
  type IndexEntry,
} from '../markdown/renderIndex.ts';
import {
  figmaNodeUrl,
  renderMarkdown,
  type Frontmatter,
} from '../markdown/renderMarkdown.ts';
import {
  createVersionResolver,
  loadEnv,
  parseArgs,
  readFrontmatter,
} from './shared.ts';

const PACKAGE_NAME = '@stihl-design-system/components';

function withoutSyncedAt(markdown: string): string {
  return markdown.replace(/^syncedAt: .*$/m, '');
}

/** Rebuilds the index from every document on disk, not only the ones synced in this run. */
async function writeIndex(config: SyncConfig): Promise<void> {
  const entries: IndexEntry[] = [];
  for (const document of config.documents) {
    const { output } = resolveDocument(config, document);
    const markdown = await readFile(output, 'utf8').catch(() => undefined);
    const frontmatter = readFrontmatter(output);
    if (!markdown || !frontmatter) {
      continue;
    }
    entries.push({
      frontmatter: frontmatter as Frontmatter,
      path: output,
      headings: parseHeadings(markdown),
    });
  }
  const index = renderIndex(entries, config.indexOutput);
  const existing = await readFile(config.indexOutput, 'utf8').catch(
    () => undefined
  );
  if (existing === index) {
    return;
  }
  await mkdir(dirname(config.indexOutput), { recursive: true });
  await writeFile(config.indexOutput, index);
  console.log(`  wrote ${config.indexOutput} (${entries.length} documents)`);
}

async function main(): Promise<void> {
  loadEnv();
  const config = loadConfig();
  const { documents, latest } = parseArgs(process.argv.slice(2));
  const client = createFigmaClient(requireToken());
  const resolveVersion = createVersionResolver(client, latest);

  for (const document of selectDocuments(config, documents)) {
    const { file } = document;
    const target = await resolveVersion(file);
    console.log(
      `Syncing ${document.id} from ${file.name} / ${document.nodeId} (version ${target.id}, ${target.label || 'current file state'})`
    );
    const response = await client.getNodes(
      file.fileKey,
      [document.nodeId],
      target.id
    );
    const node = response.nodes[document.nodeId];
    if (!node) {
      throw new Error(
        `Node ${document.nodeId} not found in file ${file.fileKey} (${file.name})`
      );
    }

    const blocks = collectBlocks(node.document, {
      fileKey: file.fileKey,
      headingLevels: headingLevelsFor(config, file),
    });

    const previous = readFrontmatter(document.output);
    const imagePaths = await exportImages(blocks, {
      client,
      fileKey: file.fileKey,
      imageDir: document.imageDir,
      markdownPath: document.output,
      format: config.imageExport.format,
      scale: config.imageExport.scale,
      version: target.id,
      // Same version renders identically; skip the slow re-export (delete the folder to force it)
      reuseExisting: previous?.figmaVersion === target.id,
    });

    const markdown = renderMarkdown(blocks, {
      imagePaths,
      frontmatter: {
        id: document.id,
        title: document.title,
        category: document.category,
        importNames: document.importNames,
        package: document.importNames?.length ? PACKAGE_NAME : undefined,
        keywords: document.keywords,
        figmaFile: file.name,
        figmaProject: file.project,
        figmaFileKey: file.fileKey,
        figmaNodeId: document.nodeId,
        figmaVersion: target.id,
        figmaVersionLabel: target.label,
        figmaVersionCreatedAt: target.createdAt,
        syncedAt: new Date().toISOString(),
        sourceUrl: figmaNodeUrl(file.fileKey, document.nodeId),
      },
    });

    const existing = await readFile(document.output, 'utf8').catch(
      () => undefined
    );
    if (existing && withoutSyncedAt(existing) === withoutSyncedAt(markdown)) {
      console.log(
        `  ${document.output} unchanged (syncedAt ${previous?.syncedAt})`
      );
      continue;
    }

    await mkdir(dirname(document.output), { recursive: true });
    await writeFile(document.output, markdown);
    console.log(
      `  wrote ${document.output} (${blocks.length} blocks, ${imagePaths.size} images)`
    );
  }

  await writeIndex(config);
}

main().catch((error: unknown) => {
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
});
