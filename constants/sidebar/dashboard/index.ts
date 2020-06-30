// ANCHOR React Icons
import { dashboard } from 'react-icons-kit/fa/dashboard';

// ANCHOR Interfaces
import { IMiniSidebar } from '@interfaces/Sidebar';

// ANCHOR Links
import { DASHBOARD_LINKS } from './link';

// ANCHOR Dashboard links
export const DASHBOARD: IMiniSidebar = {
  icon: dashboard,
  label: 'Dashboard',
  identifier: 'dashboard',
  sublinks: DASHBOARD_LINKS,
};
