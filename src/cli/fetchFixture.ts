import { mkdir, writeFile } from 'node:fs/promises';
import { dirname } from 'node:path';
import type { Node } from '@figma/rest-api-spec';
import { loadConfig, selectComponents } from '../config.ts';
import { createFigmaClient, requireToken } from '../figma/client.ts';
import { loadEnv, parseArgs, resolveTargetVersion } from './shared.ts';

const IMAGE_FRAMES = ['frame for specs'];
const NODE_KEYS = [
  'id',
  'name',
  'type',
  'visible',
  'absoluteBoundingBox',
  'layoutMode',
  'layoutPositioning',
];
const TEXT_KEYS = [
  'characters',
  'characterStyleOverrides',
  'lineTypes',
  'lineIndentations',
];
const STYLE_KEYS = ['fontSize', 'fontWeight', 'hyperlink'];

type AnyNode = Record<string, unknown>;

function pick(source: AnyNode, keys: string[]): AnyNode {
  return Object.fromEntries(
    keys.filter((k) => k in source).map((k) => [k, source[k]])
  );
}

/** Keeps only what collectBlocks reads, so the fixture stays small and reviewable. */
function prune(node: AnyNode): AnyNode {
  const result = pick(node, NODE_KEYS);
  if (node.type === 'TEXT') {
    Object.assign(result, pick(node, TEXT_KEYS));
    result.style = pick((node.style as AnyNode) ?? {}, STYLE_KEYS);
    const table = (node.styleOverrideTable as Record<string, AnyNode>) ?? {};
    result.styleOverrideTable = Object.fromEntries(
      Object.entries(table).map(([k, v]) => [k, pick(v, STYLE_KEYS)])
    );
    return result;
  }
  const children = node.children as AnyNode[] | undefined;
  if (children) {
    const isImage = IMAGE_FRAMES.includes(
      String(node.name).trim().toLowerCase()
    );
    result.children = isImage ? [] : children.map(prune);
  }
  return result;
}

async function main(): Promise<void> {
  loadEnv();
  const config = loadConfig();
  const { components, latest } = parseArgs(process.argv.slice(2));
  const client = createFigmaClient(requireToken());
  const target = await resolveTargetVersion(client, config.fileKey, latest);

  for (const component of selectComponents(config, components)) {
    const response = await client.getNodes(
      config.fileKey,
      [component.nodeId],
      target.id
    );
    const node = response.nodes[component.nodeId];
    if (!node) {
      throw new Error(`Node ${component.nodeId} not found`);
    }
    const fixture = {
      name: response.name,
      version: target.id,
      versionLabel: target.label,
      versionCreatedAt: target.createdAt,
      nodes: {
        [component.nodeId]: {
          document: prune(
            node.document as unknown as AnyNode
          ) as unknown as Node,
        },
      },
    };
    const path = `test/fixtures/${component.id}-nodes.json`;
    await mkdir(dirname(path), { recursive: true });
    await writeFile(path, JSON.stringify(fixture, null, 2) + '\n');
    console.log(`wrote ${path}`);
  }
}

main().catch((error: unknown) => {
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
});
