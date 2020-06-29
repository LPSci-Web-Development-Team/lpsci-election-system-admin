// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { ANCHOR, Drawer, SIZE } from 'baseui/drawer';

// ANCHOR Model
import { SidebarVisibility } from '@scoped-models/sidebar/SidebarVisibility';

// ANCHOR Interfaces
import { IChildrenProps } from '@interfaces/Common';

// ANCHOR Styles
import { DRAWER } from './styles';

export const LpsciSidebarPanel = (
  { children }: IChildrenProps,
) => {
  const [visibility, hide] = SidebarVisibility.useSelectors((state) => [state.state, state.hide]);

  return (
    <Drawer
      isOpen={visibility}
      anchor={ANCHOR.left}
      size={SIZE.auto}
      onClose={hide}
      overrides={DRAWER}
    >
      { children }
    </Drawer>
  );
};
