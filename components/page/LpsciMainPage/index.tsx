// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { Block } from 'baseui/block';

// ANCHOR Types
import { IChildrenProps } from '@interfaces/Common';

// ANCHOR Components
import { LpsciMainLayout } from '@components/layout/LpsciMainLayout';
import { LpsciMainContent } from '@components/content/LpsciMainContent';
import { LpsciNavBar } from '@components/navbar/LpsciNavBar';
import { LpsciMiniSidebar } from '@components/sidebar/LpsciMiniSidebar';
import { LpsciLargeSidebar } from '@components/sidebar/LpsciLargeSidebar';

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
        <LpsciLargeSidebar />
        <Block>
          {children}
        </Block>
      </LpsciMainContent>
      <LpsciMiniSidebar
        hideInitial={hideSidebar}
        usePanel={useSidebarPanel}
      />
      <LpsciNavBar />
    </LpsciMainLayout>
  );
};
