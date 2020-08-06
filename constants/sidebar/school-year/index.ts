// ANCHOR React Icons
import { calendarO } from 'react-icons-kit/fa/calendarO';

// ANCHOR Interfaces
import { IMiniSidebar } from '@interfaces/Sidebar';

// ANCHOR Links
import { SCHOOL_YEAR_LINKS } from './link';

// ANCHOR Dashboard links
export const SCHOOL_YEAR: IMiniSidebar = {
  icon: calendarO,
  label: 'School Year',
  identifier: 'school-year',
  sublinks: SCHOOL_YEAR_LINKS,
};
