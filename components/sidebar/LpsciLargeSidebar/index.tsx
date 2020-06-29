// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { Block } from 'baseui/block';

// ANCHOR Models
import { DeviceView } from '@scoped-models/device/DeviceView';
import { SidebarVisibility } from '@scoped-models/sidebar/SidebarVisibility';

// ANCHOR Components
import { Scrollbar } from '@components/utils/Scrollbar';

// ANCHOR Styles
import { LARGE } from './styles';

interface IProps {
  hideInitial?: boolean;
  usePanel?: boolean;
}

export const LpsciLargeSidebarContent = React.memo(() => (
  <Scrollbar>
    <Block overrides={LARGE}>
      Large
    </Block>
  </Scrollbar>
));

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
