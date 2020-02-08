// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { styled } from 'baseui';
import { Block } from 'baseui/block';
import { H1 } from 'baseui/typography';

// ANCHOR Styles
import { BLOCK, HEADING } from './styles';

// ANCHOR Component
const ImageLogo = styled('img', {
  width: '45px',
  height: '45px',
});

export const SidebarHeading = React.memo(() => (
  <Block overrides={BLOCK}>
    <ImageLogo src="img/lpsci-logo.png" alt="LPSci Logo" />
    <H1 overrides={HEADING}>
      LPSci Elections Admin
    </H1>
  </Block>
));
