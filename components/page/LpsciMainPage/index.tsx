// ANCHOR React
import * as React from 'react';

// ANCHOR Types
import { IChildrenProps } from '@interfaces/Common';

// ANCHOR Components
import { LpsciMainLayout } from '@components/layout/LpsciMainLayout';
import { LpsciMainContent } from '@components/content/LpsciMainContent';
import { LpsciNavBar } from '@components/navbar/LpsciNavBar';
import { LpsciSidebar } from '@components/sidebar/LpsciSidebar';

interface IProps extends IChildrenProps {
  hideSidebar?: boolean;
  useSidebarPanel?: boolean;
}

export const LpsciMainPage = (
  { hideSidebar, useSidebarPanel, children }: IProps,
) => {
  React.useEffect(() => {
    if (window.localStorage.getItem('theme') === null) {
      window.localStorage.setItem('theme', 'light');
    }
  }, []);

  return (
    <LpsciMainLayout>
      <LpsciMainContent useSidebarPanel={useSidebarPanel}>
        {children}
      </LpsciMainContent>
      <LpsciSidebar
        hideInitial={hideSidebar}
        usePanel={useSidebarPanel}
      />
      <LpsciNavBar />
    </LpsciMainLayout>
  );
};
