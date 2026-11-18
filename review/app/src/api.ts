import type {
  Decision,
  DecisionStatus,
  ReviewDetail,
  ReviewSummary,
} from '../../shared/manifest.ts';

async function request<T>(path: string, body?: unknown): Promise<T> {
  const response = await fetch(path, {
    method: body === undefined ? 'GET' : 'POST',
    headers:
      body === undefined ? undefined : { 'Content-Type': 'application/json' },
    body: body === undefined ? undefined : JSON.stringify(body),
  });
  if (!response.ok) {
    const failure = (await response.json().catch(() => undefined)) as
      { error?: string } | undefined;
    throw new Error(failure?.error ?? `Request failed (${response.status})`);
  }
  return (await response.json()) as T;
}

export const api = {
  listReviews: () =>
    request<{ reviews: ReviewSummary[] }>('/api/reviews').then(
      ({ reviews }) => reviews
    ),
  getReview: (id: string) => request<ReviewDetail>(`/api/reviews/${id}`),
  decide: (
    id: string,
    input: {
      imageIds: string[];
      status: DecisionStatus | null;
      comment?: string;
      reviewer: string;
    }
  ) =>
    request<{ decisions: Decision[] }>(`/api/reviews/${id}/decisions`, input),
  finish: (id: string, reviewer: string) =>
    request<ReviewSummary>(`/api/reviews/${id}/finish`, { reviewer }),
  reopen: (id: string) =>
    request<ReviewSummary>(`/api/reviews/${id}/reopen`, {}),
};
