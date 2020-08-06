// ANCHOR React
import React from 'react';

// ANCHOR Base
import { Block } from 'baseui/block';

// ANCHOR Interfaces
import { IChildrenProps } from '@interfaces/Common';

// ANCHOR Styles
import { BLOCK } from './styles';

export const LpsciSidebarDrawer = (
  { children }: IChildrenProps,
) => (
  <Block overrides={BLOCK}>
    {children}
  </Block>
);
