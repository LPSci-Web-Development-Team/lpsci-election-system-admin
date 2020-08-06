// ANCHOR React
import React from 'react';

// ANCHOR Base
import { Block } from 'baseui/block';

// ANCHOR Styles
import { BLOCK } from './styles';

// ANCHOR Components
import { LpsciNavBarPopoverName } from './LpsciNavBarPopoverName';
import { LpsciNavBarPopoverEmail } from './LpsciNavBarPopoverEmail';

export const LpsciNavBarPopoverUser = React.memo(() => (
  <Block overrides={BLOCK}>
    <LpsciNavBarPopoverName />
    <LpsciNavBarPopoverEmail />
  </Block>
));
