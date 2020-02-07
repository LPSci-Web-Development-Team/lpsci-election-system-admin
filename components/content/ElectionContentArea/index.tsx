// ANCHOR React
import * as React from 'react';

// ANCHOR Base ui
import { Block } from 'baseui/block';

// ANCHOR Styles
import { INNER, OUTER, MOBILE_MIN_WIDTH } from './styles';

// ANCHOR Interface
interface IProps {
  children: React.ReactNode;
}

export const ElectionContentArea = ({ children }: IProps) => (
  <Block overrides={OUTER}>
    <Block minWidth={MOBILE_MIN_WIDTH} overrides={INNER}>
      {children}
    </Block>
  </Block>
);
