// ANCHOR React
import * as React from 'react';

// ANCHOR Models
import { DeviceView } from '@scoped-models/device/DeviceView';
import { SidebarVisibility } from '@scoped-models/sidebar/SidebarVisibility';

// ANCHOR Components
import { LpsciSidebarDrawer } from './LpsciSidebarDrawer';
import { LpsciSidebarPanel } from './LpsciSidebarPanel';
import { LpsciSidebarContent } from './LpsciSidebarContent';

interface IProps {
  hideInitial?: boolean;
  usePanel?: boolean;
}

export const LyonSidebar = React.memo(({ hideInitial, usePanel }: IProps) => {
  const isDesktop = DeviceView.useSelector((state) => state.isDesktop);
  const hide = SidebarVisibility.useSelector((state) => state.hide);

  React.useEffect(() => {
    if (hideInitial) {
      hide();
    }
  }, [hideInitial, hide]);

  return (
    <>
      {(isDesktop && !usePanel) && (
        <LpsciSidebarDrawer>
          <LpsciSidebarContent />
        </LpsciSidebarDrawer>
      )}
      {(!isDesktop || usePanel) && (
        <LpsciSidebarPanel>
          <LpsciSidebarContent />
        </LpsciSidebarPanel>
      )}
    </>
  );
});
