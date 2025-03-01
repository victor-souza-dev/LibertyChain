import { defineConfig } from 'vitepress';
import { ptbr } from './locales/ptbr';
import { en } from './locales/en';

export default defineConfig({
  srcDir: 'src',
  title: 'DNAT',
  description: 'Do Nada ao Tudo',
  locales: {
    root: ptbr,
    en,
  },
});
