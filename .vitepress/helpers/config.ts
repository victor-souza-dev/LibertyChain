import fs from 'fs';
import path from 'path';
import { VitePressSidebarOptions } from 'vitepress-sidebar/types';
import { INavItem, ISidebar, ISidebarItem } from '../types';
import { generateSidebar } from 'vitepress-sidebar';
import { StringUtils } from './stringUtils';
import { pipe } from './pipe';

type SidebarConfig = VitePressSidebarOptions | VitePressSidebarOptions[];

export class ConfigHelper {
  private static folderPriorityOrder = ['TI'];
  private static ignoredFolders = ['assets'];
  private static basePath = path.resolve(__dirname, `../../src`);

  private static indexConfig: VitePressSidebarOptions = {
    includeRootIndexFile: true,
    includeEmptyFolder: true,
    useFolderTitleFromIndexFile: true,
  };

  private static formatterConfig: VitePressSidebarOptions = {
    underscoreToSpace: true,
    useTitleFromFrontmatter: true,
    useTitleFromFileHeading: true,
  };

  private static sortConfig: VitePressSidebarOptions = {
    sortFolderTo: 'bottom',
    sortMenusOrderNumericallyFromTitle: true,
    manualSortFileNameByPriority: ['index.md'],
  };

  public static getSidebarConfig(locale: string): ISidebar | ISidebarItem[] {
    const params = this.getSidebarParams(locale);
    const config: ISidebarItem =
      Object.values(generateSidebar(params))[0] || {};

    function normalizeTextFields(obj: any) {
      if (Array.isArray(obj)) {
        obj.forEach(normalizeTextFields);
      } else if (obj && typeof obj === 'object') {
        if (typeof obj.text === 'string') {
          obj.text = StringUtils.normalizeString(obj.text);
        }
        Object.values(obj).forEach(normalizeTextFields);
      }
    }

    normalizeTextFields(config);

    return [config];
  }

  private static getSidebarParams(locale: string): SidebarConfig {
    const items = this.sortByFolderPriority(this.getFolders(locale));

    return items.map((sidebar) => ({
      documentRootPath: `src/${locale}`,
      scanStartPath: `/${sidebar}`,
      basePath: `/${locale}/`,
      resolvePath: `/${locale}/`,

      ...this.indexConfig,
      ...this.formatterConfig,
      ...this.sortConfig,

      collapsed: true,
    }));
  }

  public static getNavbarConfig(locale: string): INavItem[] {
    const items = this.sortByFolderPriority(this.getFolders(locale));

    const navbars = items.map((folder) => {
      const folderTitle = this.getFolderTitleFromIndexFile(locale, folder);

      const text = folderTitle
        ? folderTitle
        : pipe(StringUtils.normalizeString)(folder.replace(/[_]/g, ' '));

      return {
        text,
        link: `/${locale}/${folder}/`,
      };
    });

    return [{ text: 'Página Inicial', link: `/${locale}/` }, ...navbars];
  }

  private static getFolderTitleFromIndexFile(
    locale: string,
    folder: string,
  ): string | undefined {
    const indexFilePath = path.join(this.basePath, locale, folder, 'index.md');

    if (fs.existsSync(indexFilePath)) {
      const fileContent = fs.readFileSync(indexFilePath, 'utf-8');
      const titleMatch = fileContent.match(/^#\s+(.*)$/m);
      if (titleMatch) {
        return titleMatch[1].trim();
      }
    }

    return undefined;
  }

  private static getFolders(locale: string): string[] {
    const srcPath = path.join(this.basePath, locale);

    return fs
      .readdirSync(srcPath)
      .filter((file) => fs.statSync(path.join(srcPath, file)).isDirectory())
      .filter((folder) => !this.ignoredFolders.includes(folder));
  }

  private static sortByFolderPriority(items: string[]): string[] {
    return items.sort((a, b) => {
      const aIndex = this.folderPriorityOrder.indexOf(a);
      const bIndex = this.folderPriorityOrder.indexOf(b);
      if (aIndex === -1 && bIndex === -1) return a.localeCompare(b);
      if (aIndex === -1) return 1;
      if (bIndex === -1) return -1;
      return aIndex - bIndex;
    });
  }
}
