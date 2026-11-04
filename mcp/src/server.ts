import {
  McpServer,
  ResourceTemplate,
} from '@modelcontextprotocol/sdk/server/mcp.js';
import { CfWorkerJsonSchemaValidator } from '@modelcontextprotocol/sdk/validation/cfworker';
import { z } from 'zod';
import type { DocCategory } from '../../src/config.ts';
import {
  CATEGORIES,
  CATEGORY_LABELS,
  absolutizeImages,
  documentUrl,
  findChapter,
  findDocument,
  resourceUri,
  sortedDocuments,
  splitChapters,
  summarize,
  type ContentBundle,
  type ContentDocument,
} from './content.ts';
import { search } from './search.ts';

export interface ServerContext {
  bundle: ContentBundle;
  /** Public origin the images and Markdown files are served from, e.g. https://design-docs.example.workers.dev */
  origin: string;
  /** Loads a static asset by path (`components/button/x.png`); undefined when it does not exist */
  loadAsset: (path: string) => Promise<ArrayBuffer | undefined>;
}

export const SERVER_INFO = {
  name: 'stihl-design-system-design-docs',
  title: 'STIHL Design System: Design Documentation',
  version: '0.1.0',
};

const INSTRUCTIONS = `Design documentation of the STIHL Design System, synced from the designers' Figma libraries.

It covers design guidance for designers and product people: foundations (typography, iconography, grid, spacing, styles), components (anatomy, sizing, variants, content rules, do's and don'ts, behaviour, examples), patterns and guidelines. It does NOT contain code, props or API details; for those use the Storybook MCP server of @stihl-design-system/components.

Start with search_documentation for a question, list_documents to browse, get_document for a whole page or one chapter. Every image is followed by a "Figure:" line that describes what it shows (measurements, variants, callouts, do/don't verdict); rely on that first and pass the image URL to get_image only when you need to see a spec or example yourself. Always cite the document (and its Figma source URL) you took guidance from.`;

const categorySchema = z
  .enum(CATEGORIES as [DocCategory, ...DocCategory[]])
  .describe(
    'foundation (typography, grid, spacing, styles), component, pattern, guideline'
  );

function documentHeader(doc: ContentDocument, origin: string): string {
  const lines = [
    `# ${doc.title}`,
    '',
    `- Category: ${CATEGORY_LABELS[doc.category]}`,
  ];
  if (doc.importNames.length > 0) {
    lines.push(
      `- Code component: ${doc.importNames.map((n) => `\`${n}\``).join(', ')}${doc.package ? ` from \`${doc.package}\`` : ''}`
    );
  }
  lines.push(
    `- Figma source: ${doc.sourceUrl} (${doc.figmaFile}, version "${doc.figmaVersionLabel || 'unpublished'}", ${doc.figmaVersionCreatedAt.slice(0, 10)})`,
    `- Markdown: ${documentUrl(doc, origin)}`,
    `- Chapters: ${splitChapters(doc.markdown)
      .map((c) => c.title)
      .join(' | ')}`
  );
  return lines.join('\n');
}

export function renderDocument(
  doc: ContentDocument,
  origin: string,
  chapter?: string
): { text: string; isError?: boolean } {
  const header = documentHeader(doc, origin);
  if (!chapter) {
    return {
      text: `${header}\n\n${absolutizeImages(doc.markdown, doc, origin)}`,
    };
  }
  const chapters = splitChapters(doc.markdown);
  const found = findChapter(chapters, chapter);
  if (!found) {
    return {
      text: `Document "${doc.title}" has no chapter "${chapter}". Available chapters: ${chapters.map((c) => c.title).join(', ')}.`,
      isError: true,
    };
  }
  return {
    text: `${header}\n\n${absolutizeImages(found.markdown, doc, origin)}`,
  };
}

export function renderCatalogue(
  bundle: ContentBundle,
  origin: string,
  category?: DocCategory
): string {
  const docs = sortedDocuments(bundle, category);
  const out: string[] = [
    `# STIHL Design System design documentation (${docs.length} documents)`,
    '',
    `Synced from Figma on ${bundle.generatedAt.slice(0, 10)}. Use get_document with the id to read a page.`,
  ];
  let currentCategory: DocCategory | undefined;
  for (const doc of docs) {
    if (doc.category !== currentCategory) {
      currentCategory = doc.category;
      out.push('', `## ${CATEGORY_LABELS[doc.category]}`, '');
    }
    const parts = [`- **${doc.title}** (id: \`${doc.id}\`)`];
    const summary = summarize(doc);
    if (summary) {
      parts.push(`: ${summary}`);
    }
    const meta: string[] = [];
    if (doc.importNames.length > 0) {
      meta.push(`code: ${doc.importNames.join(', ')}`);
    }
    if (doc.keywords.length > 0) {
      meta.push(`keywords: ${doc.keywords.join(', ')}`);
    }
    const chapters = splitChapters(doc.markdown).map((c) => c.title);
    meta.push(`chapters: ${chapters.join(', ')}`);
    out.push(`${parts.join('')}  \n  ${meta.join('; ')}`);
  }
  out.push('', `Markdown files and images: ${origin}/`);
  return out.join('\n');
}

function bytesToBase64(buffer: ArrayBuffer): string {
  const bytes = new Uint8Array(buffer);
  let binary = '';
  const chunk = 0x8000;
  for (let i = 0; i < bytes.length; i += chunk) {
    binary += String.fromCharCode(...bytes.subarray(i, i + chunk));
  }
  return btoa(binary);
}

/** Accepts an absolute URL of this host or an asset path and returns the normalised asset path */
export function imagePath(input: string, origin: string): string | undefined {
  let path = input.trim();
  if (/^https?:\/\//i.test(path)) {
    const url = new URL(path);
    if (url.origin !== origin) {
      return undefined;
    }
    path = url.pathname;
  }
  path = decodeURIComponent(path).replace(/^\/+/, '');
  if (path.includes('..') || !/\.(png|svg)$/i.test(path)) {
    return undefined;
  }
  return path;
}

export function createServer(context: ServerContext): McpServer {
  const { bundle, origin } = context;
  const server = new McpServer(SERVER_INFO, {
    instructions: INSTRUCTIONS,
    jsonSchemaValidator: new CfWorkerJsonSchemaValidator(),
  });
  const readOnly = { readOnlyHint: true, openWorldHint: false } as const;

  server.registerTool(
    'list_documents',
    {
      title: 'List design documentation',
      description:
        'Catalogue of all documented foundations, components, patterns and guidelines with id, short definition, keywords and chapter titles. Use it to find the right id for get_document.',
      inputSchema: { category: categorySchema.optional() },
      annotations: readOnly,
    },
    ({ category }) => ({
      content: [
        { type: 'text', text: renderCatalogue(bundle, origin, category) },
      ],
    })
  );

  server.registerTool(
    'get_document',
    {
      title: 'Read a documentation page',
      description:
        "Full design documentation of one page as Markdown (anatomy, variants, sizing, content rules, do/don't, behaviour, examples) with absolute image URLs. Pass a chapter title to get only that chapter when the page is long.",
      inputSchema: {
        id: z
          .string()
          .describe(
            'Document id from list_documents (e.g. "button"), or a title or code component name (e.g. "DSButton")'
          ),
        chapter: z
          .string()
          .optional()
          .describe(
            'Chapter title or slug, e.g. "Formatting and Construction" or "content"'
          ),
      },
      annotations: readOnly,
    },
    ({ id, chapter }) => {
      const doc = findDocument(bundle, id);
      if (!doc) {
        return {
          content: [
            {
              type: 'text',
              text: `No document "${id}". Known ids: ${sortedDocuments(bundle)
                .map((d) => d.id)
                .join(', ')}.`,
            },
          ],
          isError: true,
        };
      }
      const rendered = renderDocument(doc, origin, chapter);
      return {
        content: [{ type: 'text', text: rendered.text }],
        ...(rendered.isError ? { isError: true } : {}),
      };
    }
  );

  server.registerTool(
    'search_documentation',
    {
      title: 'Search design documentation',
      description:
        'Finds chapters across all documents that mention the query terms (e.g. "button loading state", "minimum touch target", "error message tone"). Returns document id, chapter and a snippet; follow up with get_document.',
      inputSchema: {
        query: z.string().min(2).describe('Words to look for, any order'),
        category: categorySchema.optional(),
        limit: z
          .number()
          .int()
          .min(1)
          .max(30)
          .optional()
          .describe('Default 10'),
      },
      annotations: readOnly,
    },
    ({ query, category, limit }) => {
      const hits = search(bundle, query, { category, limit });
      if (hits.length === 0) {
        return {
          content: [
            {
              type: 'text',
              text: `No chapter matches "${query}". Try other words or list_documents to browse.`,
            },
          ],
        };
      }
      const lines = hits.map(
        (hit, index) =>
          `${index + 1}. **${hit.document.title}** > ${hit.chapter} (id: \`${hit.document.id}\`, chapter: \`${hit.slug}\`)${hit.snippet ? `\n   ${hit.snippet}` : ''}`
      );
      return {
        content: [
          {
            type: 'text',
            text: `${hits.length} hits for "${query}":\n\n${lines.join('\n')}`,
          },
        ],
      };
    }
  );

  server.registerTool(
    'get_image',
    {
      title: 'View a documentation image',
      description:
        "Returns one of the images referenced in a document (spec boards, anatomy, do/don't examples) so it can be looked at. Pass the image URL or path exactly as it appears in the Markdown.",
      inputSchema: {
        image: z
          .string()
          .describe(
            'Image URL from get_document, or its path such as components/button/button-168-3988.png'
          ),
      },
      annotations: readOnly,
    },
    async ({ image }) => {
      const path = imagePath(image, origin);
      const buffer = path ? await context.loadAsset(path) : undefined;
      if (!path || !buffer) {
        return {
          content: [
            {
              type: 'text',
              text: `No image at "${image}". Use an image URL or path from get_document.`,
            },
          ],
          isError: true,
        };
      }
      return {
        content: [
          {
            type: 'image',
            data: bytesToBase64(buffer),
            mimeType: path.toLowerCase().endsWith('.svg')
              ? 'image/svg+xml'
              : 'image/png',
          },
        ],
      };
    }
  );

  server.registerResource(
    'catalogue',
    'stihl-ds://index',
    {
      title: 'Design documentation catalogue',
      description:
        'All documented foundations, components, patterns and guidelines',
      mimeType: 'text/markdown',
    },
    (uri) => ({
      contents: [
        {
          uri: uri.href,
          mimeType: 'text/markdown',
          text: renderCatalogue(bundle, origin),
        },
      ],
    })
  );

  server.registerResource(
    'document',
    new ResourceTemplate('stihl-ds://{category}/{id}', {
      list: () => ({
        resources: sortedDocuments(bundle).map((doc) => ({
          uri: resourceUri(doc),
          name: doc.id,
          title: doc.title,
          description: summarize(doc),
          mimeType: 'text/markdown',
        })),
      }),
    }),
    {
      title: 'Design documentation page',
      description:
        'One documentation page as Markdown with absolute image URLs',
      mimeType: 'text/markdown',
    },
    (uri, { id }) => {
      const doc = findDocument(bundle, String(id));
      if (!doc) {
        throw new Error(`Unknown document ${uri.href}`);
      }
      return {
        contents: [
          {
            uri: uri.href,
            mimeType: 'text/markdown',
            text: renderDocument(doc, origin).text,
          },
        ],
      };
    }
  );

  return server;
}
