// ANCHOR React
import React from 'react';

// ANCHOR Models
import { DeviceView } from '@scoped-models/device/DeviceView';
import { SidebarVisibility } from '@scoped-models/sidebar/SidebarVisibility';

// ANCHOR Components
import { LpsciLargeSidebarContent } from './LpsciLargeSidebarContent';

interface IProps {
  hideInitial?: boolean;
  usePanel?: boolean;
}

export const LpsciLargeSidebar = React.memo(({ hideInitial, usePanel }: IProps) => {
  const isDesktop = DeviceView.useSelector((state) => state.isDesktop);

  const [visible, hide] = SidebarVisibility.useSelectors((state) => [
    state.state, state.hide,
  ]);

  React.useEffect(() => {
    if (hideInitial) {
      hide();
    }
  }, [hideInitial, hide]);

  if (!visible || !isDesktop || usePanel) {
    return null;
  }

  return <LpsciLargeSidebarContent />;
});
