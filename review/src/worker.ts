import type { DecisionStatus, ReviewManifest } from '../shared/manifest.ts';
import { hasLogin, hasToken } from './auth.ts';
import type { D1Database } from './d1.ts';
import {
  describeReview,
  sendNotification,
  type NotificationInput,
} from './notify.ts';
import {
  finishReview,
  getDecisions,
  getReview,
  getSummary,
  latestReviewId,
  listReviews,
  reopenReview,
  saveReview,
  setDecisions,
} from './store.ts';

export interface Env {
  ASSETS: { fetch(input: URL | Request): Promise<Response> };
  DB: D1Database;
  /** owner/name of the repository the images are read from */
  GITHUB_REPOSITORY: string;
  REVIEW_USER: string;
  /** Secret: shared password of the review page */
  REVIEW_PASSWORD?: string;
  /** Secret: token of the pipeline that publishes reviews */
  REVIEW_PUBLISH_TOKEN?: string;
  /** Secret: Power Automate webhook that posts to Teams and sends the mail */
  NOTIFY_WEBHOOK_URL?: string;
}

export interface ExecutionContext {
  waitUntil(promise: Promise<unknown>): void;
}

const MAX_COMMENT_LENGTH = 2000;
const MAX_NAME_LENGTH = 80;
const MAX_IMAGES = 20_000;
const IMAGE_STATUSES = ['changed', 'added', 'removed', 'renamed'];

function json(body: unknown, status = 200): Response {
  return Response.json(body, {
    status,
    headers: { 'Cache-Control': 'no-store' },
  });
}

function fail(status: number, error: string): Response {
  return json({ error }, status);
}

async function readJson(request: Request): Promise<unknown> {
  if (!request.headers.get('content-type')?.includes('application/json')) {
    return undefined;
  }
  try {
    return await request.json();
  } catch {
    return undefined;
  }
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

function isCommit(value: unknown): boolean {
  return isRecord(value) && /^[0-9a-f]{40}$/.test(String(value.sha));
}

function isManifest(value: unknown): value is ReviewManifest {
  return (
    isRecord(value) &&
    value.version === 1 &&
    typeof value.title === 'string' &&
    isCommit(value.base) &&
    isCommit(value.head) &&
    Array.isArray(value.documents) &&
    Array.isArray(value.images) &&
    value.images.length <= MAX_IMAGES &&
    value.images.every(
      (image) =>
        isRecord(image) &&
        typeof image.id === 'string' &&
        typeof image.documentKey === 'string' &&
        IMAGE_STATUSES.includes(String(image.status))
    )
  );
}

function reviewerName(value: unknown): string | undefined {
  const name = typeof value === 'string' ? value.trim() : '';
  return name && name.length <= MAX_NAME_LENGTH ? name : undefined;
}

/** Sends in the background; a failing webhook must not fail the request that caused it */
function notify(
  env: Env,
  ctx: ExecutionContext,
  event: NotificationInput['event'],
  id: string,
  origin: string
): void {
  ctx.waitUntil(
    (async () => {
      const detail = await getReview(env.DB, id);
      if (detail) {
        await sendNotification(env.NOTIFY_WEBHOOK_URL, {
          event,
          ...describeReview(detail, origin),
        });
      }
    })().catch((error: unknown) => {
      console.error('Notification failed', error);
    })
  );
}

async function publishReview(
  request: Request,
  env: Env,
  ctx: ExecutionContext,
  origin: string
): Promise<Response> {
  const manifest = await readJson(request);
  if (!isManifest(manifest)) {
    return fail(400, 'The body is not a review manifest');
  }
  const { id, created } = await saveReview(
    env.DB,
    manifest,
    new Date().toISOString()
  );
  if (created) {
    notify(env, ctx, 'review_created', id, origin);
  }
  return json({ id, url: `${origin}/r/${id}`, created }, created ? 201 : 200);
}

async function decide(
  request: Request,
  env: Env,
  id: string
): Promise<Response> {
  const body = await readJson(request);
  if (!isRecord(body)) {
    return fail(400, 'Expected a JSON body');
  }
  const { imageIds, status, comment = '' } = body;
  const reviewer = reviewerName(body.reviewer);
  if (
    !Array.isArray(imageIds) ||
    imageIds.length === 0 ||
    imageIds.length > MAX_IMAGES ||
    !imageIds.every((imageId) => typeof imageId === 'string')
  ) {
    return fail(400, 'imageIds must list at least one image');
  }
  if (status !== null && status !== 'accepted' && status !== 'rejected') {
    return fail(400, 'status must be accepted, rejected or null');
  }
  if (typeof comment !== 'string' || comment.length > MAX_COMMENT_LENGTH) {
    return fail(
      400,
      `comment must be at most ${MAX_COMMENT_LENGTH} characters`
    );
  }
  if (!reviewer) {
    return fail(400, 'reviewer is required');
  }
  const summary = await getSummary(env.DB, id);
  if (!summary) {
    return fail(404, 'Review not found');
  }
  if (summary.status !== 'open') {
    return fail(409, 'This review is finished. Reopen it to change decisions.');
  }
  await setDecisions(
    env.DB,
    id,
    {
      imageIds: imageIds as string[],
      status: status as DecisionStatus | null,
      comment: comment.trim(),
      reviewer,
    },
    new Date().toISOString()
  );
  return json({ decisions: await getDecisions(env.DB, id) });
}

async function finish(
  request: Request,
  env: Env,
  ctx: ExecutionContext,
  id: string,
  origin: string
): Promise<Response> {
  const body = await readJson(request);
  const reviewer = reviewerName(isRecord(body) ? body.reviewer : undefined);
  if (!reviewer) {
    return fail(400, 'reviewer is required');
  }
  const existing = await getSummary(env.DB, id);
  if (!existing) {
    return fail(404, 'Review not found');
  }
  if (existing.status !== 'open') {
    return fail(409, 'This review is already finished');
  }
  const { summary, undecided } = await finishReview(
    env.DB,
    id,
    reviewer,
    new Date().toISOString()
  );
  if (!summary) {
    return fail(409, `${undecided} images still need a decision`);
  }
  notify(env, ctx, 'review_finished', id, origin);
  return json(summary);
}

/** Both commits of a review stay on GitHub, so images are read from there instead of being copied */
async function image(env: Env, sha: string, path: string): Promise<Response> {
  const upstream = await fetch(
    `https://raw.githubusercontent.com/${env.GITHUB_REPOSITORY}/${sha}/${path}`,
    // A commit never changes, so the edge may keep the file
    { cf: { cacheEverything: true, cacheTtl: 31_536_000 } } as RequestInit
  );
  if (!upstream.ok) {
    return fail(upstream.status === 404 ? 404 : 502, 'Image not available');
  }
  return new Response(upstream.body, {
    headers: {
      'Content-Type': 'image/png',
      'Cache-Control': 'private, max-age=31536000, immutable',
    },
  });
}

async function route(
  request: Request,
  env: Env,
  ctx: ExecutionContext
): Promise<Response> {
  const url = new URL(request.url);
  const { pathname, origin } = url;
  const method = request.method;

  // The pipeline authenticates with its own token, never with the shared login
  if (pathname === '/api/reviews' && method === 'POST') {
    return (await hasToken(request, env.REVIEW_PUBLISH_TOKEN))
      ? publishReview(request, env, ctx, origin)
      : fail(401, 'A valid publish token is required');
  }
  if (pathname === '/api/health' && method === 'GET') {
    if (!(await hasToken(request, env.REVIEW_PUBLISH_TOKEN))) {
      return fail(401, 'A valid publish token is required');
    }
    const row = await env.DB.prepare(
      'SELECT COUNT(*) AS reviews FROM reviews'
    ).first<{ reviews: number }>();
    return json({ ok: true, reviews: row?.reviews ?? 0 });
  }

  if (!(await hasLogin(request, env.REVIEW_USER, env.REVIEW_PASSWORD))) {
    return new Response('Login required', {
      status: 401,
      headers: {
        'WWW-Authenticate':
          'Basic realm="STIHL Design System review", charset="UTF-8"',
        'Cache-Control': 'no-store',
      },
    });
  }

  if (method !== 'GET' && method !== 'HEAD') {
    // The browser attaches the login to cross-site requests as well
    const requestOrigin = request.headers.get('origin');
    if (requestOrigin && requestOrigin !== origin) {
      return fail(403, 'Cross-site requests are not allowed');
    }
  }

  if (pathname === '/api/reviews' && method === 'GET') {
    return json({ reviews: await listReviews(env.DB) });
  }
  const review = pathname.match(
    /^\/api\/reviews\/([0-9a-f-]+)(?:\/(decisions|finish|reopen))?$/
  );
  if (review?.[1]) {
    const [, id, action] = review;
    if (!action && method === 'GET') {
      const detail = await getReview(env.DB, id);
      return detail ? json(detail) : fail(404, 'Review not found');
    }
    if (action === 'decisions' && method === 'POST') {
      return decide(request, env, id);
    }
    if (action === 'finish' && method === 'POST') {
      return finish(request, env, ctx, id, origin);
    }
    if (action === 'reopen' && method === 'POST') {
      if (!(await getSummary(env.DB, id))) {
        return fail(404, 'Review not found');
      }
      await reopenReview(env.DB, id);
      return json(await getSummary(env.DB, id));
    }
    return fail(405, 'Method not allowed');
  }
  if (pathname.startsWith('/api/')) {
    return fail(404, 'Not found');
  }

  const imagePath = pathname.match(
    /^\/img\/([0-9a-f]{40})\/(docs\/[A-Za-z0-9._/-]+\.png)$/
  );
  if (imagePath?.[1] && imagePath[2] && method === 'GET') {
    return imagePath[2].includes('..')
      ? fail(404, 'Not found')
      : image(env, imagePath[1], imagePath[2]);
  }
  if (pathname.startsWith('/img/')) {
    return fail(404, 'Not found');
  }

  if (pathname === '/latest') {
    const id = await latestReviewId(env.DB);
    return Response.redirect(id ? `${origin}/r/${id}` : `${origin}/`, 302);
  }

  // Everything else is the app; its files are only served behind the login as well
  return env.ASSETS.fetch(request);
}

export async function handleRequest(
  request: Request,
  env: Env,
  ctx: ExecutionContext
): Promise<Response> {
  let response: Response;
  try {
    response = await route(request, env, ctx);
  } catch (error) {
    console.error(error);
    response = fail(500, 'Internal server error');
  }
  const headers = new Headers(response.headers);
  headers.set('X-Content-Type-Options', 'nosniff');
  headers.set('X-Robots-Tag', 'noindex, nofollow');
  headers.set('Referrer-Policy', 'same-origin');
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
}

export default { fetch: handleRequest };
