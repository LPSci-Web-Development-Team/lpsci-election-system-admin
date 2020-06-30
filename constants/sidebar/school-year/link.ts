// ANCHOR React Icons
import { eye } from 'react-icons-kit/fa/eye';
import { plus } from 'react-icons-kit/fa/plus';
import { pencilSquareO } from 'react-icons-kit/fa/pencilSquareO';

// ANCHOR Interfaces
import { ILargeSidebar } from '@interfaces/Sidebar';

// ANCHOR Dashboard links
export const SCHOOL_YEAR_LINKS: ILargeSidebar[] = [
  {
    head: 'Browse',
    links: [
      {
        label: 'View',
        href: '/school-year/view',
        icon: eye,
      },
    ],
  },
  {
    head: 'Manage',
    links: [
      {
        label: 'Create',
        href: '/school-year/create',
        icon: plus,
      },
      {
        label: 'Update',
        href: '/school-year/update',
        icon: pencilSquareO,
      },
    ],
  },
];
