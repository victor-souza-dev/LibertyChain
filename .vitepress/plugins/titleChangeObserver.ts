import fs from 'fs';
import { Plugin } from 'vitepress';

export function titleChangeObserver() {
  const TITLE_REGEX = /^#\s/m;

  // Paths to themeConfig files to watch (sidebar, locales, helpers)
  const configWatchPatterns: RegExp[] = [
    /config\.ts$/, // config file
    /helpers\//, // helpers folder
    /locales\/.*\.ts$/, // locale themeConfig
  ];

  return {
    name: 'vitepress-title-observer',

    handleHotUpdate({ file, server }) {
      const isMarkdown = file.endsWith('.md');
      const isConfigChange = configWatchPatterns.some((pattern) =>
        pattern.test(file),
      );

      if (!isMarkdown && !isConfigChange) return;

      // If MD gained a title or config changed, restart
      let shouldRestart = false;

      if (isMarkdown) {
        try {
          const content = fs.readFileSync(file, 'utf-8');
          if (TITLE_REGEX.test(content)) {
            shouldRestart = true;
          }
        } catch {}
      }

      if (isConfigChange) {
        shouldRestart = true;
      }

      if (shouldRestart) {
        console.log(
          `[AutoRestart] Change detected in ${file}. Restarting server...`,
        );
        server.restart();
      }
    },
  } as Plugin;
}
