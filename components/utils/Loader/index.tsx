// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { styled, withStyle } from 'baseui';
import { Block } from 'baseui/block';

// ANCHOR Img
import Img from '@lxsmnsyc/react-image';

// ANCHOR Component
import { Skeleton } from '../Skeleton';

// ANCHOR Constants
import { IMG_ALT, IMG_SOURCE } from './constants';

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
        src={IMG_SOURCE}
        alt={IMG_ALT}
      />
    </Block>
  );
});
