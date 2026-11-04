# 002: Image handling

Status: accepted for the spike

## Context

The Figma documentation mixes text with visual examples (anatomy, do/don't, size variants). On the Accordion page every `section` frame has an `Infos` frame (text) and a `Frame For Specs` frame (visual). The Images endpoint (`GET /v1/images/:key?ids=...`) renders nodes on demand and returns **temporary URLs** (valid for about 30 days, not stable across calls).

Options considered:

1. Link the temporary Figma URLs directly from the Markdown.
2. Inline images as base64 data URIs.
3. Export PNGs into the repository next to the Markdown and reference them relatively.
4. Export to an external static host (blob storage, CDN) and reference absolute URLs.

## Decision

**Option 3: PNG files in the repository, relative references.**

- `src/images/exportImages.ts` asks for the image nodes in batches of 20 (PNG, scale 1; a single request for a whole page timed out on the Card page), downloads each URL immediately and writes `docs/<category>/<id>/<slug>-<nodeId>.png`. The slug is the title of the surrounding section, so the file name is readable; the node id makes it unique and stable across renames.
- Stale PNGs in the image directory are deleted on every sync, so the folder mirrors the current Figma state.
- Alt text is the section title (the node name `Frame For Specs` carries no meaning).
- Exports are deterministic: two consecutive runs produce byte-identical files, so a sync without Figma changes creates no diff.

## Consequences

- The Accordion export alone was 42 PNGs, about 5.8 MB at scale 2. All 29 Core Components pages produced 954 PNGs and 150 MB at scale 2, with single boards up to 5500 px wide, so the scale was reduced to 1 (boards are still up to 2800 px wide, enough for agents and for reading). Repository growth remains the main cost of this option; if the other three Figma projects push it further, Git LFS or option 4 for the MCP phase are the next steps.
- Image URLs do not expire and the Markdown stays usable offline and in any Markdown viewer.
- For the MCP server, images are served as resource URLs (raw GitHub URL or a static host that mirrors `docs/`), not inline. Base64 (option 2) was rejected because it bloats the Markdown that is meant to be fed to language models.
- Option 1 was rejected because the links would break after a month. Option 4 adds infrastructure that the spike does not need, but stays the natural next step if repository size becomes a problem.

## Addendum (2026-11-04): text alternatives for figures

Measurements, variants and do/don't verdicts live only in the exported boards; component pages average 40 words of text per image. A PNG is opaque to search and to text-only clients, and a vision call per image is slow and costly at query time. Every figure therefore gets a caption line (`_Figure: ..._`) under the image in the Markdown, built from two sources:

1. **Structural facts from the Figma layers** (`src/extract/figureFacts.ts`, free, deterministic): visible text labels, measurement labels (`8px`, `44dp`), callout numbers in annotation circles, component instances with their variant properties (`button (variant=filled, state=enabled, size=medium)`) and the Do/Don't chip. These always exist and are also fed into the vision prompt.
2. **Vision captions** (`src/images/captionImages.ts`): one call per new image to an OpenAI compatible endpoint, by default `@cf/mistralai/mistral-small-3.1-24b-instruct` on Workers AI of the team account (Llama 3.2 Vision is not licensed in the EU, Moondream has a different API shape). The prompt carries document, section, the text next to the figure and the structural facts, so the model explains what the measurements and callouts refer to instead of guessing. Captions are cached per image content hash in `captions.json` next to the images and committed, so a sync without a provider or without image changes never calls the API and stays idempotent. Measurements the model leaves out are appended; when no caption exists, the structural facts are rendered on their own.

Cost: roughly 60 to 200 neurons per image on Workers AI; the free tier covers about 100 images a day, which is why `.github/workflows/captions.yml` backfills daily and the sync run describes what it can. On the Workers Paid plan the whole corpus is about one euro.
