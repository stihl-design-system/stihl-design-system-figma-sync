import { readFileSync } from 'node:fs';
import { DatabaseSync } from 'node:sqlite';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import type { D1Database, D1PreparedStatement } from '../review/src/d1.ts';
import {
  handleRequest,
  type Env,
  type ExecutionContext,
} from '../review/src/worker.ts';
import type {
  ReviewDetail,
  ReviewImage,
  ReviewManifest,
} from '../review/shared/manifest.ts';

const ORIGIN = 'https://design-review.example.workers.dev';
const PASSWORD = 'correct horse';
const TOKEN = 'publish-token';
const WEBHOOK = 'https://flow.example.com/hook';
const BASE = 'a'.repeat(40);
const HEAD = 'b'.repeat(40);
const ID = 'aaaaaaa-bbbbbbb';

/** D1 on top of the SQLite that ships with Node, so the real schema and SQL run */
function createDatabase(): D1Database {
  const sqlite = new DatabaseSync(':memory:');
  sqlite.exec('PRAGMA foreign_keys = ON');
  sqlite.exec(readFileSync('review/migrations/0001_init.sql', 'utf8'));
  const prepare = (
    query: string,
    values: never[] = []
  ): D1PreparedStatement => ({
    bind: (...bound) => prepare(query, bound as never[]),
    first: async <T>() =>
      (sqlite.prepare(query).get(...values) as T | undefined) ?? null,
    all: async <T>() => ({
      results: sqlite.prepare(query).all(...values) as T[],
      success: true,
      meta: {},
    }),
    run: async () => ({
      results: [],
      success: true,
      meta: { changes: Number(sqlite.prepare(query).run(...values).changes) },
    }),
  });
  return {
    prepare,
    batch: async <T>(statements: D1PreparedStatement[]) => {
      const results = [];
      for (const statement of statements) {
        results.push(await statement.all<T>());
      }
      return results;
    },
  };
}

function image(node: string, status: ReviewImage['status']): ReviewImage {
  const side = {
    path: `docs/components/button/figure-${node}.png`,
    width: 100,
    height: 50,
    section: `Button › Section ${node}`,
    figmaUrl: `https://www.figma.com/design/KEY?node-id=${node}`,
  };
  return {
    id: `components/button/${node}`,
    documentKey: 'components/button',
    status,
    resized: false,
    before: status === 'added' ? undefined : side,
    after: status === 'removed' ? undefined : side,
  };
}

function manifest(images: ReviewImage[]): ReviewManifest {
  return {
    version: 1,
    repository: 'owner/repo',
    title: 'Components published',
    base: { sha: BASE, subject: 'before', date: '2026-11-17T10:00:00Z' },
    head: { sha: HEAD, subject: 'after', date: '2026-11-18T10:00:00Z' },
    counts: { changed: 0, added: 0, removed: 0, renamed: 0 },
    documents: [
      {
        key: 'components/button',
        title: 'Button',
        category: 'component',
        figmaFile: 'Core Components',
        after: { id: '2', label: 'Components published', createdAt: '' },
      },
    ],
    images,
  };
}

const IMAGES = [
  image('1-1', 'changed'),
  image('2-2', 'added'),
  image('3-3', 'renamed'),
];

describe('review worker', () => {
  let env: Env;
  let background: Promise<unknown>[];
  let ctx: ExecutionContext;
  let upstream: ReturnType<typeof vi.fn<typeof fetch>>;

  beforeEach(() => {
    background = [];
    ctx = { waitUntil: (promise) => void background.push(promise) };
    env = {
      ASSETS: { fetch: async () => new Response('<html>app</html>') },
      DB: createDatabase(),
      GITHUB_REPOSITORY: 'owner/repo',
      REVIEW_USER: 'designsystem',
      REVIEW_PASSWORD: PASSWORD,
      REVIEW_PUBLISH_TOKEN: TOKEN,
    };
    upstream = vi.fn<typeof fetch>(async () => new Response('png-bytes'));
    vi.stubGlobal('fetch', upstream);
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  function call(
    path: string,
    init: RequestInit & { login?: string | false; json?: unknown } = {}
  ): Promise<Response> {
    const { login = PASSWORD, json, ...rest } = init;
    const headers = new Headers(rest.headers);
    if (login !== false && !headers.has('authorization')) {
      headers.set('authorization', `Basic ${btoa(`designsystem:${login}`)}`);
    }
    if (json !== undefined) {
      headers.set('content-type', 'application/json');
    }
    return handleRequest(
      new Request(`${ORIGIN}${path}`, {
        ...rest,
        method: rest.method ?? (json === undefined ? 'GET' : 'POST'),
        headers,
        body: json === undefined ? undefined : JSON.stringify(json),
      }),
      env,
      ctx
    );
  }

  function publish(images = IMAGES, token = TOKEN): Promise<Response> {
    return call('/api/reviews', {
      json: manifest(images),
      headers: { authorization: `Bearer ${token}` },
    });
  }

  function decide(body: Record<string, unknown>): Promise<Response> {
    return call(`/api/reviews/${ID}/decisions`, {
      json: { reviewer: 'Ada', ...body },
    });
  }

  async function detail(): Promise<ReviewDetail> {
    return (await (await call(`/api/reviews/${ID}`)).json()) as ReviewDetail;
  }

  it('serves nothing without the shared login, not even the app', async () => {
    for (const path of [
      '/',
      '/r/x',
      '/api/reviews',
      `/img/${HEAD}/docs/a.png`,
    ]) {
      expect((await call(path, { login: false })).status).toBe(401);
      expect((await call(path, { login: 'wrong' })).status).toBe(401);
    }
    const challenge = await call('/', { login: false });
    expect(challenge.headers.get('www-authenticate')).toContain('Basic');

    expect(await (await call('/r/x')).text()).toBe('<html>app</html>');

    env.REVIEW_PASSWORD = undefined;
    expect((await call('/', { login: '' })).status).toBe(401);
  });

  it('accepts reviews only from the pipeline and keeps them for the page', async () => {
    expect((await publish(IMAGES, 'wrong')).status).toBe(401);
    // The shared login must not be able to create reviews
    expect(
      (await call('/api/reviews', { json: manifest(IMAGES) })).status
    ).toBe(401);

    const created = await publish();
    expect(created.status).toBe(201);
    expect(await created.json()).toEqual({
      id: ID,
      url: `${ORIGIN}/r/${ID}`,
      created: true,
    });

    const review = await detail();
    expect(review).toMatchObject({
      id: ID,
      title: 'Components published',
      status: 'open',
      counts: { changed: 1, added: 1, removed: 0, renamed: 1 },
      // The renamed image needs no decision
      total: 2,
      accepted: 0,
      rejected: 0,
      decisions: [],
    });
    expect(review.manifest.images).toEqual(IMAGES);

    const latest = await call('/latest');
    expect(latest.status).toBe(302);
    expect(latest.headers.get('location')).toBe(`${ORIGIN}/r/${ID}`);
  });

  it('keeps decisions of images that survive a republish', async () => {
    await publish();
    await decide({
      imageIds: ['components/button/1-1', 'components/button/2-2'],
      status: 'accepted',
    });

    const republished = await publish([
      image('1-1', 'changed'),
      image('4-4', 'removed'),
    ]);
    expect(republished.status).toBe(200);

    const review = await detail();
    expect(review.total).toBe(2);
    expect(review.decisions.map((decision) => decision.imageId)).toEqual([
      'components/button/1-1',
    ]);
  });

  it('records, replaces and withdraws decisions', async () => {
    await publish();

    const rejected = await decide({
      imageIds: ['components/button/1-1'],
      status: 'rejected',
      comment: ' Border is missing ',
    });
    expect(rejected.status).toBe(200);
    expect(await rejected.json()).toMatchObject({
      decisions: [
        {
          imageId: 'components/button/1-1',
          status: 'rejected',
          comment: 'Border is missing',
          reviewer: 'Ada',
        },
      ],
    });

    // Unknown and renamed images take no decision
    await decide({
      imageIds: [
        'components/button/1-1',
        'components/button/3-3',
        'components/other/9-9',
      ],
      status: 'accepted',
      reviewer: 'Grace',
    });
    expect((await detail()).decisions).toMatchObject([
      {
        imageId: 'components/button/1-1',
        status: 'accepted',
        reviewer: 'Grace',
      },
    ]);

    await decide({ imageIds: ['components/button/1-1'], status: null });
    expect((await detail()).decisions).toEqual([]);

    expect((await decide({ imageIds: [], status: 'accepted' })).status).toBe(
      400
    );
    expect(
      (await decide({ imageIds: ['components/button/1-1'], status: 'maybe' }))
        .status
    ).toBe(400);
    expect(
      (
        await decide({
          imageIds: ['components/button/1-1'],
          status: 'accepted',
          reviewer: ' ',
        })
      ).status
    ).toBe(400);
  });

  it('rejects changes that another site sends with the cached login', async () => {
    await publish();
    const response = await call(`/api/reviews/${ID}/decisions`, {
      json: {
        imageIds: ['components/button/1-1'],
        status: 'accepted',
        reviewer: 'Mallory',
      },
      headers: { origin: 'https://evil.example.com' },
    });

    expect(response.status).toBe(403);
    expect((await detail()).decisions).toEqual([]);
  });

  it('finishes a review only when every image is decided', async () => {
    await publish();
    await decide({ imageIds: ['components/button/1-1'], status: 'accepted' });

    const early = await call(`/api/reviews/${ID}/finish`, {
      json: { reviewer: 'Ada' },
    });
    expect(early.status).toBe(409);
    expect(await early.json()).toEqual({
      error: '1 images still need a decision',
    });

    await decide({
      imageIds: ['components/button/2-2'],
      status: 'rejected',
      comment: 'Not intended',
    });
    const finished = await call(`/api/reviews/${ID}/finish`, {
      json: { reviewer: 'Ada' },
    });
    expect(await finished.json()).toMatchObject({
      status: 'changes_requested',
      finishedBy: 'Ada',
      accepted: 1,
      rejected: 1,
    });

    // A finished review is locked until it is reopened
    expect(
      (
        await decide({
          imageIds: ['components/button/2-2'],
          status: 'accepted',
        })
      ).status
    ).toBe(409);
    const reopened = await call(`/api/reviews/${ID}/reopen`, {
      method: 'POST',
    });
    expect(await reopened.json()).toMatchObject({
      status: 'open',
      finishedBy: null,
    });
    await decide({ imageIds: ['components/button/2-2'], status: 'accepted' });
    const approved = await call(`/api/reviews/${ID}/finish`, {
      json: { reviewer: 'Grace' },
    });
    expect(await approved.json()).toMatchObject({ status: 'approved' });
  });

  it('reads images of a commit from the configured repository only', async () => {
    const response = await call(
      `/img/${HEAD}/docs/components/button/a-1-2.png`
    );
    expect(response.status).toBe(200);
    expect(response.headers.get('content-type')).toBe('image/png');
    expect(response.headers.get('cache-control')).toContain('immutable');
    expect(upstream.mock.calls[0]?.[0]).toBe(
      `https://raw.githubusercontent.com/owner/repo/${HEAD}/docs/components/button/a-1-2.png`
    );

    for (const path of [
      '/img/main/docs/components/button/a-1-2.png',
      `/img/${HEAD}/src/secret.png`,
      `/img/${HEAD}/docs/../.env.png`,
      `/img/${HEAD}/docs/components/button.md`,
    ]) {
      expect((await call(path)).status).toBe(404);
    }
    expect(upstream).toHaveBeenCalledTimes(1);
  });

  it('announces a new review and its result through the webhook', async () => {
    env.NOTIFY_WEBHOOK_URL = WEBHOOK;
    await publish();
    await Promise.all(background);
    // Publishing the same review again must not announce it twice
    await publish();
    await Promise.all(background);

    await decide({ imageIds: ['components/button/1-1'], status: 'accepted' });
    await decide({
      imageIds: ['components/button/2-2'],
      status: 'rejected',
      comment: 'Wrong icon',
    });
    await call(`/api/reviews/${ID}/finish`, { json: { reviewer: 'Ada' } });
    await Promise.all(background);

    const sent = upstream.mock.calls.map(([url, init]) => ({
      url,
      body: JSON.parse(String(init?.body)) as Record<string, unknown>,
    }));
    expect(sent.map(({ url }) => url)).toEqual([WEBHOOK, WEBHOOK]);
    expect(sent[0]?.body).toMatchObject({
      type: 'message',
      event: 'review_created',
      subject: 'Design review: Components published',
      url: `${ORIGIN}/r/${ID}`,
      latestUrl: `${ORIGIN}/latest`,
    });
    expect(sent[0]?.body.text).toContain(
      '1 changed, 1 added, 1 renamed in Button'
    );
    expect(sent[1]?.body).toMatchObject({
      event: 'review_finished',
      subject: 'Design review needs changes: Components published',
    });
    expect(sent[1]?.body.text).toContain(
      `Rejected: Button: Button › Section 2-2 (Wrong icon) ${ORIGIN}/r/${ID}?image=components%2Fbutton%2F2-2`
    );
    expect(JSON.stringify(sent[1]?.body.attachments)).toContain(
      'application/vnd.microsoft.card.adaptive'
    );
  });

  it('sends nothing while no webhook is configured', async () => {
    await publish();
    await Promise.all(background);

    expect(upstream).not.toHaveBeenCalled();
  });
});
