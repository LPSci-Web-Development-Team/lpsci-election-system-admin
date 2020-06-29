// ANCHOR React Icons
import { user } from 'react-icons-kit/fa/user';
import { home } from 'react-icons-kit/fa/home';

// ANCHOR Interfaces
import { IMiniSidebar } from '@interfaces/Sidebar';

// ANCHOR Mini sidebar links
export const MINI_SIDEBAR: IMiniSidebar[] = [
  {
    icon: home,
    label: 'Dashboard',
    key: 'dashboard',
    sublinks: [
      {
        head: 'School Year',
        links: [
          {
            label: 'Statistics',
            href: '/dashboard/statistics',
          },
          {
            label: 'Analytics',
            href: '/dashboard/analytics',
          },
        ],
      },
    ],
  },
  {
    icon: user,
    label: 'Students',
    key: 'students',
    sublinks: [
      {
        head: 'Browse',
        links: [
          {
            label: 'View',
            href: '/students/view',
          },
        ],
      },
      {
        head: 'Manage',
        links: [
          {
            label: 'Update',
            href: '/students/update',
          },
          {
            label: 'Delete',
            href: '/students/delete',
          },
        ],
      },
    ],
  },
];
