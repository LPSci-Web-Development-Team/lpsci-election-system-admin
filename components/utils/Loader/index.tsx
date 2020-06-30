// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { styled, withStyle } from 'baseui';
import { Block } from 'baseui/block';

// ANCHOR Img
import Img from '@lxsmnsyc/react-image';

// ANCHOR Constants
import { LOGO_ALT, LOGO_SOURCE } from '@constants/logo';

// ANCHOR Component
import { Skeleton } from '../Skeleton';

// ANCHOR Styles
import { BLOCK, LOGO } from './styles';

const LpsciLogo = styled(Img, LOGO);
const LogoSkeleton = withStyle(Skeleton, LOGO);

export const Loader = React.memo(() => {
  const container = React.useRef(null);

  return (
    <Block overrides={BLOCK} ref={container}>
      <LpsciLogo
        fallback={LogoSkeleton}
        containerRef={container}
        src={LOGO_SOURCE}
        alt={LOGO_ALT}
      />
    </Block>
  );
});
