// ANCHOR React
import * as React from 'react';

// ANCHOR Img
import Img from '@lxsmnsyc/react-image';

// ANCHOR Base
import { Block, Responsive, JustifyContent } from 'baseui/block';
import { styled, withStyle } from 'baseui';
import { StyledLink } from 'baseui/link';

// ANCHOR Next
import Link from 'next/link';

// ANCHOR Constants
import { Skeleton } from '@components/utils/Skeleton';
import { IMG_ALT, IMG_SOURCE, LINK_URL } from './constants';

// ANCHOR Styles
import { BLOCK } from './styles';

interface IProps {
  width?: string;
  height?: string;
  align?: Responsive<JustifyContent>;
}

interface StyleImageProps {
  $width?: string;
  $height?: string;
}

const StyledImage = styled(Img, ({ $width, $height }: StyleImageProps) => ({
  width: $width ?? 'auto',
  height: $height ?? 'auto',
}));

const LogoSkeleton = withStyle(Skeleton, ({ $width, $height }: StyleImageProps) => ({
  width: $width ?? 'auto',
  height: $height ?? 'auto',
}));

export const LpsciLogo = React.memo((
  { width, height, align }: IProps,
) => {
  const container = React.useRef(null);

  const Fallback = React.useMemo(() => (
    <LogoSkeleton $width={width} $height={height} />
  ), [height, width]);

  return (
    <Link href={LINK_URL} passHref>
      <StyledLink>
        <Block
          overrides={BLOCK}
          justifyContent={align ?? 'center'}
          ref={container}
        >
          <StyledImage
            src={IMG_SOURCE}
            alt={IMG_ALT}
            fallback={Fallback}
            $width={width}
            $height={height}
            containerRef={container}
          />
        </Block>
      </StyledLink>
    </Link>
  );
});
