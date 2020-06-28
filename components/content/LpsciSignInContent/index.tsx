// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { Block } from 'baseui/block';

// ANCHOR Components
import { Scrollbar } from '@components/utils/Scrollbar';

// ANCHOR Types
import { IChildrenProps } from '@interfaces/Common';

// ANCHOR Styles
import { BLOCK } from './styles';

export const LpsciSignInContent = (
  { children }: IChildrenProps,
) => (
  <Block overrides={BLOCK}>
    <Scrollbar>
      {children}
    </Scrollbar>
  </Block>
);
