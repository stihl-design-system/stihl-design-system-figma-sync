# stihl-design-system-figma-sync

Technical spike (DS-1524): extract STIHL Design System documentation from Figma into Markdown files, keep them in sync with Figma, and prepare them as a source for an MCP server.

Scope of the spike: a single component (Accordion).

- Implementation plan: [PLAN.md](PLAN.md)
- Findings and next steps: [FINDINGS.md](FINDINGS.md)
- Decisions: [change detection](docs/decisions/001-change-detection.md), [image handling](docs/decisions/002-image-handling.md), [Markdown structure for agents](docs/decisions/003-markdown-structure.md)
- Generated documentation: start at [docs/index.md](docs/index.md)
- Jira: [DS-1524](https://andreasstihl.atlassian.net/browse/DS-1524)

## Usage

Requires Node 24 (`.nvmrc`) and a Figma personal access token with `file_content:read` and `file_metadata:read` in `.env`:

```
FIGMA_TOKEN=figd_...
```

| Command                                 | Purpose                                                                                        |
| --------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `npm run sync`                          | Regenerate Markdown and PNGs from the latest named Figma version                               |
| `npm run sync -- --component accordion` | Regenerate a single component                                                                  |
| `npm run sync -- --latest`              | Use the current (unpublished) file state instead of the latest named version                   |
| `npm run check`                         | Compare the latest named Figma version with the frontmatter; exit 1 when outdated (used by CI) |
| `npm run fetch:fixture`                 | Refresh the pruned nodes fixture in `test/fixtures/` used by the unit tests                    |
| `npm run test:unit`                     | Unit and snapshot tests (no token needed)                                                      |
| `npm run typecheck`, `lint`, `format`   | Tooling mirrors the main design system repository                                              |

Output: `docs/<category>/<id>.md` (for example `docs/components/accordion.md`) with frontmatter (`importName`, `keywords`, `figmaVersion`, `figmaVersionLabel`, `sourceUrl`, ...), images in `docs/<category>/<id>/*.png`, and `docs/index.md` as the generated catalogue of all documents and their chapters. Nothing under `docs/components/` or `docs/index.md` is edited by hand. The structure is explained in [docs/decisions/003-markdown-structure.md](docs/decisions/003-markdown-structure.md).

Designers publish documentation by saving a named version in Figma (File > Save to version history). Unlabelled autosave versions are ignored.

## How it works

1. `src/figma/client.ts` wraps the REST API (`X-Figma-Token`, retry on 429) and resolves the latest named version from `/versions`.
2. `src/extract/collectBlocks.ts` walks the page node tree in reading order and produces `heading | paragraph | list | image` blocks. Headings come from font size, lists from `lineTypes`, links from `hyperlink` styles, images from frames named `Frame For Specs`.
3. `src/images/exportImages.ts` exports the image nodes as PNG, pinned to the same version, and downloads the temporary URLs immediately.
4. `src/markdown/renderMarkdown.ts` renders the blocks and frontmatter and closes gaps in the heading hierarchy (Figma often jumps from H2 to H4). `syncedAt` only changes when the content changes, so a sync without Figma changes creates no diff.
5. `src/markdown/renderIndex.ts` rebuilds `docs/index.md` from all generated documents: conventions for agents, one entry per document with code component, keywords, Figma version and a linked H2/H3 outline.
6. `.github/workflows/sync.yml` polls every 30 minutes and opens a pull request with regenerated files when a new named version exists.
