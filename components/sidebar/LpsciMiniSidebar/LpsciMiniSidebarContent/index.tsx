// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { Block } from 'baseui/block';

// ANCHOR Component
import { Scrollbar } from '@components/utils/Scrollbar';
import { LpsciMiniSidebarLink } from './LpsciMiniSidebarLink';

// ANCHOR Styles
import { MINI } from './styles';

export const LpsciMiniSidebarContent = React.memo(() => (
  <Scrollbar>
    <Block overrides={MINI}>
      <LpsciMiniSidebarLink />
      <LpsciMiniSidebarLink />
      <LpsciMiniSidebarLink />
    </Block>
  </Scrollbar>
));
