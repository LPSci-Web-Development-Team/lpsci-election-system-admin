// ANCHOR React
import React from 'react';

// ANCHOR Base
import { Block } from 'baseui/block';

// ANCHOR Constants
import { NAV_LINKS } from '@constants/navbar';

// ANCHOR Components
import { LpsciNavBarPopoverProfile } from './LpsciNavBarPopoverProfile';
import { LpsciNavBarPopoverLogout } from './LpsciNavBarPopoverLogout';
import { LpsciNavBarPopoverLink } from './LpsciNavBarPopoverItemLink';
import { LpsciNavBarPopoverTheme } from './LpsciNavBarPopoverTheme';

// ANCHOR Styles
import { BLOCK, ROOT } from './styles';

export const LpsciNavBarPopoverContent = React.memo(() => (
  <Block overrides={ROOT}>
    <LpsciNavBarPopoverProfile />
    <Block overrides={BLOCK}>
      {NAV_LINKS.map((item, key) => (
        <LpsciNavBarPopoverLink
          key={key}
          label={item.label}
          href={item.href}
          as={item.as}
          icon={item.icon}
        />
      ))}
      <LpsciNavBarPopoverTheme />
      <LpsciNavBarPopoverLogout />
    </Block>
  </Block>
));
