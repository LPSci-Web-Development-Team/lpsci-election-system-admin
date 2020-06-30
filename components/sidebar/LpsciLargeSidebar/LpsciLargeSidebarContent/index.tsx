// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { Block } from 'baseui/block';

// ANCHOR Components
import { Scrollbar } from '@components/utils/Scrollbar';
import { LpsciLargeSidebarGroup } from './LpsciLargeSidebarGroup';

// ANCHOR Styles
import { LARGE, BLOCK } from './styles';

export const LpsciLargeSidebarContent = React.memo(() => (
  <Block overrides={BLOCK}>
    <Scrollbar>
      <Block overrides={LARGE}>
        <LpsciLargeSidebarGroup />
      </Block>
    </Scrollbar>
  </Block>
));
