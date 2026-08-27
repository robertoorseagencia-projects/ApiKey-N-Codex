export type NavItem =
  | {
      type: 'link';
      label: string;
      href: string;
    }
  | {
      type: 'dropdown';
      label: string;
      items: {
        label: string;
        href: string;
        description?: string;
        icon?: string;
      }[];
    };

export const navItems: NavItem[] = [
  {
    type: 'link',
    href: '/',
    label: 'Inicio',
  },
  {
    type: 'link',
    label: 'Claude Code',
    href: '/#features',
  },
  {
    type: 'link',
    label: 'Planes & Créditos',
    href: '/#pricing',
  },
  {
    type: 'link',
    label: 'FAQ',
    href: '/#faq',
  },
];
