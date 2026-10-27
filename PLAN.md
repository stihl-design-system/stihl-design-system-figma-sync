# Implementation plan: Figma documentation to Markdown (DS-1524)

Ticket: [DS-1524](https://andreasstihl.atlassian.net/browse/DS-1524), "Dev | Web | Technical spike: extract Design System documentation from Figma to Markdown as MCP source"

## Goal

Proof of concept that the Design System documentation can be extracted from Figma into Markdown files, kept in sync with Figma, and later exposed through an MCP server for consumer designers and consumer developers. The spike covers one component: **Accordion**.

## Summary

A TypeScript CLI (`npm run sync`) reads the Accordion documentation via the Figma REST API, renders it to `docs/components/accordion.md` (frontmatter plus stable headings) and exports referenced images as PNG next to the Markdown. A GitHub Actions workflow detects Figma changes (polling as baseline, webhook relay as prototype) and opens a pull request with the regenerated files. Tooling mirrors the main Design System repository (Node 24.9.0, npm, tsx, vitest, Prettier config).

### Research findings so far

- The ticket note "webhooks require Organization/Enterprise and are registered on team level" is outdated. Webhooks V2 support a **file context** (`Can edit` on the file is sufficient) and are available on the Professional plan as well. STIHL is on the Organization plan.
- `FILE_UPDATE` fires about 30 minutes after editing inactivity. `FILE_VERSION_UPDATE` fires when a named version is created (controlled "publish" trigger).
- Figma cannot send custom HTTP headers. GitHub `repository_dispatch` requires an `Authorization` header, so a small relay (serverless function) is needed between Figma and GitHub.
- The Figma Images endpoint returns temporary URLs; exports must be downloaded immediately.
- The main repository has no Figma REST usage yet (color tokens come from a manual plugin export). It does have an MCP endpoint (`https://designsystem.stihl.de/mcp`, `@storybook/addon-mcp`) and an `llms.txt` generator (`packages/components/scripts/generateLlmsTxt.ts`) that serve as reference for agent-facing output.

## Decisions

- Repository: `stihl-design-system/stihl-design-system-figma-sync` (private), local checkout as sibling of `stihl-design-system`.
- Regenerated Markdown is delivered via pull request (`peter-evans/create-pull-request`), not committed directly to `main`.
- Figma types come from `@figma/rest-api-spec`; no custom type set.
- Only Accordion was extracted in the first iteration, but the mapping is config driven (`sources` = Figma files, `documents` = pages with category and node id) so further pages only need config entries. All documented Core Components pages followed in the second iteration; the other three Figma projects (Fundamentals, Platform Libraries, Guidelines) are configured the same way.
- Markdown structure is designed freely (frontmatter plus stable headings). If a sample `Accordion.md` is provided and approved, only the renderer is adapted.
- Out of scope: MCP server implementation, integration into the main repository, OAuth app.

## Phases

### Phase 0: Prerequisites (manual, blocks everything else)

1. Identify the Figma documentation file: file key from the URL (`figma.com/design/<KEY>/...`) and the Accordion page or section node id (`?node-id=123-456` becomes `123:456`). Store both in `components.config.json`.
2. Create a Figma personal access token (scopes `file_content:read`, `file_metadata:read`, later `webhooks:write`). Locally as `FIGMA_TOKEN` in `.env` (gitignored), on GitHub as repository secret. Document the PAT vs. OAuth decision in `FINDINGS.md` (recommendation for the spike: PAT of a service or team account).
3. Repository exists on GitHub (done).

### Phase 1: Scaffold (can run in parallel with Phase 0)

4. `package.json` (ESM, `type: module`), `.nvmrc` = 24.9.0, `tsconfig.json`, `.prettierrc.json` copied from the main repository, minimal ESLint flat config, `vitest.config.ts`, `.gitignore` (`.env`, `node_modules`, `.tmp`). Dependencies: `typescript`, `tsx`, `vitest`, `prettier`, `eslint`, `@figma/rest-api-spec`, `yaml`. No HTTP client, native Node 24 `fetch`.
5. npm scripts: `sync`, `check`, `fetch:fixture`, `test:unit`, `lint`, `format`.

### Phase 2: Extraction (depends on Phase 0 and 1)

6. `src/figma/client.ts`: fetch wrapper with `X-Figma-Token`, retry on 429 (`Retry-After`). Functions `getFileMeta(key)` (`?depth=1`, returns `version`, `lastModified`), `getNodes(key, ids)`, `getImages(key, ids, format, scale)`.
7. `src/extract/collectBlocks.ts`: transform the node tree of the Accordion section into an intermediate model (`heading | paragraph | list | table | image`).
   - Reading order: auto layout child order, otherwise sort by `absoluteBoundingBox` (y, then x).
   - Headings via text style names (`file.styles[node.styles.text].name`, e.g. `Heading/H2`) with a `fontSize` threshold fallback; mapping lives in config.
   - Lists via `lineTypes` / `lineIndentations`, links via `characterStyleOverrides` plus `styleOverrideTable[].hyperlink`.
   - Tables: `TABLE` / `TABLE_CELL` nodes, fallback for frames following a naming convention.
   - Images: non-text frames and instances (do/don't examples, component visuals) become image blocks with their node id.
8. `src/markdown/renderMarkdown.ts`: blocks to Markdown. Frontmatter: `component`, `title`, `figmaFileKey`, `figmaNodeId`, `figmaVersion`, `figmaLastModified`, `syncedAt`, `sourceUrl`. Headings normalised (H1 = component, H2 from Figma below), stable section names, no HTML.
9. `src/images/exportImages.ts`: Images endpoint (PNG, scale 2; SVG optional), download temporary URLs immediately to `docs/components/accordion/<slug>-<nodeId>.png`, relative reference in Markdown, alt text from node name.
10. `src/cli/sync.ts`: `npm run sync -- --document accordion` (without flag: all documents from config), writes `docs/components/accordion.md` and rebuilds `docs/index.md`, idempotent (second run produces no diff). `src/cli/checkVersion.ts`: compares remote `version` with frontmatter, exit code 0/1 for CI.

### Phase 3: Tests (parallel to steps 8 to 10)

11. `npm run fetch:fixture` stores the real nodes response in `test/fixtures/accordion-nodes.json`. vitest tests for `collectBlocks` and `renderMarkdown` run against fixtures (no token needed), `toMatchInlineSnapshot` for the Markdown output. Cover missing styles, nested lists and links.

### Phase 4: Change detection (depends on step 10)

12. `.github/workflows/sync.yml`: triggers `schedule` (hourly), `workflow_dispatch`, `repository_dispatch` (type `figma-file-update`). Steps: `actions/setup-node@v6` with `.nvmrc`, `npm ci`, `npm run check`, on change `npm run sync`, then `peter-evans/create-pull-request` (branch `sync/accordion-<version>`, title with Figma version).
13. Webhook prototype (stretch): `relay/` with a minimal function (Cloudflare Worker or Azure Function, depending on STIHL infrastructure) that validates the `passcode` and calls `repository_dispatch`. Registration via `POST /v2/webhooks` with `context: file`, event `FILE_UPDATE` or `FILE_VERSION_UPDATE`. Local testing via ngrok.
14. `docs/decisions/001-change-detection.md`: recommendation polling as baseline (simple, no infrastructure) plus webhook via relay as accelerator; `FILE_VERSION_UPDATE` as a deliberate "publish" trigger by designers.

### Phase 5: Image decision and write-up (depends on steps 9 and 13)

15. `docs/decisions/002-image-handling.md`: export as PNG into the repository, relative paths; MCP delivery as resource URL (raw GitHub or a later static host), no inline base64.
16. `FINDINGS.md`: findings, limitations (heuristic heading detection, tables, rate limits, token ownership, expiring image URLs), next steps towards the MCP server (one file per component, `docs/` directory, relation to the existing `designsystem.stihl.de/mcp`).

## Target structure

```
components.config.json
src/
  figma/client.ts
  extract/collectBlocks.ts
  markdown/renderMarkdown.ts
  markdown/renderIndex.ts
  images/exportImages.ts
  cli/sync.ts
  cli/checkVersion.ts
test/fixtures/accordion-nodes.json
docs/
  index.md                  (generated catalogue)
  foundations/<id>.md       (01. Fundamentals)
  components/<id>.md        (02. Core Components)
  components/<id>/*.png
  patterns/<id>.md          (03. Platform Libraries)
  guidelines/<id>.md        (04. Guidelines, Onboarding, Processes)
  decisions/001-change-detection.md
  decisions/002-image-handling.md
  decisions/003-markdown-structure.md
  templates/ai-guidelines-template.md
relay/                      (stretch: webhook relay prototype)
.github/workflows/sync.yml
FINDINGS.md
```

## Verification

1. `npm run sync` twice in a row: `git status` shows no diff after the second run (reproducibility).
2. `docs/components/accordion.md` contains frontmatter with `figmaVersion` and at least one `![...](accordion/....png)`; the image exists in the repository.
3. `CI=true npm run test:unit` passes (fixture tests for blocks and Markdown).
4. `npm run check` exits 0 on the current state; after manually changing `figmaVersion` in the frontmatter it exits 1.
5. `workflow_dispatch` on GitHub opens a pull request with regenerated Markdown.
6. Stretch: create a webhook (`POST /v2/webhooks`), PING arrives at the relay, a small Figma change results in a `repository_dispatch` and a pull request within about 30 minutes.
7. `npm run lint` and the Prettier check pass.

## Acceptance criteria (from the ticket)

- [x] New repository exists
- [x] Extraction script and generated Accordion Markdown are in the repository
- [x] Extraction is reproducible (one command / CI job regenerates the file from Figma)
- [x] Documented decision on change detection (webhook vs. polling) including a working prototype (named-version polling, relay rejected)
- [x] Documented decision on image handling including at least one exported image referenced from the Accordion Markdown
- [x] Short write-up of findings, limitations and next steps towards the MCP server

## Open questions

- Which Figma file and pages contain the documentation, and who owns the Figma access token (personal token vs. OAuth app)?
- ~~Hosting for the webhook relay~~: resolved, no relay. Polling the named versions covers the use case, see `docs/decisions/001-change-detection.md`.
- ~~Trigger event~~: resolved, the latest named version is the trigger (equivalent of `FILE_VERSION_UPDATE`, without a webhook).
- Which Figma nodes count as images: heuristic by node type (`INSTANCE` / `FRAME` without text descendants) vs. a naming convention for designers (e.g. prefix `img/`).
- ~~Sample `Accordion.md` by Patrick Wiesenhuetter~~: resolved. The sample is an 18 section AI guideline that mixes Figma guidance with Storybook API knowledge, so it is the target for a curated second layer, not for extraction. The extracted layer keeps the Figma structure, see `docs/decisions/003-markdown-structure.md`.
