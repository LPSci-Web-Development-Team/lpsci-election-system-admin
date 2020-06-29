// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { Block } from 'baseui/block';

// ANCHOR Models
import { DeviceView } from '@scoped-models/device/DeviceView';
import { SidebarVisibility } from '@scoped-models/sidebar/SidebarVisibility';

// ANCHOR Components
import { Scrollbar } from '@components/utils/Scrollbar';

// ANCHOR Types
import { IChildrenProps } from '@interfaces/Common';

// ANCHOR Styles
import { BLOCK, DESKTOP_COLUMN, MOBILE_COLUMN } from './styles';

interface IProps extends IChildrenProps {
  useSidebarDrawer?: boolean;
}

export const LpsciMainContent = (
  { useSidebarDrawer, children }: IProps,
) => {
  const isDesktop = DeviceView.useSelector((state) => state.isDesktop);
  const visible = SidebarVisibility.useSelector((state) => state.state);

  // Memoize column definition
  const column = React.useMemo(() => (
    (isDesktop && visible && !useSidebarDrawer)
      ? DESKTOP_COLUMN
      : MOBILE_COLUMN
  ), [isDesktop, visible, useSidebarDrawer]);

  return (
    <Block gridColumn={column} overrides={BLOCK}>
      <Scrollbar>
        { children }
      </Scrollbar>
    </Block>
  );
};
