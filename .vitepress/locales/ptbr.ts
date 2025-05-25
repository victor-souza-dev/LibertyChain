import { ConfigHelper } from '../helpers/config';
import { ILocaleConfig } from '../types';

export const ptbr: ILocaleConfig = {
  label: 'Português',
  lang: 'pt-BR',
  title: 'DNAT',
  description: 'Do Nada ao Tudo',
  themeConfig: {
    nav: ConfigHelper.getNavbarConfig('ptbr'),
    sidebar: ConfigHelper.getSidebarConfig('ptbr'),
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/Do-nada-ao-tudo/LibertyChain',
      },
    ],
    footer: {
      message: 'Lançado sob a Licença MIT.',
      copyright: 'Direitos Autorais © 2025 DNAT',
    },
    darkModeSwitchLabel: 'Tema',
    darkModeSwitchTitle: 'Alternar para o tema escuro',
    lightModeSwitchTitle: 'Alternar para o tema claro',
    sidebarMenuLabel: 'Menu',
    returnToTopLabel: 'Retornar ao topo',
    externalLinkIcon: true,
    outline: {
      label: 'Neste Artigo',
    },
    notFound: {
      title: 'Não encontrado',
      quote: 'A página que você está procurando não existe ou foi removida.',
      linkLabel: 'Voltar para a página inicial',
      linkText: 'Voltar para o início',
    },
  },
};
