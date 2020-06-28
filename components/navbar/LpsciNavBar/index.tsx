// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { Block } from 'baseui/block';
import { HeaderNavigation } from 'baseui/header-navigation';

// ANCHOR Styles
import { HEADER_NAVIGATION, BLOCK } from './styles';

// ANCHOR Components
// import { LyonNavBarLeft } from './LyonNavCenterLeft';
// import { LyonNavBarCenter } from './LyonNavBarCenter';
// import { LyonNavBarRight } from './LyonNavCenterRight';

export const LpsciNavBar = React.memo(() => (
  <Block overrides={BLOCK}>
    <HeaderNavigation overrides={HEADER_NAVIGATION}>
      <p>Hi</p>
    </HeaderNavigation>
  </Block>
));
