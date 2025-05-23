import include from 'markdown-it-include';
import { resolve } from 'path';
import { defineConfig } from 'vitepress';
import lightbox from 'vitepress-plugin-lightbox';
import { createAlias } from './helpers/createAlias';
import { en } from './locales/en';
import { ptbr } from './locales/ptbr';
import { titleChangeObserver } from './plugins/titleChangeObserver';
import { v4 } from 'uuid';

export default defineConfig({
  vite: {
    plugins: [titleChangeObserver()],
    resolve: {
      alias: {
        '@helpers': `${process.cwd()}/.vitepress/helpers`,
        '@assets': `${process.cwd()}/src/assets`,
      },
    },
    optimizeDeps: {
      exclude: [
        '@nolebase/vitepress-plugin-enhanced-readabilities/client',
        'vitepress',
        '@nolebase/ui',
      ],
    },
    ssr: {
      noExternal: [
        '@nolebase/vitepress-plugin-enhanced-readabilities',
        '@nolebase/ui',
      ],
    },
  },
  markdown: {
    config(md) {
      md.use(include, {
        root: resolve(__dirname, 'public'),
        includeRe: /:::\s*include\s+(.*?)\s*:::/g,
      });

      createAlias(md, '@assets', '/assets');
      md.use(lightbox, {});
    },
    image: {
      lazyLoading: true,
    },
  },
  srcDir: 'src',
  title: '📚 DNAT',
  description: 'Do Nada ao Tudo',
  lastUpdated: true,
  themeConfig: {
    lastUpdated: {
      text: 'Última atualização',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium',
      },
    },
    search: {
      provider: 'local',
      options: {
        miniSearch: {
          options: {
            extractField: (doc, field) => {
              if (field === 'id') {
                return `${v4()}-${doc.path}`;
              }
              return doc[field];
            },
          },
          searchOptions: {
            fuzzy: 0.2,
            prefix: true,
            boost: { title: 4, text: 2, headers: 1 },
          },
        },
      },
    },
  },
  locales: {
    root: ptbr,
    // ptbr,
    // en,
  },
});
