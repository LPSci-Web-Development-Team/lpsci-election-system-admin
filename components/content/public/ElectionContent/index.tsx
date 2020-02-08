// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { Block } from 'baseui/block';

interface IProps {
  children: React.ReactNode;
}

export const ElectionContent = ({ children }: IProps) => (
  <Block>
    {children}
  </Block>
);
