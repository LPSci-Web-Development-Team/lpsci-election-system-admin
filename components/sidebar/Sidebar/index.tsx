// ANCHOR React
import * as React from 'react';

// ANCHOR Components
import { SidebarContainer } from '../SidebarContainer';
import { SidebarHeading } from '../SidebarHeading';
import { SidebarSelection } from '../SidebarSelection';

export const Sidebar = React.memo(() => (
  <SidebarContainer>
    <SidebarHeading />
    <SidebarSelection />
  </SidebarContainer>
));
