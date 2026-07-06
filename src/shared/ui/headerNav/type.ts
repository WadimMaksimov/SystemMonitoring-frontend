interface HeaderNavItem {
  id: number;
  title: string;
  link: string;
}

export interface HeaderNavProps {
  items: HeaderNavItem[];
}
