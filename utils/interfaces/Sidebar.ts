export interface ILargeSidebarLink {
  label: string;
  href: string;
  icon: any,
}

export interface ILargeSidebar {
  head: string;
  links: ILargeSidebarLink[];
}

export interface IMiniSidebar {
  icon: any,
  label: string,
  identifier: string,
  sublinks: ILargeSidebar[]
}
