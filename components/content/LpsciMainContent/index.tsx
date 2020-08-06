// ANCHOR React
import React from 'react';

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
import {
  BLOCK, CONTENT, DESKTOP_COLUMN, MOBILE_COLUMN, DESKTOP_TEMPLATE_COLUMN, MOBILE_TEMPLATE_COLUMN,
} from './styles';

interface IProps extends IChildrenProps {
  useSidebarPanel?: boolean;
}

export const LpsciMainContent = (
  { useSidebarPanel, children }: IProps,
) => {
  const isDesktop = DeviceView.useSelector((state) => state.isDesktop);

  const visible = SidebarVisibility.useSelector((state) => state.state);

  // Memoize column definition
  const column = React.useMemo(() => (
    (isDesktop && !useSidebarPanel)
      ? DESKTOP_COLUMN
      : MOBILE_COLUMN
  ), [isDesktop, useSidebarPanel]);

  const templateColumn = React.useMemo(() => (
    (!visible && !useSidebarPanel)
      ? DESKTOP_TEMPLATE_COLUMN
      : MOBILE_TEMPLATE_COLUMN
  ), [visible, useSidebarPanel]);

  return (
    <Block gridColumn={column} overrides={BLOCK}>
      <Scrollbar
        overrides={CONTENT}
        gridTemplateColumns={templateColumn}
      >
        { children }
      </Scrollbar>
    </Block>
  );
};
