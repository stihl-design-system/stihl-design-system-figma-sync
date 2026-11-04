import {
  cpSync,
  existsSync,
  mkdirSync,
  readdirSync,
  readFileSync,
  rmSync,
  writeFileSync,
} from 'node:fs';
import { basename, join, posix } from 'node:path';
import { parse } from 'yaml';
import {
  CATEGORIES,
  type ContentBundle,
  type ContentDocument,
} from '../../mcp/src/content.ts';
import { renderLandingPage, renderLlmsTxt } from '../../mcp/src/landing.ts';
import { CATEGORY_DIRS, loadConfig } from '../config.ts';
import { stripFrontmatter } from '../markdown/headings.ts';
import type { Frontmatter } from '../markdown/renderMarkdown.ts';

export const DEFAULT_PUBLIC_ORIGIN =
  'https://design-docs.stihl-design-system.workers.dev';
const OUTPUT_DIR = 'mcp/public';

export function toContentDocument(
  frontmatter: Frontmatter,
  markdown: string,
  path: string
): ContentDocument {
  const body = stripFrontmatter(markdown)
    .trim()
    .replace(/^# .+\n+/, '')
    .trim();
  return {
    id: frontmatter.id,
    title: frontmatter.title,
    category: frontmatter.category,
    importNames: frontmatter.importNames ?? [],
    ...(frontmatter.package ? { package: frontmatter.package } : {}),
    keywords: frontmatter.keywords ?? [],
    path,
    sourceUrl: frontmatter.sourceUrl,
    figmaFile: frontmatter.figmaFile,
    figmaProject: frontmatter.figmaProject,
    figmaVersionLabel: frontmatter.figmaVersionLabel,
    figmaVersionCreatedAt: frontmatter.figmaVersionCreatedAt,
    syncedAt: frontmatter.syncedAt,
    markdown: body,
  };
}

function readDocuments(docsDir: string): ContentDocument[] {
  const documents: ContentDocument[] = [];
  for (const category of CATEGORIES) {
    const dir = join(docsDir, CATEGORY_DIRS[category]);
    if (!existsSync(dir)) {
      continue;
    }
    for (const file of readdirSync(dir).filter((f) => f.endsWith('.md'))) {
      const markdown = readFileSync(join(dir, file), 'utf8');
      const match = markdown.match(/^---\n([\s\S]*?)\n---\n/);
      if (!match?.[1]) {
        throw new Error(`${join(dir, file)} has no frontmatter`);
      }
      const frontmatter = parse(match[1]) as Frontmatter;
      documents.push(
        toContentDocument(
          frontmatter,
          markdown,
          posix.join(CATEGORY_DIRS[category], file)
        )
      );
    }
  }
  return documents;
}

function main(): void {
  const config = loadConfig();
  const origin = process.env.MCP_PUBLIC_ORIGIN ?? DEFAULT_PUBLIC_ORIGIN;
  const documents = readDocuments(config.docsDir);
  if (documents.length === 0) {
    throw new Error(
      `No documents in ${config.docsDir}; run npm run sync first`
    );
  }
  const bundle: ContentBundle = {
    generatedAt: new Date().toISOString(),
    documents,
  };

  rmSync(OUTPUT_DIR, { recursive: true, force: true });
  mkdirSync(OUTPUT_DIR, { recursive: true });
  let images = 0;
  for (const category of CATEGORIES) {
    const dir = join(config.docsDir, CATEGORY_DIRS[category]);
    if (!existsSync(dir)) {
      continue;
    }
    cpSync(dir, join(OUTPUT_DIR, CATEGORY_DIRS[category]), {
      recursive: true,
      filter: (source) => {
        if (/\.(png|svg)$/.test(source)) {
          images++;
        }
        return (
          !basename(source).startsWith('.') &&
          basename(source) !== 'captions.json'
        );
      },
    });
  }
  if (existsSync(config.indexOutput)) {
    cpSync(config.indexOutput, join(OUTPUT_DIR, 'index.md'));
  }
  writeFileSync(join(OUTPUT_DIR, 'content.json'), JSON.stringify(bundle));
  writeFileSync(
    join(OUTPUT_DIR, 'index.html'),
    renderLandingPage(bundle, origin)
  );
  writeFileSync(join(OUTPUT_DIR, 'llms.txt'), renderLlmsTxt(bundle, origin));

  console.log(
    `Built ${OUTPUT_DIR}: ${documents.length} documents, ${images} images, origin ${origin}`
  );
}

if (process.argv[1]?.endsWith('buildMcpContent.ts')) {
  main();
}
