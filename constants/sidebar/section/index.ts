// ANCHOR React Icons
import { book } from 'react-icons-kit/fa/book';

// ANCHOR Interfaces
import { IMiniSidebar } from '@interfaces/Sidebar';

// ANCHOR Links
import { SECTION_LINKS } from './link';

// ANCHOR Dashboard links
export const SECTION: IMiniSidebar = {
  icon: book,
  label: 'Sections',
  identifier: 'section',
  sublinks: SECTION_LINKS,
};
