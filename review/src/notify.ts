import {
  describeChanges,
  type ReviewDetail,
  type ReviewSummary,
} from '../shared/manifest.ts';

const MAX_LISTED = 10;

export interface RejectedChange {
  title: string;
  comment: string;
  reviewer: string;
  /** The image or text section on the review page */
  url: string;
  figmaUrl?: string;
}

export interface NotificationInput {
  event: 'review_created' | 'review_finished';
  review: ReviewSummary;
  /** Titles of the documents with changes */
  documents: string[];
  /** Figma file and version label the review was created from */
  versions: string[];
  url: string;
  latestUrl: string;
  rejected: RejectedChange[];
}

/**
 * What the Power Automate workflow receives: `attachments` is the card it
 * posts to the Teams chat as is, the flat fields are for the mail action.
 */
export interface Notification {
  type: 'message';
  event: NotificationInput['event'];
  subject: string;
  text: string;
  html: string;
  url: string;
  latestUrl: string;
  attachments: [
    {
      contentType: 'application/vnd.microsoft.card.adaptive';
      contentUrl: null;
      content: Record<string, unknown>;
    },
  ];
}

function escapeHtml(text: string): string {
  return text.replace(
    /[&<>"']/g,
    (char) =>
      ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[
        char
      ] ?? char
  );
}

function listed(items: string[]): string {
  const rest = items.length - MAX_LISTED;
  return (
    items.slice(0, MAX_LISTED).join(', ') +
    (rest > 0 ? ` and ${rest} more` : '')
  );
}

/** Collects what a notification says about a review, from the stored review */
export function describeReview(
  detail: ReviewDetail,
  origin: string
): Pick<
  NotificationInput,
  'review' | 'documents' | 'versions' | 'url' | 'latestUrl' | 'rejected'
> {
  const { manifest, decisions, ...review } = detail;
  const url = `${origin}/r/${review.id}`;
  const documents = new Map(manifest.documents.map((d) => [d.key, d]));
  const items = new Map<
    string,
    { documentKey: string; section?: string; figmaUrl?: string }
  >([
    ...manifest.images.map(
      (
        image
      ): [
        string,
        { documentKey: string; section?: string; figmaUrl?: string },
      ] => {
        const side = image.after ?? image.before;
        return [
          image.id,
          {
            documentKey: image.documentKey,
            section: side?.section,
            figmaUrl: side?.figmaUrl,
          },
        ];
      }
    ),
    ...(manifest.texts ?? []).map(
      (
        text
      ): [
        string,
        { documentKey: string; section?: string; figmaUrl?: string },
      ] => [
        text.id,
        {
          documentKey: text.documentKey,
          section: (text.after ?? text.before)?.section,
          figmaUrl: documents.get(text.documentKey)?.sourceUrl,
        },
      ]
    ),
  ]);
  return {
    review,
    documents: manifest.documents.map((document) => document.title),
    versions: [
      ...new Set(
        manifest.documents
          .filter((document) => document.after?.label)
          .map(
            (document) =>
              `${document.figmaFile ?? 'Figma'}: ${document.after?.label}`
          )
      ),
    ],
    url,
    latestUrl: `${origin}/latest`,
    rejected: decisions
      .filter((decision) => decision.status === 'rejected')
      .map((decision) => {
        const item = items.get(decision.imageId);
        const document = documents.get(item?.documentKey ?? '')?.title;
        return {
          title: [document, item?.section].filter(Boolean).join(': '),
          comment: decision.comment,
          reviewer: decision.reviewer,
          url: `${url}?item=${encodeURIComponent(decision.imageId)}`,
          figmaUrl: item?.figmaUrl,
        };
      }),
  };
}

export function buildNotification(input: NotificationInput): Notification {
  const { review, rejected } = input;
  const created = input.event === 'review_created';
  const result =
    review.status === 'approved'
      ? 'approved'
      : `changes requested (${review.rejected} of ${review.total} changes rejected)`;
  const subject = created
    ? `Design review: ${review.title}`
    : `Design review ${review.status === 'approved' ? 'approved' : 'needs changes'}: ${review.title}`;
  const summary = created
    ? `A Figma documentation release changed the documentation: ${describeChanges(review.counts, review.texts)} in ${listed(input.documents)}. Please check whether every change was intended.`
    : `The review was finished by ${review.finishedBy ?? 'unknown'}: ${result}.`;

  const facts = [
    { title: 'Changes', value: describeChanges(review.counts, review.texts) },
    { title: 'Pages', value: listed(input.documents) },
    ...(input.versions.length > 0
      ? [{ title: 'Figma version', value: input.versions.join('; ') }]
      : []),
    ...(created ? [] : [{ title: 'Result', value: result }]),
  ];
  const shown = rejected.slice(0, MAX_LISTED);
  const hidden = rejected.length - shown.length;

  const text = [
    summary,
    ...shown.map(
      (image) =>
        `Rejected: ${image.title}${image.comment ? ` (${image.comment})` : ''} ${image.url}`
    ),
    ...(hidden > 0 ? [`and ${hidden} more rejected changes`] : []),
    `Review: ${input.url}`,
  ].join('\n');

  const html = [
    `<p>${escapeHtml(summary)}</p>`,
    `<ul>${facts.map((fact) => `<li><strong>${escapeHtml(fact.title)}:</strong> ${escapeHtml(fact.value)}</li>`).join('')}</ul>`,
    ...(shown.length > 0
      ? [
          '<p><strong>Rejected changes</strong></p>',
          `<ul>${shown
            .map(
              (image) =>
                `<li><a href="${escapeHtml(image.url)}">${escapeHtml(image.title)}</a>${image.comment ? `: ${escapeHtml(image.comment)}` : ''} (${escapeHtml(image.reviewer)}${image.figmaUrl ? `, <a href="${escapeHtml(image.figmaUrl)}">Figma</a>` : ''})</li>`
            )
            .join('')}${hidden > 0 ? `<li>and ${hidden} more</li>` : ''}</ul>`,
        ]
      : []),
    `<p><a href="${escapeHtml(input.url)}">Open the review</a> · <a href="${escapeHtml(input.latestUrl)}">Latest review</a></p>`,
  ].join('');

  return {
    type: 'message',
    event: input.event,
    subject,
    text,
    html,
    url: input.url,
    latestUrl: input.latestUrl,
    attachments: [
      {
        contentType: 'application/vnd.microsoft.card.adaptive',
        contentUrl: null,
        content: {
          $schema: 'http://adaptivecards.io/schemas/adaptive-card.json',
          type: 'AdaptiveCard',
          version: '1.4',
          body: [
            {
              type: 'TextBlock',
              text: subject,
              weight: 'Bolder',
              size: 'Medium',
              wrap: true,
            },
            { type: 'TextBlock', text: summary, wrap: true },
            { type: 'FactSet', facts },
            ...shown.map((image) => ({
              type: 'TextBlock',
              wrap: true,
              text: `Rejected: [${image.title}](${image.url})${image.comment ? `: ${image.comment}` : ''} (${image.reviewer})`,
            })),
            ...(hidden > 0
              ? [
                  {
                    type: 'TextBlock',
                    wrap: true,
                    text: `and ${hidden} more rejected changes`,
                  },
                ]
              : []),
          ],
          actions: [
            { type: 'Action.OpenUrl', title: 'Open review', url: input.url },
            {
              type: 'Action.OpenUrl',
              title: 'Latest review',
              url: input.latestUrl,
            },
          ],
        },
      },
    ],
  };
}

/** Posts to the Power Automate webhook. Without a configured webhook nothing is sent. */
export async function sendNotification(
  webhookUrl: string | undefined,
  input: NotificationInput
): Promise<boolean> {
  if (!webhookUrl) {
    return false;
  }
  const response = await fetch(webhookUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(buildNotification(input)),
  });
  if (!response.ok) {
    throw new Error(`Notification webhook answered ${response.status}`);
  }
  return true;
}
