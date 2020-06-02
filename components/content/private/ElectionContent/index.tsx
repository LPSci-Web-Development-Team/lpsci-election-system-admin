// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { Block } from 'baseui/block';

// ANCHOR Styles
import { BLOCK } from './styles';

interface IProps {
  children: React.ReactNode;
}

export const ElectionContent = ({ children }: IProps) => (
  <Block overrides={BLOCK}>
    {children}
  </Block>
);
