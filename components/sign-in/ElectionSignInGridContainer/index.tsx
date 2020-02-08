// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { Block } from 'baseui/block';

// ANCHOR Styles
import { BLOCK } from './styles';

interface IElectionSignInContainerProps {
  children: React.ReactNode;
}

export const ElectionSignInGridContainer = React.memo(
  ({ children }: IElectionSignInContainerProps) => (
    <Block overrides={BLOCK}>
      {children}
    </Block>
  ),
);
