export interface ILargeSidebarLink {
  label: string;
  href: string;
}

export interface ILargeSidebar {
  head: string;
  links: ILargeSidebarLink[];
}

export interface IMiniSidebar {
  icon: any,
  label: string,
  key: string,
  sublinks: ILargeSidebar[]
}
