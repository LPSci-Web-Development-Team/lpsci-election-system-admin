// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { Block } from 'baseui/block';

interface IElectionSignInLogoProps {
  children?: React.ReactNode;
}

export const ElectionSignInLogoContainer = React.memo(({ children }: IElectionSignInLogoProps) => (
  <Block>
    {children}
  </Block>
));
