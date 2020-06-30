// ANCHOR React Icons
import { calendarO } from 'react-icons-kit/fa/calendarO';

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
        icon: calendarO,
      },
    ],
  },
  {
    head: 'Manage',
    links: [
      {
        label: 'Update',
        href: '/school-year/update',
        icon: calendarO,
      },
      {
        label: 'Delete',
        href: '/school-year/delete',
        icon: calendarO,
      },
    ],
  },
];
