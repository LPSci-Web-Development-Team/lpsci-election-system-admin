// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { Block } from 'baseui/block';

// ANCHOR Styles
import { OUTER, INNER } from './styles';

interface ISidebarContainerProps {
  children: React.ReactNode;
}

export const SidebarContainer = React.memo(({ children }: ISidebarContainerProps) => (
  <Block overrides={OUTER}>
    <Block overrides={INNER}>
      {children}
    </Block>
  </Block>
));
