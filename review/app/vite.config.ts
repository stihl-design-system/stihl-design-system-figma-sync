import { getResetStyles } from '@stihl-design-system/components/partials';
import react from '@vitejs/plugin-react';
import { defineConfig, type Plugin } from 'vite';

/** `wrangler dev -c review/wrangler.jsonc --port 8788` serves API and images during `npm run review:dev` */
const WORKER = 'http://localhost:8788';

/** The CSS reset of the design system has to sit in the head, before any component style */
function designSystemReset(): Plugin {
  return {
    name: 'design-system-reset',
    transformIndexHtml: (html) =>
      html.replace(
        '<!-- ds-reset-styles -->',
        getResetStyles({ format: 'html' }) as string
      ),
  };
}

export default defineConfig({
  root: import.meta.dirname,
  plugins: [react(), designSystemReset()],
  build: {
    outDir: '../public',
    emptyOutDir: true,
  },
  server: {
    proxy: { '/api': WORKER, '/img': WORKER, '/latest': WORKER },
  },
});
