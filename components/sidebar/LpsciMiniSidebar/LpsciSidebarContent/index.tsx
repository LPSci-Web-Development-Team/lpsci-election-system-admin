// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { Block } from 'baseui/block';

// ANCHOR Component
import { Scrollbar } from '@components/utils/Scrollbar';

// ANCHOR Styles
import { MINI } from './styles';

export const LpsciSidebarContent = React.memo(() => (
  <Scrollbar>
    <Block overrides={MINI}>
      Mini
    </Block>
  </Scrollbar>
));
