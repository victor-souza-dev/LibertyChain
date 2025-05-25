import { ConfigHelper } from '../helpers/config';
import { ILocaleConfig } from '../types';

export const en: ILocaleConfig = {
  label: 'English',
  lang: 'en-US',
  title: 'DNAT',
  description: 'From Nothing to Everything',
  themeConfig: {
    nav: ConfigHelper.getNavbarConfig('en'),
    sidebar: ConfigHelper.getSidebarConfig('en'),
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/Do-nada-ao-tudo/LibertyChain',
      },
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2025 DNAT',
    },
  },
};
