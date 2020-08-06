// ANCHOR Interfaces
import { IMiniSidebar } from '@interfaces/Sidebar';

// ANCHOR Links
import { DASHBOARD } from './dashboard';
import { STUDENT } from './student';
import { SCHOOL_YEAR } from './school-year';
import { SECTION } from './section';
import { PARTY } from './party';
import { CANDIDATE } from './candidate';

// ANCHOR Mini sidebar links
export const MINI_SIDEBAR: IMiniSidebar[] = [
  DASHBOARD,
  STUDENT,
  SECTION,
  PARTY,
  CANDIDATE,
  SCHOOL_YEAR,
];
