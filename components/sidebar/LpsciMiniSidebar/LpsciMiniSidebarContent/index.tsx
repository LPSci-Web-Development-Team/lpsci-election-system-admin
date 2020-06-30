// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { Block } from 'baseui/block';

// ANCHOR Constants
import { MINI_SIDEBAR } from '@constants/sidebar';

// ANCHOR Component
import { Scrollbar } from '@components/utils/Scrollbar';
import { LpsciMiniSidebarLink } from './LpsciMiniSidebarLink';

// ANCHOR Styles
import { MINI } from './styles';

export const LpsciMiniSidebarContent = React.memo(() => (
  <Scrollbar>
    <Block overrides={MINI}>
      {MINI_SIDEBAR.map((item) => (
        <LpsciMiniSidebarLink
          key={item.identifier}
          identifier={item.identifier}
          label={item.label}
          icon={item.icon}
          sublinks={item.sublinks}
        />
      ))}
    </Block>
  </Scrollbar>
));
