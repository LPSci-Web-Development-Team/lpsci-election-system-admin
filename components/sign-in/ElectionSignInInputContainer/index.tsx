// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { Block } from 'baseui/block';
import { FORM_CONTROL } from './styles';

interface IElectionContainerProps {
  children?: React.ReactNode;
}

export const ElectionSignInInputContainer = React.memo(({ children }: IElectionContainerProps) => (
  <Block overrides={FORM_CONTROL}>
    {children}
  </Block>
));
