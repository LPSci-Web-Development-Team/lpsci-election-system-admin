// ANCHOR Interfaces
import { IMiniSidebar } from '@interfaces/Sidebar';

// ANCHOR Links
import { DASHBOARD } from './dashboard';
import { STUDENT } from './student';
import { SCHOOL_YEAR } from './school-year';

// ANCHOR Mini sidebar links
export const MINI_SIDEBAR: IMiniSidebar[] = [
  DASHBOARD,
  STUDENT,
  SCHOOL_YEAR,
];
