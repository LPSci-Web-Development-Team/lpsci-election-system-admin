// ANCHOR React Icons
import { eye } from 'react-icons-kit/fa/eye';
import { plus } from 'react-icons-kit/fa/plus';

// ANCHOR Interfaces
import { ILargeSidebar } from '@interfaces/Sidebar';

// ANCHOR Dashboard links
export const SCHOOL_YEAR_LINKS: ILargeSidebar[] = [
  {
    head: 'Browse',
    links: [
      {
        label: 'View School Years',
        href: '/school-year/view',
        icon: eye,
      },
    ],
  },
  {
    head: 'Manage',
    links: [
      {
        label: 'Create a School Year',
        href: '/school-year/create',
        icon: plus,
      },
    ],
  },
];
