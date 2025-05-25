import include from 'markdown-it-include';
import { resolve } from 'path';
import { defineConfig } from 'vitepress';
import lightbox from 'vitepress-plugin-lightbox';
import { createAlias } from './helpers/createAlias';
import { en } from './locales/en';
import { ptbr } from './locales/ptbr';
import {
  GitChangelog,
  GitChangelogMarkdownSection,
} from '@nolebase/vitepress-plugin-git-changelog/vite';

export default defineConfig({
  vite: {
    plugins: [
      GitChangelog({
        repoURL: () => 'https://github.com/Do-nada-ao-tudo/LibertyChain',
        mapAuthors: [
          {
            name: 'Victor Souza',
            username: 'victor-souza-dev',
            mapByEmailAliases: ['victor.souza2210@gmail.com'],
          },
        ],
      }),
      GitChangelogMarkdownSection({
        exclude(id, _) {
          const isExcluded = ['index.md'];
          const filePath = id.replace(/^.*?(?=src\/)/, '');

          return isExcluded.some((path) => filePath.includes(path));
        },
      }),
    ],
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
  lang: 'pt-BR',
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
        locales: {
          ptbr: {
            translations: {
              button: {
                buttonText: 'Pesquisar',
                buttonAriaLabel: 'Pesquisar',
              },
              modal: {
                noResultsText: 'Nenhum resultado encontrado',
                resetButtonTitle: 'Limpar pesquisa',
                backButtonTitle: 'Voltar',
                displayDetails: 'Exibir detalhes',
                footer: {
                  selectText: 'Selecionar',
                  selectKeyAriaLabel: 'Selecionar',
                  navigateText: 'Navegar',
                  closeText: 'Fechar',
                  closeKeyAriaLabel: 'Fechar',
                  navigateUpKeyAriaLabel: 'Navegar para cima',
                  navigateDownKeyAriaLabel: 'Navegar para baixo',
                },
              },
            },
          },
        },
        miniSearch: {},
      },
    },
    siteTitle: 'DNAT',
    logo: 'https://avatars.githubusercontent.com/u/191169856?s=48&v=4',
  },
  locales: {
    ptbr: ptbr as any,
    en: en as any,
  },
});
