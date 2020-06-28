// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { Block } from 'baseui/block';

// ANCHOR Types
import { IChildrenProps } from '@interfaces/Common';

// ANCHOR Styles
import { BLOCK, AREA } from './styles';

export const LpsciSignInContent = (
  { children }: IChildrenProps,
) => (
  <Block overrides={BLOCK}>
    <Block overrides={AREA}>
      {children}
    </Block>
  </Block>
);
