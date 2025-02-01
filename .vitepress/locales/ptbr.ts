import type { LocaleSpecificConfig } from 'vitepress';

export const ptbr: LocaleSpecificConfig & { label: string; link?: string } = {
  label: 'Português',
  lang: 'pt-BR',
  title: 'DNAT',
  description: 'Do Nada ao Tudo',
  themeConfig: {
    nav: [
      { text: 'Página Inicial', link: '/ptbr/' },
      { text: 'Docs', link: '/ptbr/docs/getting-started' },
    ],
    sidebar: [
      {
        text: 'Docs',
        items: [
          {
            text: 'Começando',
            link: '/ptbr/docs/getting-started',
          },
          {
            text: 'KeePass',
            items: [
              {
                text: 'Introdução',
                link: '/ptbr/docs/keePass/introduction',
              },
              {
                text: 'Instalação (Desktop)',
                link: '/ptbr/docs/keePass/installation-desktop',
              },
              {
                text: 'Instalação (Mobile)',
                link: '/ptbr/docs/keePass/installation-mobile',
              },
            ],
          },
        ],
      },
    ],
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/Do-nada-ao-tudo/KeePass-Doc',
      },
    ],
  },
};
