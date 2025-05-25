// https://vitepress.dev/guide/custom-theme
import {
  NolebaseEnhancedReadabilitiesMenu,
  NolebaseEnhancedReadabilitiesScreenMenu,
} from '@nolebase/vitepress-plugin-enhanced-readabilities/client';
import '@nolebase/vitepress-plugin-enhanced-readabilities/client/style.css';
import { NolebaseGitChangelogPlugin } from '@nolebase/vitepress-plugin-git-changelog/client';
import '@nolebase/vitepress-plugin-git-changelog/client/style.css';
import vitepressNprogress from '../plugins/nProgress/index';
import DefaultTheme from 'vitepress/theme';
import { h } from 'vue';
import Layout from './Layout.vue';
import './style.css';

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(Layout, null, {
      'nav-bar-content-after': () => h(NolebaseEnhancedReadabilitiesMenu),
      'nav-screen-content-after': () =>
        h(NolebaseEnhancedReadabilitiesScreenMenu),
    });
  },
  enhanceApp: ({ app, router }) => {
    app.use(NolebaseGitChangelogPlugin);
    vitepressNprogress(router);
  },
};
