// ANCHOR React Icons
import { eye } from 'react-icons-kit/fa/eye';
import { plus } from 'react-icons-kit/fa/plus';
import { pencil } from 'react-icons-kit/fa/pencil';
import { remove } from 'react-icons-kit/fa/remove';

// ANCHOR Interfaces
import { ILargeSidebar } from '@interfaces/Sidebar';

// ANCHOR Dashboard links
export const SECTION_LINKS: ILargeSidebar[] = [
  {
    head: 'Browse',
    links: [
      {
        label: 'View',
        href: '/section/view',
        icon: eye,
      },
    ],
  },
  {
    head: 'Manage',
    links: [
      {
        label: 'Create',
        href: '/section/create',
        icon: plus,
      },
      {
        label: 'Update',
        href: '/section/update',
        icon: pencil,
      },
      {
        label: 'Delete',
        href: '/section/delete',
        icon: remove,
      },
    ],
  },
];
