import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://donotdisturb.thehouse.pt',
  trailingSlash: 'never',
  integrations: [mdx()],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'pt'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  vite: {
    server: { fs: { allow: ['..'] } },
  },
});
