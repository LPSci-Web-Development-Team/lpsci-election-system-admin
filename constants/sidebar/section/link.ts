// ANCHOR React Icons
import { eye } from 'react-icons-kit/fa/eye';
import { plus } from 'react-icons-kit/fa/plus';

// ANCHOR Interfaces
import { ILargeSidebar } from '@interfaces/Sidebar';

// ANCHOR Dashboard links
export const SECTION_LINKS: ILargeSidebar[] = [
  {
    head: 'Browse',
    links: [
      {
        label: 'View Sections',
        href: '/section/view',
        icon: eye,
      },
    ],
  },
  {
    head: 'Manage',
    links: [
      {
        label: 'Create a Section',
        href: '/section/create',
        icon: plus,
      },
    ],
  },
];
