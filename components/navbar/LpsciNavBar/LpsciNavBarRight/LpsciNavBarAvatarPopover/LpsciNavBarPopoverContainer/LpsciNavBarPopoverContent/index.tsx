// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { Block } from 'baseui/block';

// ANCHOR Components
import { LpsciNavBarPopoverProfile } from './LpsciNavBarPopoverProfile';
import { LpsciNavBarPopoverLogout } from './LpsciNavBarPopoverLogout';
import { LpsciNavBarPopoverLink } from './LpsciNavBarPopoverItemLink';

// ANCHOR Styles
import { BLOCK, ROOT } from './styles';

// ANCHOR Constants
import { LINKS } from './constants';

export const LpsciNavBarPopoverContent = React.memo(() => (
  <Block overrides={ROOT}>
    <LpsciNavBarPopoverProfile />
    <Block overrides={BLOCK}>
      {LINKS.map((item, key) => (
        <LpsciNavBarPopoverLink
          key={key}
          label={item.label}
          href={item.href}
          as={item.as}
          icon={item.icon}
        />
      ))}
      <LpsciNavBarPopoverLogout />
    </Block>
  </Block>
));
