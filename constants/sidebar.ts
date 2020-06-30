// ANCHOR React Icons
import { user } from 'react-icons-kit/fa/user';
import { dashboard } from 'react-icons-kit/fa/dashboard';
import { barChart } from 'react-icons-kit/fa/barChart';

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
            href: '/',
            icon: barChart,
          },
          {
            label: 'Analytics',
            href: '/dashboard/analytics',
            icon: barChart,
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
            icon: user,
          },
        ],
      },
      {
        head: 'Manage',
        links: [
          {
            label: 'Update',
            href: '/students/update',
            icon: user,
          },
          {
            label: 'Delete',
            href: '/students/delete',
            icon: user,
          },
        ],
      },
    ],
  },
];
