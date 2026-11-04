import { WebStandardStreamableHTTPServerTransport } from '@modelcontextprotocol/sdk/server/webStandardStreamableHttp.js';
import type { ContentBundle } from './content.ts';
import { createServer } from './server.ts';

/** Minimal shape of the Workers runtime we rely on; avoids a second type setup next to @types/node */
interface Env {
  ASSETS: { fetch(input: URL | Request): Promise<Response> };
}
interface ExecutionContext {
  waitUntil(promise: Promise<unknown>): void;
}

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, DELETE, OPTIONS',
  'Access-Control-Allow-Headers':
    'Content-Type, Accept, Authorization, Mcp-Session-Id, Mcp-Protocol-Version, Last-Event-ID',
  'Access-Control-Expose-Headers': 'Mcp-Session-Id, Mcp-Protocol-Version',
  'Access-Control-Max-Age': '86400',
};

const bundles = new Map<string, Promise<ContentBundle>>();

/** content.json is generated at build time; one parse per isolate and origin */
function loadBundle(env: Env, origin: string): Promise<ContentBundle> {
  let pending = bundles.get(origin);
  if (!pending) {
    pending = env.ASSETS.fetch(new URL('/content.json', origin)).then(
      async (response) => {
        if (!response.ok) {
          throw new Error(`content.json missing (${response.status})`);
        }
        return (await response.json()) as ContentBundle;
      }
    );
    bundles.set(origin, pending);
    pending.catch(() => bundles.delete(origin));
  }
  return pending;
}

async function loadAsset(
  env: Env,
  origin: string,
  path: string
): Promise<ArrayBuffer | undefined> {
  const response = await env.ASSETS.fetch(new URL(`/${path}`, origin));
  return response.ok ? response.arrayBuffer() : undefined;
}

function withCors(response: Response): Response {
  const headers = new Headers(response.headers);
  for (const [key, value] of Object.entries(CORS_HEADERS)) {
    headers.set(key, value);
  }
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
}

function wantsMcp(request: Request): boolean {
  const accept = request.headers.get('accept') ?? '';
  return (
    accept.includes('application/json') || accept.includes('text/event-stream')
  );
}

async function handleMcp(request: Request, env: Env): Promise<Response> {
  if (request.method === 'OPTIONS') {
    return new Response(null, { status: 204, headers: CORS_HEADERS });
  }
  const origin = new URL(request.url).origin;
  if (request.method === 'GET' && !wantsMcp(request)) {
    return Response.redirect(`${origin}/`, 302);
  }
  const bundle = await loadBundle(env, origin);
  const server = createServer({
    bundle,
    origin,
    loadAsset: (path) => loadAsset(env, origin, path),
  });
  // Stateless: a fresh server and transport per request, nothing to keep between calls
  const transport = new WebStandardStreamableHTTPServerTransport({
    sessionIdGenerator: undefined,
    enableJsonResponse: true,
  });
  await server.connect(transport);
  return withCors(await transport.handleRequest(request));
}

export default {
  async fetch(
    request: Request,
    env: Env,
    _ctx: ExecutionContext
  ): Promise<Response> {
    const { pathname } = new URL(request.url);
    if (pathname === '/mcp' || pathname === '/mcp/') {
      try {
        return await handleMcp(request, env);
      } catch (error) {
        console.error(error);
        return withCors(
          Response.json(
            {
              jsonrpc: '2.0',
              error: { code: -32603, message: 'Internal server error' },
              id: null,
            },
            { status: 500 }
          )
        );
      }
    }
    return env.ASSETS.fetch(request);
  },
};
