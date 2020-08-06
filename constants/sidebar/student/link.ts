// ANCHOR React Icons
import { user } from 'react-icons-kit/fa/user';
import { plus } from 'react-icons-kit/fa/plus';

// ANCHOR Interfaces
import { ILargeSidebar } from '@interfaces/Sidebar';

// ANCHOR Dashboard links
export const STUDENT_LINKS: ILargeSidebar[] = [
  {
    head: 'Browse',
    links: [
      {
        label: 'View Students',
        href: '/student/view',
        icon: user,
      },
    ],
  },
  {
    head: 'Manage',
    links: [
      {
        label: 'Create a Student',
        href: '/student/create',
        icon: plus,
      },
    ],
  },
];
