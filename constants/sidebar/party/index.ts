// ANCHOR React Icons
import { legal } from 'react-icons-kit/fa/legal';

// ANCHOR Interfaces
import { IMiniSidebar } from '@interfaces/Sidebar';

// ANCHOR Links
import { PARTY_LINKS } from './link';

// ANCHOR Dashboard links
export const PARTY: IMiniSidebar = {
  icon: legal,
  label: 'Parties',
  identifier: 'party',
  sublinks: PARTY_LINKS,
};
