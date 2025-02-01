import { defineConfig } from 'vitepress';
import redirect from 'vite-plugin-redirect';
import { ptbr } from './locales/ptbr';
import { en } from './locales/en';

export default defineConfig({
  srcDir: 'src',
  title: 'DNAT',
  description: 'Do Nada ao Tudo',
  vite: {
    resolve: {
      alias: {
        '/assets/': `${process.cwd()}/assets/`,
      },
    },
    plugins: [
      redirect({
        '/': '/ptbr/',
      }),
    ],
  },
  locales: {
    ptbr,
    en,
  },
});
