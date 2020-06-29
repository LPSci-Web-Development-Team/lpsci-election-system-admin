// ANCHOR React Icons
import { user } from 'react-icons-kit/fa/user';

export interface ILink {
  label: string;
  href: string;
  as?: string;
  icon: any;
}

export const LINKS: ILink[] = [
  {
    label: 'My Profile',
    href: '/profile',
    icon: user,
  },
];
