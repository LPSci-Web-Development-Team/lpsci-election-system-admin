// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { Block } from 'baseui/block';

// ANCHOR Styles
import { DIVIDER } from './styles';

export const Divider = React.memo(() => (
  <Block overrides={DIVIDER} />
));
