// ANCHOR React Icons
import { user } from 'react-icons-kit/fa/user';

// ANCHOR Interfaces
import { IMiniSidebar } from '@interfaces/Sidebar';

// ANCHOR Links
import { STUDENT_LINKS } from './link';

// ANCHOR Dashboard links
export const STUDENT: IMiniSidebar = {
  icon: user,
  label: 'Students',
  identifier: 'students',
  sublinks: STUDENT_LINKS,
};
