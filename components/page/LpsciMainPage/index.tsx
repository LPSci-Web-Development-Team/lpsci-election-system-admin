// ANCHOR React
import * as React from 'react';

// ANCHOR Types
import { IChildrenProps } from '@interfaces/Common';

// ANCHOR Components
import { LpsciMainLayout } from '@components/base/LpsciMainLayout';
import { LpsciMainContent } from '@components/content/LpsciMainContent';
import { LpsciNavBar } from '@components/navbar/LpsciNavBar';
import { LpsciSidebar } from '@components/sidebar/LpsciSidebar';

interface IProps extends IChildrenProps {
  hideSidebar?: boolean;
  useSidebarDrawer?: boolean;
}

export function LpsciMainPage({ hideSidebar, useSidebarDrawer, children }: IProps) {
  return (
    <LpsciMainLayout>
      <LpsciMainContent useSidebarDrawer={useSidebarDrawer}>
        {children}
      </LpsciMainContent>
      <LpsciSidebar hideInitial={hideSidebar} useDrawer={useSidebarDrawer} />
      <LpsciNavBar />
    </LpsciMainLayout>
  );
}
