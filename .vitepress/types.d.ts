export interface ILocaleConfig {
  label: string;
  lang: string;
  title: string;
  description: string;
  themeConfig: IThemeConfig;
}

interface IThemeConfig {
  nav: INavItem[];
  sidebar: ISidebar;
  footer?: IFooter;
  socialLinks?: ISocialLink[];
  aside?: boolean;
  darkModeSwitchLabel?: string; // Default: "Appearance"
  lightModeSwitchTitle?: string; // Default: "Switch to light theme"
  darkModeSwitchTitle?: string; // Default: "Switch to dark theme"
  sidebarMenuLabel?: string; // Default: "Menu"
  returnToTopLabel?: string; // Default: "Return to top"
  externalLinkIcon?: boolean; // Default: true
  outline?: IOutline | false;
  logo?: string;
  siteTitle?: boolean;
}

type INavItem = INavItemWithLink | INavItemWithChildren;

interface INavItemWithLink {
  text: string;
  link: string;
  activeMatch?: string;
  target?: string;
  rel?: string;
  noIcon?: boolean;
}

interface INavItemChildren {
  text?: string;
  items: INavItemWithLink[];
}

interface INavItemWithChildren {
  text?: string;
  items: (INavItemChildren | INavItemWithLink)[];
  activeMatch?: string;
}

type ISidebar = ISidebarItem[] | ISidebarMulti;

interface ISidebarMulti {
  [path: string]: ISidebarItem[] | { items: ISidebarItem[]; base: string };
}

type ISidebarItem = {
  text?: string;
  link?: string;
  items?: ISidebarItem[];
  collapsed?: boolean;
  base?: string;
  docFooterText?: string;
  rel?: string;
  target?: string;
};

interface IFooter {
  message?: string;
  copyright?: string;
}

interface ISocialLink {
  icon: string | { svg: string };
  link: string;
  ariaLabel?: string;
}

interface IOutline {
  level?: number | [number, number] | 'deep';
  label?: string;
}
