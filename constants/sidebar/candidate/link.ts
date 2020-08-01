// ANCHOR React Icons
import { eye } from 'react-icons-kit/fa/eye';
import { plus } from 'react-icons-kit/fa/plus';

// ANCHOR Interfaces
import { ILargeSidebar } from '@interfaces/Sidebar';

// ANCHOR Dashboard links
export const CANDIDATE_LINKS: ILargeSidebar[] = [
  {
    head: 'Browse',
    links: [
      {
        label: 'View Candidates',
        href: '/candidate/view',
        icon: eye,
      },
    ],
  },
  {
    head: 'Manage',
    links: [
      {
        label: 'Add a Candidate',
        href: '/candidate/create',
        icon: plus,
      },
    ],
  },
];
