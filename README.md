# stihl-design-system-figma-sync

Technical spike (DS-1524): extract STIHL Design System documentation from Figma into Markdown files, keep them in sync with Figma, and prepare them as a source for an MCP server.

Scope of the spike: a single component (Accordion).

- Implementation plan: [PLAN.md](PLAN.md)
- Findings and next steps: [FINDINGS.md](FINDINGS.md)
- Decisions: [change detection](docs/decisions/001-change-detection.md), [image handling](docs/decisions/002-image-handling.md), [Markdown structure for agents](docs/decisions/003-markdown-structure.md), [MCP hosting](docs/decisions/004-mcp-hosting.md)
- Generated documentation: start at [docs/index.md](docs/index.md)
- MCP server for consumers: <https://design-docs.stihl-design-system.workers.dev> (endpoint `/mcp`)
- Jira: [DS-1524](https://andreasstihl.atlassian.net/browse/DS-1524)

## Usage

Requires Node 24 (`.nvmrc`) and a Figma personal access token with `file_content:read` and `file_metadata:read` in `.env`:

```
FIGMA_TOKEN=figd_...
```

| Command                                | Purpose                                                                                                      |
| -------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| `npm run sync`                         | Regenerate Markdown and PNGs from the latest named Figma version                                             |
| `npm run sync -- --document accordion` | Regenerate a single document                                                                                 |
| `npm run sync -- --latest`             | Use the current (unpublished) file state instead of the latest named version                                 |
| `npm run check`                        | Compare the latest named version of every Figma file with the frontmatter; exit 1 when outdated (used by CI) |
| `npm run fetch:fixture`                | Refresh the pruned nodes fixture in `test/fixtures/` used by the unit tests                                  |
| `npm run test:unit`                    | Unit and snapshot tests (no token needed)                                                                    |
| `npm run typecheck`, `lint`, `format`  | Tooling mirrors the main design system repository                                                            |
| `npm run mcp:build`                    | Build the MCP server assets (`mcp/public/`: content.json, Markdown, images, landing page, llms.txt)          |
| `npm run mcp:dev`                      | Run the MCP server locally on <http://localhost:8787/mcp> (`mcp/smoke.sh` exercises it)                      |
| `npm run mcp:deploy`                   | Deploy to Cloudflare by hand (needs `npx wrangler login`); CI deploys on every push to `main`                |

Output: `docs/<category>/<id>.md` (for example `docs/components/accordion.md`) with frontmatter (`importNames`, `keywords`, `figmaFile`, `figmaVersion`, `figmaVersionLabel`, `sourceUrl`, ...), images in `docs/<category>/<id>/*.png`, and `docs/index.md` as the generated catalogue of all documents and their chapters. The categories mirror the four projects of the Figma team "Design System": `foundations/` (01. Fundamentals), `components/` (02. Core Components), `patterns/` (03. Platform Libraries), `guidelines/` (04. Guidelines, Onboarding, Processes). Nothing under those folders or `docs/index.md` is edited by hand. The structure is explained in [docs/decisions/003-markdown-structure.md](docs/decisions/003-markdown-structure.md).

[components.config.json](components.config.json) lists the Figma files (`sources`, one per library file) and the documented pages (`documents`, each with `source`, `category`, `nodeId`, optional `importNames` and `keywords`). Adding a page is one config entry; output paths are derived from category and id.

Designers publish documentation by saving a named version in Figma (File > Save to version history). Unlabelled autosave versions are ignored.

## How it works

1. `src/figma/client.ts` wraps the REST API (`X-Figma-Token`, retry on 429, 5xx and network errors) and resolves the latest named version per file from `/versions`.
2. `src/extract/collectBlocks.ts` walks the page node tree in reading order and produces `heading | paragraph | list | image | note` blocks. Headings come from font size plus bold weight, lists from `lineTypes`, links from `hyperlink` styles, images from frames named `Frame For Specs`, notes from `notification` instances (designers' callouts). Component definitions, UI instances and loose canvas text are skipped.
3. `src/images/exportImages.ts` exports the image nodes as PNG in batches, pinned to the same version, and downloads the temporary URLs immediately. Images of an unchanged version are reused instead of re-rendered (delete the image folder to force a re-export).
4. `src/markdown/renderMarkdown.ts` renders the blocks and frontmatter and closes gaps in the heading hierarchy (Figma often jumps from H2 to H4). `syncedAt` only changes when the content changes, so a sync without Figma changes creates no diff.
5. `src/markdown/renderIndex.ts` rebuilds `docs/index.md` from all generated documents: conventions for agents, one entry per document with code component, keywords, Figma version and a linked H2/H3 outline.
6. `.github/workflows/sync.yml` polls every 30 minutes and opens a pull request with regenerated files when any source file has a new named version.

## MCP server

`mcp/` is a Cloudflare Worker (free plan) that serves the generated documentation to AI assistants, separate from the code documentation in Storybook. Consumers add `https://design-docs.stihl-design-system.workers.dev/mcp` to Claude, ChatGPT, Copilot Studio, VS Code, Cursor or any other MCP client; the landing page at `/` has the instructions. Tools: `list_documents`, `get_document` (whole page or one chapter), `search_documentation`, `get_image`; every document is also an MCP resource (`stihl-ds://components/button`) and a plain URL (`/components/button.md`, images next to it). `src/cli/buildMcpContent.ts` prepares the assets, `mcp/src/worker.ts` is the entry point, [docs/decisions/004-mcp-hosting.md](docs/decisions/004-mcp-hosting.md) explains the hosting choice. `.github/workflows/deploy-mcp.yml` deploys on every push to `main`, so a merged sync pull request is live right away.
