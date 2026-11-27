import {
  countImages,
  needsDecision,
  reviewId,
  type Decision,
  type DecisionStatus,
  type ReviewCounts,
  type ReviewDetail,
  type ReviewImage,
  type ReviewManifest,
  type ReviewStatus,
  type ReviewSummary,
} from '../shared/manifest.ts';
import type { D1Database } from './d1.ts';

/** Images per row of review_images; a row stays far below the 2 MB D1 limit */
const IMAGES_PER_PART = 150;

interface ReviewRow {
  id: string;
  created_at: string;
  title: string;
  counts: string;
  texts: number;
  total: number;
  status: ReviewStatus;
  finished_at: string | null;
  finished_by: string | null;
  accepted: number;
  rejected: number;
}

const SUMMARY_COLUMNS = `r.id, r.created_at, r.title, r.counts, r.total, r.status, r.finished_at, r.finished_by,
  (SELECT COUNT(*) FROM json_each(r.header, '$.texts')) AS texts,
  (SELECT COUNT(*) FROM decisions d WHERE d.review_id = r.id AND d.status = 'accepted') AS accepted,
  (SELECT COUNT(*) FROM decisions d WHERE d.review_id = r.id AND d.status = 'rejected') AS rejected`;

/** Ids of the images and text sections of a review that take a decision; texts live in the header */
const DECIDABLE_ITEMS = `SELECT json_extract(image.value, '$.id')
  FROM review_images part, json_each(part.images) image
  WHERE part.review_id = ?1 AND json_extract(image.value, '$.status') != 'renamed'
  UNION ALL
  SELECT json_extract(text.value, '$.id')
  FROM reviews review, json_each(review.header, '$.texts') text
  WHERE review.id = ?1`;

function toSummary(row: ReviewRow): ReviewSummary {
  return {
    id: row.id,
    title: row.title,
    createdAt: row.created_at,
    status: row.status,
    finishedAt: row.finished_at,
    finishedBy: row.finished_by,
    counts: JSON.parse(row.counts) as ReviewCounts,
    texts: row.texts,
    total: row.total,
    accepted: row.accepted,
    rejected: row.rejected,
  };
}

/**
 * Stores a review. Publishing the same pair of commits again replaces the
 * images and texts and keeps the decisions of the ones that still exist.
 */
export async function saveReview(
  db: D1Database,
  manifest: ReviewManifest,
  now: string
): Promise<{ id: string; created: boolean }> {
  const id = reviewId(manifest.base.sha, manifest.head.sha);
  const { images, ...header } = manifest;
  const existing = await db
    .prepare('SELECT id FROM reviews WHERE id = ?1')
    .bind(id)
    .first();

  const statements = [
    db
      .prepare(
        `INSERT INTO reviews (id, created_at, title, counts, total, header)
         VALUES (?1, ?2, ?3, ?4, ?5, ?6)
         ON CONFLICT (id) DO UPDATE SET title = excluded.title, counts = excluded.counts,
           total = excluded.total, header = excluded.header`
      )
      .bind(
        id,
        now,
        manifest.title,
        JSON.stringify(countImages(images)),
        images.filter(needsDecision).length + (header.texts?.length ?? 0),
        JSON.stringify(header)
      ),
    db.prepare('DELETE FROM review_images WHERE review_id = ?1').bind(id),
  ];
  for (let part = 0; part * IMAGES_PER_PART < images.length; part++) {
    statements.push(
      db
        .prepare(
          'INSERT INTO review_images (review_id, part, images) VALUES (?1, ?2, ?3)'
        )
        .bind(
          id,
          part,
          JSON.stringify(
            images.slice(part * IMAGES_PER_PART, (part + 1) * IMAGES_PER_PART)
          )
        )
    );
  }
  statements.push(
    db
      .prepare(
        `DELETE FROM decisions WHERE review_id = ?1 AND image_id NOT IN (${DECIDABLE_ITEMS})`
      )
      .bind(id)
  );
  await db.batch(statements);
  return { id, created: !existing };
}

export async function listReviews(
  db: D1Database,
  limit = 200
): Promise<ReviewSummary[]> {
  const { results } = await db
    .prepare(
      `SELECT ${SUMMARY_COLUMNS} FROM reviews r ORDER BY r.created_at DESC, r.id DESC LIMIT ?1`
    )
    .bind(limit)
    .all<ReviewRow>();
  return results.map(toSummary);
}

export async function getSummary(
  db: D1Database,
  id: string
): Promise<ReviewSummary | undefined> {
  const row = await db
    .prepare(`SELECT ${SUMMARY_COLUMNS} FROM reviews r WHERE r.id = ?1`)
    .bind(id)
    .first<ReviewRow>();
  return row ? toSummary(row) : undefined;
}

const DECISIONS = `SELECT image_id AS imageId, status, comment, reviewer, updated_at AS updatedAt
  FROM decisions WHERE review_id = ?1`;

export async function getDecisions(
  db: D1Database,
  id: string
): Promise<Decision[]> {
  const { results } = await db.prepare(DECISIONS).bind(id).all<Decision>();
  return results;
}

export async function getReview(
  db: D1Database,
  id: string
): Promise<ReviewDetail | undefined> {
  const [reviews, parts, decisions] = await db.batch([
    db
      .prepare(
        `SELECT ${SUMMARY_COLUMNS}, r.header FROM reviews r WHERE r.id = ?1`
      )
      .bind(id),
    db
      .prepare(
        'SELECT images FROM review_images WHERE review_id = ?1 ORDER BY part'
      )
      .bind(id),
    db.prepare(DECISIONS).bind(id),
  ]);
  const row = reviews?.results[0] as
    (ReviewRow & { header: string }) | undefined;
  if (!row) {
    return undefined;
  }
  const images = (parts?.results ?? []).flatMap(
    (part) => JSON.parse(part.images as string) as ReviewImage[]
  );
  return {
    ...toSummary(row),
    manifest: {
      ...(JSON.parse(row.header) as Omit<ReviewManifest, 'images'>),
      images,
    },
    decisions: (decisions?.results ?? []) as unknown as Decision[],
  };
}

export async function latestReviewId(
  db: D1Database
): Promise<string | undefined> {
  const row = await db
    .prepare('SELECT id FROM reviews ORDER BY created_at DESC, id DESC LIMIT 1')
    .first<{ id: string }>();
  return row?.id;
}

export interface DecisionInput {
  imageIds: string[];
  /** null withdraws the decision */
  status: DecisionStatus | null;
  comment: string;
  reviewer: string;
}

/** Records one decision for the given images; ids that are not part of the review are ignored */
export async function setDecisions(
  db: D1Database,
  id: string,
  input: DecisionInput,
  now: string
): Promise<number> {
  const ids = JSON.stringify(input.imageIds);
  const result = input.status
    ? await db
        .prepare(
          `INSERT INTO decisions (review_id, image_id, status, comment, reviewer, updated_at)
           SELECT ?1, ids.value, ?2, ?3, ?4, ?5 FROM json_each(?6) ids
           WHERE ids.value IN (${DECIDABLE_ITEMS})
           ON CONFLICT (review_id, image_id) DO UPDATE SET status = excluded.status,
             comment = excluded.comment, reviewer = excluded.reviewer, updated_at = excluded.updated_at`
        )
        .bind(id, input.status, input.comment, input.reviewer, now, ids)
        .run()
    : await db
        .prepare(
          `DELETE FROM decisions WHERE review_id = ?1
           AND image_id IN (SELECT value FROM json_each(?2))`
        )
        .bind(id, ids)
        .run();
  return result.meta.changes ?? 0;
}

/**
 * Closes a review once every image is decided: approved when all images were
 * accepted, changes requested as soon as one was rejected.
 */
export async function finishReview(
  db: D1Database,
  id: string,
  reviewer: string,
  now: string
): Promise<{ summary?: ReviewSummary; undecided: number }> {
  const summary = await getSummary(db, id);
  if (!summary) {
    return { undecided: 0 };
  }
  const undecided = summary.total - summary.accepted - summary.rejected;
  if (undecided > 0) {
    return { undecided };
  }
  const status: ReviewStatus =
    summary.rejected > 0 ? 'changes_requested' : 'approved';
  await db
    .prepare(
      'UPDATE reviews SET status = ?2, finished_at = ?3, finished_by = ?4 WHERE id = ?1'
    )
    .bind(id, status, now, reviewer)
    .run();
  return {
    summary: { ...summary, status, finishedAt: now, finishedBy: reviewer },
    undecided: 0,
  };
}

export async function reopenReview(db: D1Database, id: string): Promise<void> {
  await db
    .prepare(
      `UPDATE reviews SET status = 'open', finished_at = NULL, finished_by = NULL WHERE id = ?1`
    )
    .bind(id)
    .run();
}
