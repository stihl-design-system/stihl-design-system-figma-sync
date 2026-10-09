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

- `src/images/exportImages.ts` asks for all image nodes in one Images call (PNG, scale 2), downloads each URL immediately and writes `docs/<component>/<slug>-<nodeId>.png`. The slug is the title of the surrounding section, so the file name is readable; the node id makes it unique and stable across renames.
- Stale PNGs in the image directory are deleted on every sync, so the folder mirrors the current Figma state.
- Alt text is the section title (the node name `Frame For Specs` carries no meaning).
- Exports are deterministic: two consecutive runs produce byte-identical files, so a sync without Figma changes creates no diff.

## Consequences

- The Accordion export is 42 PNGs, about 5.8 MB in total. The largest ones are the full variant overview frames (up to 1.1 MB). Repository growth is acceptable for one component, but should be watched when all components are added. Mitigations if needed: scale 1 for very large frames, Git LFS, or option 4 for the MCP phase.
- Image URLs do not expire and the Markdown stays usable offline and in any Markdown viewer.
- For the MCP server, images are served as resource URLs (raw GitHub URL or a static host that mirrors `docs/`), not inline. Base64 (option 2) was rejected because it bloats the Markdown that is meant to be fed to language models.
- Option 1 was rejected because the links would break after a month. Option 4 adds infrastructure that the spike does not need, but stays the natural next step if repository size becomes a problem.
