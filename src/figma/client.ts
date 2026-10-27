import type {
  GetFileNodesResponse,
  GetFileResponse,
  GetFileVersionsResponse,
  GetImagesResponse,
  Version,
} from '@figma/rest-api-spec';

const BASE_URL = 'https://api.figma.com/v1';
const MAX_RETRIES = 5;
const MAX_VERSION_PAGES = 10;

export type FileMeta = Pick<
  GetFileResponse,
  'name' | 'version' | 'lastModified'
>;

export interface FigmaClient {
  getFileMeta(fileKey: string): Promise<FileMeta>;
  /** Newest version that a designer saved with a label, or undefined if none exists */
  getLatestNamedVersion(fileKey: string): Promise<Version | undefined>;
  getNodes(
    fileKey: string,
    ids: string[],
    version?: string
  ): Promise<GetFileNodesResponse>;
  getImages(
    fileKey: string,
    ids: string[],
    options: { format: 'png' | 'svg'; scale: number; version?: string }
  ): Promise<GetImagesResponse>;
}

export function createFigmaClient(token: string): FigmaClient {
  async function request<T>(
    path: string,
    params: Record<string, string | undefined>
  ): Promise<T> {
    const url = path.startsWith('https://')
      ? new URL(path)
      : new URL(`${BASE_URL}${path}`);
    for (const [key, value] of Object.entries(params)) {
      if (value !== undefined) {
        url.searchParams.set(key, value);
      }
    }

    for (let attempt = 0; ; attempt++) {
      let response: Response;
      try {
        response = await fetch(url, {
          headers: { 'X-Figma-Token': token },
        });
      } catch (error) {
        if (attempt >= MAX_RETRIES) {
          const cause = (error as { cause?: { message?: string } }).cause;
          throw new Error(
            `Figma API request failed for ${url.pathname}: ${cause?.message ?? (error as Error).message}`
          );
        }
        console.warn(`Network error for ${url.pathname}, retrying`);
        await new Promise((resolve) =>
          setTimeout(resolve, 2 ** attempt * 1000)
        );
        continue;
      }
      const transient = response.status === 429 || response.status >= 500;
      if (transient && attempt < MAX_RETRIES) {
        const retryAfter = Number(response.headers.get('Retry-After') ?? '0');
        const delayMs = (retryAfter > 0 ? retryAfter : 2 ** attempt) * 1000;
        console.warn(
          `Figma API ${response.status} for ${url.pathname}, retrying in ${delayMs / 1000}s`
        );
        await new Promise((resolve) => setTimeout(resolve, delayMs));
        continue;
      }
      if (!response.ok) {
        const body = await response.text();
        throw new Error(
          `Figma API ${response.status} for ${url.pathname}: ${body}`
        );
      }
      return (await response.json()) as T;
    }
  }

  return {
    async getFileMeta(fileKey) {
      const file = await request<GetFileResponse>(`/files/${fileKey}`, {
        depth: '1',
      });
      return {
        name: file.name,
        version: file.version,
        lastModified: file.lastModified,
      };
    },
    async getLatestNamedVersion(fileKey) {
      let page: string | null = `/files/${fileKey}/versions`;
      for (let i = 0; page && i < MAX_VERSION_PAGES; i++) {
        const response: GetFileVersionsResponse =
          await request<GetFileVersionsResponse>(page, { page_size: '50' });
        const named = response.versions.find((v) => v.label);
        if (named) {
          return named;
        }
        page = response.pagination.next_page ?? null;
      }
      return undefined;
    },
    getNodes(fileKey, ids, version) {
      return request<GetFileNodesResponse>(`/files/${fileKey}/nodes`, {
        ids: ids.join(','),
        version,
      });
    },
    getImages(fileKey, ids, { format, scale, version }) {
      return request<GetImagesResponse>(`/images/${fileKey}`, {
        ids: ids.join(','),
        format,
        scale: String(scale),
        version,
      });
    },
  };
}

export function requireToken(): string {
  const token = process.env.FIGMA_TOKEN;
  if (!token) {
    throw new Error(
      'FIGMA_TOKEN is not set (add it to .env or the environment)'
    );
  }
  return token;
}
