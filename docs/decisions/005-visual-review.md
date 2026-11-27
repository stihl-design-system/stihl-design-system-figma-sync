# 005: Visual review of changed images

Status: accepted (DS-1581)

## Context

The sync exports about 1,250 images from Figma. When Design publishes a new version, the pull request shows binary files as changed, but nobody can see what changed in an image or whether the change was intended. Design needs a place to compare both versions after a release, confirm intended changes and flag the others.

## Decision

**A review per release, created after the merge, on a page of its own with a login.**

1. **When**: the sync workflow merges its pull request without a review and then starts a review of the commit before the merge against the merge commit; any other push to `main` that changes a PNG under `docs/` does the same. The review happens after the merge, so a rejected change is already published; it is corrected with a new Figma version. Blocking the merge until Design approves was left out on purpose, and the pull request itself is not reviewed either.
2. **What is compared**: images are matched by document and Figma node id. The file name starts with the section title and changes when a section is renamed; the node id does not. Pixels are compared with `pixelmatch`, anti-aliasing is ignored, and an image that was only encoded differently is not a change. Images of different size are compared on a shared canvas, the area only one of them covers counts as changed.
3. **Where**: a second Cloudflare Worker, `design-review`, separate from the public MCP worker so the login can never affect the MCP endpoint. GitHub Pages was the first idea, but it cannot protect a page of a public repository and cannot store decisions.
4. **Login**: Basic authentication with a login the team shares. Every request passes it, including the app files; the only exception are favicon, touch icons and web manifest, which browsers request without credentials and which are the public brand icons. The password exists only as a Worker secret. Because the login is shared, the page asks for a name once and stores it with each decision. The login protects the page and the decisions, not the images: those are public in this repository anyway. Basic authentication has no logout, so "Log out" sends a request with wrong credentials, which makes the browser discard the login it remembers; the page then checks whether that worked and says so when a browser keeps the login (verified in Chrome only). The name can be changed in the top bar; decisions keep the name they were saved with.
5. **Storage**: reviews and decisions live in D1. Images are not copied; the Worker reads both versions from the two commits on GitHub, which never change and can be cached without limit. If the repository becomes private, only that one route has to change.
6. **Notification**: the Worker calls a Power Automate webhook when a review is created and when it is finished. A group chat in Teams cannot be posted to in another way, and the same flow sends the mail. The Worker sends nothing while the webhook is not configured.
7. **Interface**: built with `@stihl-design-system/components`, pinned to the exact release candidate. Props were checked against the Storybook MCP server, usage rules against the design documentation of this repository.

## Highlighting changes

"Highlight diff" colours the changed pixels in a bright violet that is not part of the design system palette, so it cannot be mistaken for content of a board. The page computes the overlay in the browser with the same comparison the review was built with. Anti-aliased pixels are not counted as changes; for display, those connected to a changed pixel are coloured too, otherwise a moved text shows as a broken outline.

## What the design system did not cover

Found while building the page; feedback for the component library:

- No sidebar navigation component yet (DS-1579). The list of pages is built from `DSAccordion` and plain buttons.
- No progress bar. The page styles a native `progress` element with tokens.
- No toggle button for a toolbar. "Blink" is a `DSButton` with `aria-pressed`, which has no pressed appearance.
- `DSToast` has no error variant; failed requests use `warning`.
- The comparison area itself (zoom, pan, swipe handle, overlay) is custom by nature.

## Consequences

- `review/` is an npm workspace with its own dependencies (React, Vite, the component library); sync and MCP server are unaffected.
- The workflow needs the full history (`fetch-depth: 0`) to read both commits.
- A review can be created for any two commits, which also covers a missed run.
- Text changes of the documentation are not part of a review; the diff of the merged pull request shows them.
