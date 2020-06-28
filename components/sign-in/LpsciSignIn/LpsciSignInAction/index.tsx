// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { StyledAction } from 'baseui/card';
import { Button } from 'baseui/button';

// ANCHOR Styles
import { BUTTON } from './styles';

// ANCHOR Constants
import { CONTENT } from './constants';

export const LpsciSignInAction = React.memo(() => (
  <StyledAction>
    <Button
      type="submit"
      overrides={BUTTON}
    >
      {CONTENT}
    </Button>
  </StyledAction>
));
