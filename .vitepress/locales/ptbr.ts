import { ILocaleConfig } from '../types';

export const ptbr: ILocaleConfig = {
  label: 'Português',
  lang: 'pt-BR',
  title: 'DNAT',
  description: 'Do Nada ao Tudo',
  themeConfig: {
    nav: [
      { text: 'Página Inicial', link: '/' },
      { text: 'Docs', link: '/ptbr/introduction' },
    ],
    sidebar: [
      {
        text: 'DeFi para iniciantes',
        collapsed: true,
        items: [
          {
            text: 'Introdução',
            docFooterText:
              'Aprenda os fundamentos do DeFi e comece sua jornada no ecossistema.',
            link: '/ptbr/defi-for-beginners/introduction',
          },
          {
            text: 'Prefácio',
            collapsed: true,
            items: [
              {
                text: 'Promessas e Armadilhas das Finanças Descentralizadas',
                link: '/ptbr/defi-for-beginners/foreword/promises-pitfalls',
              },
              {
                text: 'Para Quem é Este Livro',
                link: '/ptbr/defi-for-beginners/foreword/target-audience',
              },
            ],
          },
          {
            text: 'Parte I: Fundamentos do DeFi',
            collapsed: true,
            items: [
              {
                text: 'Capítulo 1: O que é DeFi?',
                link: '/ptbr/defi-for-beginners/foundations/what-is-defi',
              },
              {
                text: 'Capítulo 2: Fundamentos de Blockchain',
                link: '/ptbr/defi-for-beginners/foundations/blockchain-basics',
              },
              {
                text: 'Capítulo 3: Fundamentos de Criptomoedas',
                link: '/ptbr/defi-for-beginners/foundations/crypto-essentials',
              },
              {
                text: 'Capítulo 4: Começando com Segurança',
                link: '/ptbr/defi-for-beginners/foundations/getting-started',
              },
            ],
          },
          {
            text: 'Parte II: Ecossistema e Aplicações DeFi',
            collapsed: true,
            items: [
              {
                text: 'Capítulo 5: Exchanges Descentralizadas (DEXs)',
                link: '/ptbr/defi-for-beginners/ecosystem/dexs',
              },
              {
                text: 'Capítulo 6: Empréstimos e Financiamentos',
                link: '/ptbr/defi-for-beginners/ecosystem/lending-borrowing',
              },
              {
                text: 'Capítulo 7: Yield Farming e Mineração de Liquidez',
                link: '/ptbr/defi-for-beginners/ecosystem/yield-farming',
              },
              {
                text: 'Capítulo 8: Staking e Governança',
                link: '/ptbr/defi-for-beginners/ecosystem/staking-governance',
              },
            ],
          },
          {
            text: 'Parte III: Mantendo-se Seguro no DeFi',
            collapsed: true,
            items: [
              {
                text: 'Capítulo 9: Entendendo os Riscos do DeFi',
                link: '/ptbr/defi-for-beginners/safety/understanding-risks',
              },
              {
                text: 'Capítulo 10: Golpes Comuns e Como Identificá-los',
                link: '/ptbr/defi-for-beginners/safety/common-scams',
              },
              {
                text: 'Capítulo 11: Métodos e Ferramentas de Pesquisa',
                link: '/ptbr/defi-for-beginners/safety/research-methods',
              },
              {
                text: 'Capítulo 12: Melhores Práticas de Segurança',
                link: '/ptbr/defi-for-beginners/safety/security-practices',
              },
            ],
          },
          {
            text: 'Parte IV: Tópicos Avançados e Direções Futuras',
            collapsed: true,
            items: [
              {
                text: 'Capítulo 13: Inovações em DeFi',
                link: '/ptbr/defi-for-beginners/advanced/innovations',
              },
              {
                text: 'Capítulo 14: Panorama Regulatório',
                link: '/ptbr/defi-for-beginners/advanced/regulatory',
              },
              {
                text: 'Capítulo 15: Construindo sua Estratégia DeFi',
                link: '/ptbr/defi-for-beginners/advanced/strategy',
              },
              {
                text: 'Capítulo 16: O Futuro do DeFi',
                link: '/ptbr/defi-for-beginners/advanced/future',
              },
            ],
          },
          {
            text: 'Apêndices',
            collapsed: true,
            items: [
              {
                text: 'Apêndice A: Glossário de Termos',
                link: '/ptbr/defi-for-beginners/appendix/glossary',
              },
              {
                text: 'Apêndice B: Recursos',
                link: '/ptbr/defi-for-beginners/appendix/resources',
              },
              {
                text: 'Apêndice C: Estudos de Caso de Golpes',
                link: '/ptbr/defi-for-beginners/appendix/scam-cases',
              },
            ],
          },
        ],
      },
    ],
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
  },
};
