import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://traciqmotion.com',
  integrations: [sitemap({ filter: (page) => !page.includes('/thanks') })],
  build: { format: 'directory' },
});
