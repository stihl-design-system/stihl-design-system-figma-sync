# 001: Change detection (polling vs. webhook)

Status: accepted

## Context

The generated Markdown must follow changes in Figma without a designer having to trigger anything manually. Two mechanisms are available:

- **Polling**: GitHub Actions on a schedule asks Figma for the current state and compares it with the frontmatter of the generated Markdown.
- **Webhooks V2**: Figma calls an HTTPS endpoint on `FILE_UPDATE` (debounced, about 30 minutes after the last edit) or `FILE_VERSION_UPDATE` (immediately when a named version is created).

Findings that changed the picture compared to the ticket text:

- Webhooks V2 can be created with `context: file`. `Can edit` on the file is sufficient, no team admin or Enterprise plan required. Verified: `GET /v2/webhooks?context=file&context_id=qXldpLO6gxHJNLdcXIPxYt` returns `200` with the personal token used for the spike.
- Figma cannot send custom HTTP headers. GitHub `repository_dispatch` requires `Authorization`, so a webhook always needs a relay (serverless function) in between. The relay would bring its own hosting, deployment and two more secrets (Figma passcode, GitHub token).
- `FILE_UPDATE` fires for every editing session, including unfinished work. `FILE_VERSION_UPDATE` only fires when a designer deliberately saves a named version. The Core Components file already uses named versions for releases (`Components published`, `DS-1182 | Docu | ...`).
- The REST API exposes the same information for polling: `GET /v1/files/:key/versions` lists named versions, and `GET /v1/files/:key/nodes` and `GET /v1/images/:key` accept `?version=<id>` to read exactly that state.

## Decision

**Poll for the latest named version, no webhook, no relay.**

1. `.github/workflows/sync.yml` runs every 30 minutes. `npm run check` fetches the newest version with a label and compares its id with `figmaVersion` in the frontmatter. Only when they differ does the workflow run `npm run sync` and open a pull request (`peter-evans/create-pull-request`). One small API call per run when nothing changed.
2. `npm run sync` reads nodes and renders images **pinned to that version id**. The generated Markdown therefore reflects a state a designer explicitly published, not whatever the file looked like when the cron fired.
3. Designers publish documentation changes the same way they already publish components: File > Save to version history with a label. The label ends up in the frontmatter (`figmaVersionLabel`) and in the pull request title.
4. `--latest` on `check` and `sync` switches to the raw file version for local debugging.

## Why not the webhook

- Latency gain is small: `FILE_UPDATE` is itself delayed by about 30 minutes, the poll interval is 30 minutes. Only `FILE_VERSION_UPDATE` would be noticeably faster, and named-version polling already gives the same semantics.
- The relay is pure infrastructure for a documentation sync: a Cloudflare Worker (or Azure Function), its deployment, a shared passcode and a GitHub token that must be rotated. Polling needs nothing beyond the repository and `FIGMA_TOKEN`.
- Polling is required anyway as the safety net for lost deliveries; a webhook would only be an addition, never a replacement.

If near-real-time becomes a requirement later, the path is: a dependency-free `fetch` handler pasted into the Cloudflare dashboard that validates the Figma `passcode` and calls `repository_dispatch`, plus `POST /v2/webhooks` with `context: file` and `event_type: FILE_VERSION_UPDATE`. Nothing in this repository has to change except adding `repository_dispatch` to the workflow triggers.

## Consequences

- Worst-case delay between "designer saves a named version" and "pull request exists" is about 30 minutes plus the workflow runtime.
- Edits that are not saved as a named version never reach the documentation. This is intended, but designers need to know it.
- GitHub Actions minutes: about 48 short runs per day, well within the private repository budget.
- A file without any named version makes `check` and `sync` fail with a clear message instead of silently falling back to the unpublished state.
