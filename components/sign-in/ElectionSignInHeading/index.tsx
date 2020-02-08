// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { Block } from 'baseui/block';
import { H1 } from 'baseui/typography';

// ANCHOR Styles
import { HEADING, HEADING_CONTAINER } from './styles';

export const ElectionSignInHeading = React.memo(() => (
  <Block overrides={HEADING_CONTAINER}>
    <H1 overrides={HEADING}>Welcome Back!</H1>
  </Block>
));
