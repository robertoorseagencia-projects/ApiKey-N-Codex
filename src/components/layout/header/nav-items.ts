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
  {
    type: 'link',
    label: 'Dashboard Demo',
    href: 'https://claude-n-codex.com/dashboard/sk-myapi_DNjeNSKs1-_WHqEDOF7q8gZ-yiiNWy56NWB9S_rQf0fauPC11fKmQE',
  },
];
