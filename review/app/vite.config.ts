import {
  getMetaIconLinks,
  getResetStyles,
} from '@stihl-design-system/components/partials';
import react from '@vitejs/plugin-react';
import { defineConfig, type Plugin } from 'vite';

/** `wrangler dev -c review/wrangler.jsonc --port 8788` serves API and images during `npm run review:dev` */
const WORKER = 'http://localhost:8788';

/**
 * Head partials of the design system: favicon and touch icons (the files are
 * copied to app/public by `npm run review:icons`) and the CSS reset, which has
 * to sit in the head before any component style.
 */
function designSystemHead(): Plugin {
  return {
    name: 'design-system-head',
    transformIndexHtml: (html) =>
      html
        .replace('<!-- ds-meta-icons -->', getMetaIconLinks({ format: 'html' }))
        .replace(
          '<!-- ds-reset-styles -->',
          getResetStyles({ format: 'html' }) as string
        ),
  };
}

export default defineConfig({
  root: import.meta.dirname,
  plugins: [react(), designSystemHead()],
  build: {
    outDir: '../public',
    emptyOutDir: true,
  },
  server: {
    proxy: { '/api': WORKER, '/img': WORKER, '/latest': WORKER },
  },
});
