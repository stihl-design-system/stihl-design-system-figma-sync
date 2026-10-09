# Findings: Figma documentation to Markdown (DS-1524)

## What works

- `npm run sync` turns the Accordion page of the Core Components file (`qXldpLO6gxHJNLdcXIPxYt`, node `17260:166`) into [docs/accordion.md](docs/accordion.md) with 184 blocks and 42 PNGs. The second run produces no diff (text and images).
- The documentation layout in Figma is regular enough for a rule based extraction: every board is `logo / title / divider / (sub-chapter | section)*`, every `section` is `Infos` (title, definition, optional link) plus `Frame For Specs`. The mapping is config driven ([components.config.json](components.config.json)); a second component only needs `nodeId`, `output` and `imageDir`.
- Headings, paragraphs, bold runs, hyperlinks (both node level and character level), ordered and unordered lists including nesting, and images are extracted. Hidden layers (1846 on the Accordion page) and template placeholders (`Link TO →`) are dropped.
- Change detection without any infrastructure: `npm run check` polls `GET /v1/files/:key/versions` for the newest **named** version and compares it with the frontmatter; `sync` reads nodes and images pinned to that version id (`?version=`). Designers publish by saving a named version, which they already do for component releases. See [docs/decisions/001-change-detection.md](docs/decisions/001-change-detection.md) for why the webhook relay was dropped.

## Access

- A personal access token with `file_content:read` and `file_metadata:read` is enough for extraction and image export. Reading and creating file-context webhooks worked as well, so no broader (team or org) access is required.
- Token ownership: for the spike the token belongs to a person. For production a token of a shared design system account (or an OAuth app) is needed so that the sync does not stop when someone leaves. Webhooks belong to the creating user too, same consideration.

## Limitations

- **Heading detection is heuristic.** The documentation text uses no Figma text styles (`styles.text` is empty on every documentation text node), so headings are detected by `fontSize` (64 = H2, 48 = H3, 24 = H4). Bold is detected by `fontWeight >= 600`. Both thresholds are in the config. If designers change the template typography, the mapping must follow.
- **Reading order is geometric.** Children are sorted by `absoluteBoundingBox` (y, then x). This handles side-by-side boards and absolutely positioned text, but a text that visually belongs to a column could be interleaved with a neighbour if the y coordinates are within 8 px.
- **Tables are not implemented.** The Accordion page has none. Figma exposes `TABLE` / `TABLE_CELL` nodes in the REST API, but without a real example there was nothing to test against. Flag for the next component that uses tables.
- **Line based paragraphs.** A line break inside a Figma text box becomes a new paragraph. Designers sometimes use spaces instead of line breaks for layout (`Animation type:  fade: ...  Duration: 100ms`), which then renders as one long paragraph.
- **Image framing is name based.** Only frames named `Frame For Specs` are exported. Decorative frames without text (icons, logos) are skipped, text containing frames are traversed. A frame that is meant as an illustration but has a different name would be flattened to its text.
- **Hyperlinks to Figma nodes** (`type: NODE`) are turned into Figma deep links. Useful for designers, opaque for developers. A later step could map them to the generated Markdown of the target component.
- **Payload size.** The nodes response for the Accordion page is 12 MB because the spec frames contain every component variant. Acceptable for a few components, but all components at once would need batching per page or `depth` limits combined with a second request for the sections.
- **Rate limits.** The client retries on 429 with `Retry-After`. The hourly cron uses one request; a full sync uses two plus the image downloads.
- **Expiring image URLs** are handled by downloading immediately; nothing of the temporary URL ends up in the repository.

## Next steps towards the MCP server

1. **One Markdown file per component** in `docs/`, driven by `components.config.json`. Start with the components that already have a documentation page in the Core Components file; the page list is available via `GET /v1/files/:key?depth=1`.
2. **Sample `Accordion.md` review.** Patrick Wiesenhuetter's sample and Kathrin Koehler's approval decide the final heading structure. Only `renderMarkdown.ts` needs to change, the block model stays.
3. **Tell designers about the publish rule.** Only named versions reach the documentation. The label is visible in the frontmatter and the pull request title, so a convention like `Docu | <component> | <ticket>` makes the history readable.
4. **MCP exposure.** The main repository already serves `https://designsystem.stihl.de/mcp` through `@storybook/addon-mcp` and generates `llms.txt`. Options: (a) the main repository pulls `docs/*.md` from this repository at build time and adds them as MCP resources next to the Storybook docs, or (b) a small standalone MCP server reads this repository directly. (a) keeps one endpoint for consumers and is the recommended direction.
5. **Images for MCP.** Serve as resource URLs (raw GitHub or static host), never inline. See [docs/decisions/002-image-handling.md](docs/decisions/002-image-handling.md).
6. **Token and ownership.** Move the token to a shared account before the first scheduled run on GitHub; add `FIGMA_TOKEN` as a repository secret.
7. **Table support** when the first component with tables is added.
