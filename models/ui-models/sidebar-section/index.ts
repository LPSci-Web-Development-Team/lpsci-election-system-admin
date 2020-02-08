// ANCHOR Icons
import {
  faLock, faUser, faUsers, faUserCheck, faChartPie,
} from '@fortawesome/free-solid-svg-icons';

// ANCHOR Interface
import { ISection } from '../../interfaces/SidebarSection';

export const SECTIONS: ISection[] = [
  {
    label: 'Voters',
    Icon: faUser,
    url: '/voter',
  },
  {
    label: 'Forgot Password',
    Icon: faLock,
    url: '/forgot',
  },
  {
    label: 'Party',
    Icon: faUsers,
    url: '/party',
  },
  {
    label: 'Candidates',
    Icon: faUserCheck,
    url: '/candidate',
  },
  {
    label: 'Analytics',
    Icon: faChartPie,
    url: '/analytics',
  },
];
