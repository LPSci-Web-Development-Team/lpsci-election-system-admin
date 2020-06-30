// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { Block } from 'baseui/block';

// ANCHOR Components
import { LpsciLogo } from '@components/logo/LpsciLogo';

// ANCHOR Styles
import { BLOCK } from './styles';

export const Loader = React.memo(() => {
  const container = React.useRef(null);

  return (
    <Block overrides={BLOCK} ref={container}>
      <LpsciLogo height="240px" />
    </Block>
  );
});
