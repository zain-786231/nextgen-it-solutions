// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Update `site` when you move to a custom domain (see docs/CLOUDFLARE_DEPLOYMENT.md)
export default defineConfig({
  site: 'https://nextgenitsolutions.pages.dev',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
  vite: { plugins: [tailwindcss()] },
});
