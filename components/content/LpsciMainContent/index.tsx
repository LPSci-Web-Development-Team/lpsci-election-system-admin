// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { Block } from 'baseui/block';

// ANCHOR Models
import { DeviceView } from '@scoped-models/device/DeviceView';

// ANCHOR Components
import { Scrollbar } from '@components/utils/Scrollbar';

// ANCHOR Types
import { IChildrenProps } from '@interfaces/Common';

// ANCHOR Styles
import {
  BLOCK, CONTENT, DESKTOP_COLUMN, MOBILE_COLUMN,
} from './styles';

interface IProps extends IChildrenProps {
  useSidebarPanel?: boolean;
}

export const LpsciMainContent = (
  { useSidebarPanel, children }: IProps,
) => {
  const isDesktop = DeviceView.useSelector((state) => state.isDesktop);

  // Memoize column definition
  const column = React.useMemo(() => (
    (isDesktop && !useSidebarPanel)
      ? DESKTOP_COLUMN
      : MOBILE_COLUMN
  ), [isDesktop, useSidebarPanel]);

  return (
    <Block gridColumn={column} overrides={BLOCK}>
      <Scrollbar overrides={CONTENT}>
        { children }
      </Scrollbar>
    </Block>
  );
};
