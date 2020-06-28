// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { withStyle } from 'baseui';
import { StyledBody } from 'baseui/card';

// ANCHOR Styles
import { FORM } from './styles';

// ANCHOR Components
import { LpsciSignInEmail } from './LpsciSignInEmail';
import { LpsciSignInPassword } from './LpsciSignInPassword';

const LpsciForm = withStyle(StyledBody, FORM);

export const LpsciSignInContent = React.memo(() => (
  <LpsciForm>
    <LpsciSignInEmail />
    <LpsciSignInPassword />
  </LpsciForm>
));
