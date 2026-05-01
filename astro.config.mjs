import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://donotdisturb.thehouse.pt',
  trailingSlash: 'never',
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
