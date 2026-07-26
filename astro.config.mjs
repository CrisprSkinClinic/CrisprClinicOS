import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// Staff-tools repo config -- deliberately no sitemap() integration
// (that's for public SEO pages only) and no `site:` URL pinned to the
// public domain, since this deploys to its own Netlify site/subdomain.
// Update `site` below once the real staff subdomain is decided.
export default defineConfig({
  site: 'https://staff.crisprdermatology.com',
  prefetch: true,
  integrations: [
    tailwind()
  ]
});
