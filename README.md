# stihl-design-system-figma-sync

Technical spike (DS-1524): extract STIHL Design System documentation from Figma into Markdown files, keep them in sync with Figma, and prepare them as a source for an MCP server.

Scope of the spike: a single component (Accordion).

- Implementation plan: [PLAN.md](PLAN.md)
- Findings and next steps: [FINDINGS.md](FINDINGS.md)
- Decisions: [change detection](docs/decisions/001-change-detection.md), [image handling](docs/decisions/002-image-handling.md), [Markdown structure for agents](docs/decisions/003-markdown-structure.md), [MCP hosting](docs/decisions/004-mcp-hosting.md), [visual review](docs/decisions/005-visual-review.md)
- Design review of changed images: https://design-review.stihl-design-system.workers.dev (see [Design review](#design-review))
- Generated documentation: start at [docs/index.md](docs/index.md)
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
| `npm run review -- --base <commit>`    | Compare the documentation images of two commits and write `.tmp/review.json`; `--publish` creates the review |
| `npm run review:dev`, `review:build`   | Run or build the review page (see [Design review](#design-review))                                           |
| `npm run test:unit`                    | Unit and snapshot tests (no token needed)                                                                    |
| `npm run typecheck`, `lint`, `format`  | Tooling mirrors the main design system repository                                                            |

Output: `docs/<category>/<id>.md` (for example `docs/components/accordion.md`) with frontmatter (`importNames`, `keywords`, `figmaFile`, `figmaVersion`, `figmaVersionLabel`, `sourceUrl`, ...), images in `docs/<category>/<id>/*.png`, and `docs/index.md` as the generated catalogue of all documents and their chapters. The categories mirror the four projects of the Figma team "Design System": `foundations/` (01. Fundamentals), `components/` (02. Core Components), `patterns/` (03. Platform Libraries), `guidelines/` (04. Guidelines, Onboarding, Processes). Nothing under those folders or `docs/index.md` is edited by hand. The structure is explained in [docs/decisions/003-markdown-structure.md](docs/decisions/003-markdown-structure.md).

[components.config.json](components.config.json) lists the Figma files (`sources`, one per library file) and the documented pages (`documents`, each with `source`, `category`, `nodeId`, optional `importNames` and `keywords`). Adding a page is one config entry; output paths are derived from category and id.

Designers publish documentation by saving a named version in Figma (File > Save to version history). Unlabelled autosave versions are ignored.

## How it works

1. `src/figma/client.ts` wraps the REST API (`X-Figma-Token`, retry on 429, 5xx and network errors) and resolves the latest named version per file from `/versions`.
2. `src/extract/collectBlocks.ts` walks the page node tree in reading order and produces `heading | paragraph | list | image | note` blocks. Headings come from font size plus bold weight, lists from `lineTypes`, links from `hyperlink` styles, images from frames named `Frame For Specs`, notes from `notification` instances (designers' callouts). Component definitions, UI instances and loose canvas text are skipped.
3. `src/images/exportImages.ts` exports the image nodes as PNG in batches, pinned to the same version, and downloads the temporary URLs immediately. Images of an unchanged version are reused instead of re-rendered (delete the image folder to force a re-export).
4. `src/extract/figureFacts.ts` reads what each exported board contains from its layers (labels, measurements, callouts, component variants, Do/Don't chip) and `src/images/captionImages.ts` turns that plus a vision model (Workers AI, `CLOUDFLARE_ACCOUNT_ID` and `CLOUDFLARE_API_TOKEN` with Workers AI access, or any OpenAI compatible endpoint via `CAPTION_API_URL`, `CAPTION_API_KEY`, `CAPTION_MODEL`) into a caption line under every image. Captions are cached per image content in `captions.json` next to the images; without credentials the structural facts are rendered alone. See the addendum in [docs/decisions/002-image-handling.md](docs/decisions/002-image-handling.md).
5. `src/markdown/renderMarkdown.ts` renders the blocks and frontmatter and closes gaps in the heading hierarchy (Figma often jumps from H2 to H4). `syncedAt` only changes when the content changes, so a sync without Figma changes creates no diff.
6. `src/markdown/renderIndex.ts` rebuilds `docs/index.md` from all generated documents: conventions for agents, one entry per document with code component, keywords, Figma version and a linked H2/H3 outline.
7. `.github/workflows/sync.yml` polls every 30 minutes and opens a pull request with regenerated files when any source file has a new named version. While that pull request is open and was generated from the same commit on `main` and the same Figma versions, later runs skip the sync. `.github/workflows/captions.yml` runs daily with `--pinned` (stays on the synced versions) and describes images the Workers AI quota did not cover yet.

## Design review

After a Figma documentation release, Design checks on https://design-review.stihl-design-system.workers.dev which images changed and whether every change was intended. The page asks for the shared team login. [docs/decisions/005-visual-review.md](docs/decisions/005-visual-review.md) explains the choices.

1. `.github/workflows/review.yml` runs when a push to `main` changes a PNG under `docs/`. `npm run review` compares the commit before the push with the new one: images are matched by document and Figma node id (not by file name, so a renamed section is not reported as removed and added), compared pixel by pixel and classified as changed, added, removed or renamed. Without a visible change no review is created.
2. The result is published to the review page, a Cloudflare Worker (`review/`) that stores reviews and decisions in a D1 database. Images are not copied: the page reads both versions from the two commits on GitHub.
3. On the page every image can be compared side by side, with a swipe handle, as onion skin or as diff only. "Highlight diff" colours the changed pixels. Every image links to its node in Figma at the new and at the previous version. Each change is accepted or rejected with a comment; finishing the review closes it as approved or with changes requested.
4. The page announces a new review and its result through a webhook. `/latest` always leads to the newest review.

A review for any two commits: run the "Design review" workflow manually with `base` and `head`, or locally `npm run review -- --base <commit> --head <commit> --publish --url <page>` with `REVIEW_PUBLISH_TOKEN` set.

### Development

`review/app/` is a React app built with `@stihl-design-system/components`, `review/src/` the Worker, `review/shared/` the code both use (manifest types, pixel comparison).

```
npx wrangler d1 migrations apply design-review --local -c review/wrangler.jsonc
npm run review:build && npx wrangler dev -c review/wrangler.jsonc --port 8788
npm run review:dev
```

The second command serves the built page with API and images on port 8788, the third starts Vite with hot reload and proxies API and images to it. Local secrets go into `review/.dev.vars` (`REVIEW_PASSWORD`, `REVIEW_PUBLISH_TOKEN`; not committed).

### Deployment and secrets

`.github/workflows/deploy-review.yml` applies the database migrations and deploys on every change under `review/`. The token in `CLOUDFLARE_API_TOKEN` needs the D1 edit permission for that.

| Secret                 | Where             | Purpose                                                    |
| ---------------------- | ----------------- | ---------------------------------------------------------- |
| `REVIEW_PASSWORD`      | Worker            | Password of the shared login (user `designsystem`)         |
| `REVIEW_PUBLISH_TOKEN` | Worker and GitHub | Lets the workflow create reviews; the shared login cannot  |
| `NOTIFY_WEBHOOK_URL`   | Worker            | Power Automate webhook; without it no notification is sent |

Worker secrets are set with `npx wrangler secret put <NAME> -c review/wrangler.jsonc`.

### Notification in Teams and by mail

A Power Automate flow posts to the team chat and sends the mail; the Worker only calls its webhook. Setup, once, by a member of the chat:

1. Create a flow with the trigger "When a Teams webhook request is received" (anyone can trigger).
2. Add "Post card in a chat or channel" (post in: group chat) with the card `attachments[0].content` of the request body.
3. Add "Send an email (V2)" to design.system@stihl.de with `subject` as subject and `html` as body.
4. Store the URL of the trigger: `npx wrangler secret put NOTIFY_WEBHOOK_URL -c review/wrangler.jsonc`.

The request body also carries `event` (`review_created` or `review_finished`), `text`, `url` and `latestUrl`. Until the webhook exists, the workflow comments the link to the review on the merged sync pull request and writes it to the workflow summary.
