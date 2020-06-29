// ANCHOR  React
import * as React from 'react';

// ANCHOR Base
import { Block } from 'baseui/block';

// ANCHOR Models
import { SidebarVisibility } from '@scoped-models/sidebar/SidebarVisibility';

// ANCHOR Interfaces
import { IChildrenProps } from '@interfaces/Common';

// ANCHOR Styles
import { BLOCK } from './styles';

export const LpsciSidebarDrawer = (
  { children }: IChildrenProps,
) => {
  const visible = SidebarVisibility.useSelector((state) => state.state);

  if (visible) {
    return (
      <Block overrides={BLOCK}>
        { children }
      </Block>
    );
  }

  return null;
};
