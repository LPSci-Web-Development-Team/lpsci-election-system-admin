// ANCHOR React Icons
import { user } from 'react-icons-kit/fa/user';

// ANCHOR Interfaces
import { ILargeSidebar } from '@interfaces/Sidebar';

// ANCHOR Dashboard links
export const STUDENT_LINKS: ILargeSidebar[] = [
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
];
