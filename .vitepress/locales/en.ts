export const en = {
  label: 'English',
  lang: 'en',
  title: 'DNAT',
  description: 'From Nothing to Everything',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/en/' },
      { text: 'Docs', link: '/en/docs/getting-started' },
    ],
    sidebar: [
      {
        text: 'Docs',
        items: [
          {
            text: 'Getting Started',
            link: '/en/docs/getting-started',
          },
          {
            text: 'KeePass',
            collapsed: true,
            items: [
              {
                text: 'Introduction',
                link: '/en/docs/keepass/introduction',
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
