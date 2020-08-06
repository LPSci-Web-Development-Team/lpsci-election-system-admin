// ANCHOR React
import React from 'react';

// ANCHOR Base
import { Block } from 'baseui/block';
import { HeaderNavigation } from 'baseui/header-navigation';

// ANCHOR Styles
import { HEADER_NAVIGATION, BLOCK } from './styles';

// ANCHOR Components
import { LpsciNavBarLeft } from './LpsciNavBarLeft';
import { LpsciNavBarRight } from './LpsciNavBarRight';
import { LpsciNavBarCenter } from './LpsciNavBarCenter';

export const LpsciNavBar = React.memo(() => (
  <Block overrides={BLOCK}>
    <HeaderNavigation overrides={HEADER_NAVIGATION}>
      <LpsciNavBarLeft />
      <LpsciNavBarCenter />
      <LpsciNavBarRight />
    </HeaderNavigation>
  </Block>
));
