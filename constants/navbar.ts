// ANCHOR React Icons
import { user } from 'react-icons-kit/fa/user';

// ANCHOR Interfaces
import { INavLink } from '@interfaces/Navbar';

// ANCHOR Popover links
export const NAV_LINKS: INavLink[] = [
  {
    label: 'My Profile',
    href: '/profile',
    icon: user,
  },
];
