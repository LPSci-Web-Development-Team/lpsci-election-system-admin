// ANCHOR React Icons
import { user } from 'react-icons-kit/fa/user';

// ANCHOR Interfaces
import { IMiniSidebar } from '@interfaces/Sidebar';

// ANCHOR Links
import { CANDIDATE_LINKS } from './link';

// ANCHOR Dashboard links
export const CANDIDATE: IMiniSidebar = {
  icon: user,
  label: 'Candidates',
  identifier: 'candidate',
  sublinks: CANDIDATE_LINKS,
};
