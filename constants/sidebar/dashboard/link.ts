// ANCHOR React Icons
import { barChart } from 'react-icons-kit/fa/barChart';

// ANCHOR Interfaces
import { ILargeSidebar } from '@interfaces/Sidebar';

// ANCHOR Dashboard links
export const DASHBOARD_LINKS: ILargeSidebar[] = [
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
];
