// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { Block } from 'baseui/block';
import { HeadingLarge } from 'baseui/typography';

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
  title?: string;
}

export const LpsciMainPage = ({
  hideSidebar, useSidebarPanel, title, children,
}: IProps) => {
  React.useEffect(() => {
    if (window.localStorage.getItem('theme') === null) {
      window.localStorage.setItem('theme', 'light');
    }
  }, []);

  return (
    <LpsciMainLayout>
      <LpsciMainContent useSidebarPanel={useSidebarPanel}>
        <LpsciLargeSidebar />
        <Block
          marginTop="16px"
          marginLeft="32px"
          marginRight="32px"
        >
          <HeadingLarge marginTop={0}>
            {title}
          </HeadingLarge>
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
