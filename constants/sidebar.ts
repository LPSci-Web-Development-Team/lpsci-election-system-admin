// ANCHOR React Icons
import { user } from 'react-icons-kit/fa/user';
import { dashboard } from 'react-icons-kit/fa/dashboard';

// ANCHOR Interfaces
import { IMiniSidebar } from '@interfaces/Sidebar';

// ANCHOR Mini sidebar links
export const MINI_SIDEBAR: IMiniSidebar[] = [
  {
    icon: dashboard,
    label: 'Dashboard',
    identifier: 'dashboard',
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
    identifier: 'students',
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
