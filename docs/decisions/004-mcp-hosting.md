# 004: Hosting the design documentation MCP server

Status: accepted (2026-11-04)

## Context

The generated Markdown is meant for consumers of the Design System (designers, product people, developers) through an MCP server. The requirement is "add this URL to your assistant", nothing else: no account, no API key, no local install. The design documentation is served separately from the code documentation (`designsystem.stihl.de/mcp`, Storybook), so a second endpoint is wanted. STIHL IT will not provide DNS entries or hosting for this, and the budget is zero.

## Decision

A Cloudflare Worker on the free plan, under the `stihl-design-system.workers.dev` subdomain of the Design System team's Cloudflare account (design.system@stihl.de):

- **Endpoint**: `https://design-docs.stihl-design-system.workers.dev/mcp` (Streamable HTTP, stateless, JSON responses, CORS open). Landing page with install instructions at `/`, every Markdown file and PNG as a static asset (`/components/button.md`, `/components/button/*.png`), plus `/index.md` and `/llms.txt`.
- **Code**: [mcp/](../../mcp/) in this repository. `npm run mcp:build` turns `docs/` into `mcp/public/` (static assets plus `content.json`, the parsed documents). The worker ([mcp/src/worker.ts](../../mcp/src/worker.ts)) reads `content.json` through the assets binding and serves four tools (`list_documents`, `get_document`, `search_documentation`, `get_image`) and the documents as MCP resources (`stihl-ds://<category>/<id>`). Only `/mcp` runs the worker; everything else is served from Cloudflare's asset cache and does not count against the request quota.
- **Deploy**: [.github/workflows/deploy-mcp.yml](../../.github/workflows/deploy-mcp.yml) runs on every push to `main` that touches `docs/`, `mcp/` or `src/`, so a merged sync pull request is live within a minute. Needs `CLOUDFLARE_API_TOKEN` (template "Edit Cloudflare Workers") and `CLOUDFLARE_ACCOUNT_ID` as repository secrets. Locally `npm run mcp:deploy` after `npx wrangler login`.

## Alternatives considered

- **GitHub only.** GitHub Pages is static and cannot answer the `POST` requests of the MCP transport; Actions do not serve HTTP. A GitHub-only variant would be Pages plus a local stdio server (`npx ...`), which fails the "just add a URL" requirement for non-developers.
- **Extend the existing Storybook MCP.** Chromatic's hosted MCP serves the component manifest; design documentation would have to be attached to Storybook component docs, and foundations, patterns and guidelines have no component to attach to. Rejected also because design and code documentation are to be served separately.
- **Vercel Hobby, Netlify Free.** Hobby terms exclude commercial use; Netlify would work but adds nothing over Workers, which also host the 100 MB of images as static assets without a separate bucket.
- **Azure Functions.** Near zero cost, but has to go through STIHL IT.

## Consequences

- Free plan limits: 100,000 worker requests per day (only `/mcp` counts), 3 MB compressed worker bundle (currently 300 KB), 20,000 static assets of up to 25 MB each (currently 1,347 files, 120 MB). Images are served from the edge cache; `content.json` is parsed once per isolate.
- `*.workers.dev` is the URL consumers paste. A custom domain would need a zone on Cloudflare, which STIHL IT would have to delegate.
- The deploy token lives in GitHub secrets and in the Cloudflare account of the team, not with a person. `wrangler login` on a developer machine is only needed for manual deploys.
- Search is lexical (title, keywords, headings, body occurrences). Good enough for 48 documents; an embedding index (Cloudflare Vectorize, also free tier) is the upgrade path if the corpus grows or the hit quality disappoints.
