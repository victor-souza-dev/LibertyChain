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

  private static indexConfig: VitePressSidebarOptions = {
    includeFolderIndexFile: true,
    includeRootIndexFile: true,
    useFolderLinkFromIndexFile: true,
    useFolderTitleFromIndexFile: true,
    includeEmptyFolder: true,
  };

  private static formatterConfig: VitePressSidebarOptions = {
    hyphenToSpace: true,
    useTitleFromFrontmatter: true,
    useTitleFromFileHeading: true,
  };

  private static sortConfig: VitePressSidebarOptions = {
    sortFolderTo: 'bottom',
    sortMenusByFrontmatterOrder: true,
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

    const navbars = items.map((navbar) => ({
      text: pipe(StringUtils.normalizeString)(navbar.replace(/[-_]/g, ' ')),
      link: `/${locale}/${navbar}/`,
    }));

    return [{ text: 'Página Inicial', link: '/' }, ...navbars];
  }

  private static getFolders(locale: string): string[] {
    const srcPath = path.resolve(__dirname, `../../src/${locale}`);

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
