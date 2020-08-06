// ANCHOR React
import React from 'react';

// ANCHOR Next
import Link from 'next/link';

// ANCHOR Base
import { Block } from 'baseui/block';

// ANCHOR Styles
import { BLOCK } from './styles';

// ANCHOR Components
import { LpsciNavBarPopoverAvatar } from './LpsciNavBarPopoverAvatar';
import { LpsciNavBarPopoverUser } from './LpsciNavBarPopoverUser';

export const LpsciNavBarPopoverProfile = React.memo(() => (
  <Link href="/profile" passHref>
    <Block overrides={BLOCK}>
      <LpsciNavBarPopoverAvatar />
      <LpsciNavBarPopoverUser />
    </Block>
  </Link>
));
