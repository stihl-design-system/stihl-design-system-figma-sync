import {
  CATEGORIES,
  CATEGORY_LABELS,
  documentUrl,
  sortedDocuments,
  summarize,
  type ContentBundle,
} from './content.ts';

const SERVER_NAME = 'stihl-design-docs';

function escapeHtml(text: string): string {
  return text
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;');
}

function vsCodeInstallUrl(endpoint: string): string {
  return `vscode:mcp/install?${encodeURIComponent(
    JSON.stringify({ name: SERVER_NAME, type: 'http', url: endpoint })
  )}`;
}

function cursorInstallUrl(endpoint: string): string {
  return `cursor://anysphere.cursor-deeplink/mcp/install?name=${SERVER_NAME}&config=${btoa(
    JSON.stringify({ url: endpoint })
  )}`;
}

const STYLE = `
  :root { color-scheme: light; }
  body { margin: 0; font: 16px/1.5 -apple-system, "Segoe UI", Helvetica, Arial, sans-serif; color: #1a1a1a; background: #fff; }
  main { max-width: 56rem; margin: 0 auto; padding: 3rem 1.5rem 5rem; }
  h1 { font-size: 2rem; margin: 0 0 0.25rem; }
  h2 { font-size: 1.375rem; margin: 2.5rem 0 0.75rem; border-top: 1px solid #e5e5e5; padding-top: 1.5rem; }
  h3 { font-size: 1.05rem; margin: 1.5rem 0 0.5rem; }
  .lead { color: #555; margin: 0 0 1.5rem; }
  .accent { color: #f37a1f; }
  code, pre { font: 0.9em/1.5 ui-monospace, SFMono-Regular, Menlo, monospace; }
  pre { background: #f5f5f5; border: 1px solid #e5e5e5; border-radius: 6px; padding: 0.75rem 1rem; overflow-x: auto; margin: 0.5rem 0 1rem; }
  code.inline { background: #f5f5f5; padding: 0.1em 0.35em; border-radius: 4px; }
  .endpoint { display: flex; flex-wrap: wrap; gap: 0.75rem; align-items: center; background: #fff6ee; border: 1px solid #f7c59a; border-radius: 8px; padding: 1rem 1.25rem; margin: 1rem 0 2rem; }
  .endpoint code { font-size: 1.05rem; word-break: break-all; }
  button, .button { font: inherit; font-size: 0.9rem; padding: 0.45rem 0.9rem; border-radius: 6px; border: 1px solid #1a1a1a; background: #1a1a1a; color: #fff; cursor: pointer; text-decoration: none; display: inline-block; }
  .button.secondary { background: #fff; color: #1a1a1a; }
  .clients { display: grid; grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr)); gap: 1rem; }
  .client { border: 1px solid #e5e5e5; border-radius: 8px; padding: 1rem 1.25rem; }
  .client h3 { margin-top: 0; }
  .client ol { padding-left: 1.25rem; margin: 0.5rem 0; }
  ul.docs { list-style: none; padding: 0; margin: 0; }
  ul.docs li { padding: 0.6rem 0; border-bottom: 1px solid #f0f0f0; }
  ul.docs .title { font-weight: 600; }
  ul.docs .meta { color: #666; font-size: 0.9rem; }
  ul.docs .summary { margin: 0.15rem 0 0; }
  a { color: #0b57d0; }
  footer { margin-top: 3rem; color: #777; font-size: 0.85rem; }
`;

export function renderLandingPage(
  bundle: ContentBundle,
  origin: string
): string {
  const endpoint = `${origin}/mcp`;
  const docs = sortedDocuments(bundle);
  const catalogue = CATEGORIES.map((category) => {
    const inCategory = docs.filter((doc) => doc.category === category);
    if (inCategory.length === 0) {
      return '';
    }
    const items = inCategory
      .map((doc) => {
        const summary = summarize(doc);
        const meta = [
          `<a href="${escapeHtml(doc.path)}">Markdown</a>`,
          `<a href="${escapeHtml(doc.sourceUrl)}">Figma</a>`,
          doc.importNames.length > 0
            ? `code: ${escapeHtml(doc.importNames.join(', '))}`
            : '',
          `synced ${escapeHtml(doc.syncedAt.slice(0, 10))}`,
        ]
          .filter(Boolean)
          .join(' · ');
        return `<li><span class="title">${escapeHtml(doc.title)}</span> <span class="meta">(id <code class="inline">${escapeHtml(doc.id)}</code>) · ${meta}</span>${
          summary ? `<p class="summary">${escapeHtml(summary)}</p>` : ''
        }</li>`;
      })
      .join('\n');
    return `<h3 id="${category}">${CATEGORY_LABELS[category]} (${inCategory.length})</h3>\n<ul class="docs">\n${items}\n</ul>`;
  }).join('\n');

  const claudeCode = `claude mcp add --transport http ${SERVER_NAME} ${endpoint}`;
  const codex = `codex mcp add ${SERVER_NAME} --url ${endpoint}`;
  const jsonConfig = JSON.stringify(
    { mcpServers: { [SERVER_NAME]: { url: endpoint } } },
    null,
    2
  );

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>STIHL Design System: Design Documentation MCP</title>
<style>${STYLE}</style>
</head>
<body>
<main>
  <h1><span class="accent">STIHL</span> Design System: Design Documentation</h1>
  <p class="lead">An MCP server that gives AI assistants the design guidance of the STIHL Design System, straight from the designers' Figma libraries: foundations, components, patterns and guidelines with anatomy, sizing, content rules, do's and don'ts and specs.</p>

  <div class="endpoint">
    <strong>Server URL</strong>
    <code id="endpoint">${escapeHtml(endpoint)}</code>
    <button type="button" data-copy="${escapeHtml(endpoint)}">Copy</button>
  </div>

  <h2>Add it to your assistant</h2>
  <p>No account, no API key. Paste the server URL where your tool asks for a remote or custom MCP server.</p>
  <div class="clients">
    <div class="client">
      <h3>Claude (desktop and web)</h3>
      <ol>
        <li>Settings → Connectors → <em>Add custom connector</em></li>
        <li>Name: <code class="inline">STIHL Design Docs</code>, URL: the server URL above</li>
        <li>Enable it in a chat via the tools (+) menu</li>
      </ol>
    </div>
    <div class="client">
      <h3>ChatGPT</h3>
      <ol>
        <li>Settings → Apps &amp; Connectors → Advanced → enable <em>Developer mode</em></li>
        <li><em>Create</em> a connector with the server URL, authentication <em>None</em></li>
      </ol>
    </div>
    <div class="client">
      <h3>Microsoft Copilot Studio</h3>
      <ol>
        <li>Agent → Tools → <em>Add a tool</em> → <em>Model Context Protocol</em></li>
        <li>Server URL above, authentication <em>None</em></li>
      </ol>
    </div>
    <div class="client">
      <h3>VS Code and Cursor</h3>
      <p><a class="button" href="${escapeHtml(vsCodeInstallUrl(endpoint))}">Install in VS Code</a> <a class="button secondary" href="${escapeHtml(cursorInstallUrl(endpoint))}">Install in Cursor</a></p>
    </div>
    <div class="client">
      <h3>Claude Code / Codex CLI</h3>
      <pre><code>${escapeHtml(claudeCode)}</code></pre>
      <pre><code>${escapeHtml(codex)}</code></pre>
    </div>
    <div class="client">
      <h3>Any other MCP client</h3>
      <pre><code>${escapeHtml(jsonConfig)}</code></pre>
    </div>
  </div>

  <h2>What you can ask</h2>
  <ul>
    <li>"Which button variant do I use for a secondary action in a form?"</li>
    <li>"What are the content rules for notifications? Show me the do's and don'ts."</li>
    <li>"How wide may body text be on the web grid?"</li>
    <li>"Summarise the accessibility guidance for the combobox."</li>
  </ul>
  <p>The assistant uses the tools <code class="inline">search_documentation</code>, <code class="inline">list_documents</code>, <code class="inline">get_document</code> and <code class="inline">get_image</code>. Code, props and API details are not in here; the Storybook MCP server of <code class="inline">@stihl-design-system/components</code> covers those.</p>

  <h2>Documented pages (${docs.length})</h2>
  <p>Every page is also plain Markdown: <a href="index.md">index.md</a> is the catalogue, <a href="llms.txt">llms.txt</a> the machine readable overview.</p>
  ${catalogue}

  <footer>Generated ${escapeHtml(bundle.generatedAt.slice(0, 10))} from the STIHL Design System Figma libraries. Content is read only and updated when designers publish a new version in Figma.</footer>
</main>
<script>
  for (const button of document.querySelectorAll('button[data-copy]')) {
    button.addEventListener('click', async () => {
      await navigator.clipboard.writeText(button.dataset.copy);
      button.textContent = 'Copied';
      setTimeout(() => { button.textContent = 'Copy'; }, 1500);
    });
  }
</script>
</body>
</html>
`;
}

export function renderLlmsTxt(bundle: ContentBundle, origin: string): string {
  const lines = [
    '# STIHL Design System: design documentation',
    '',
    '> Design guidance (foundations, components, patterns, guidelines) synced from the STIHL Design System Figma libraries. One Markdown file per page, images next to it. MCP endpoint: ' +
      `${origin}/mcp`,
    '',
  ];
  for (const category of CATEGORIES) {
    const docs = sortedDocuments(bundle, category);
    if (docs.length === 0) {
      continue;
    }
    lines.push(`## ${CATEGORY_LABELS[category]}`, '');
    for (const doc of docs) {
      const summary = summarize(doc);
      lines.push(
        `- [${doc.title}](${documentUrl(doc, origin)})${summary ? `: ${summary}` : ''}`
      );
    }
    lines.push('');
  }
  return lines.join('\n');
}
