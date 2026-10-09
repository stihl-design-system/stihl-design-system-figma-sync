import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

export interface ComponentConfig {
  id: string;
  title: string;
  nodeId: string;
  output: string;
  imageDir: string;
}

export interface SyncConfig {
  fileKey: string;
  /** fontSize (as string key) to Markdown heading level */
  headingLevels: Record<string, number>;
  imageExport: { format: 'png' | 'svg'; scale: number };
  components: ComponentConfig[];
}

export function loadConfig(path = 'components.config.json'): SyncConfig {
  return JSON.parse(readFileSync(resolve(path), 'utf8')) as SyncConfig;
}

export function selectComponents(
  config: SyncConfig,
  ids: string[]
): ComponentConfig[] {
  if (ids.length === 0) {
    return config.components;
  }
  return ids.map((id) => {
    const component = config.components.find((c) => c.id === id);
    if (!component) {
      throw new Error(
        `Unknown component "${id}" (known: ${config.components.map((c) => c.id).join(', ')})`
      );
    }
    return component;
  });
}
