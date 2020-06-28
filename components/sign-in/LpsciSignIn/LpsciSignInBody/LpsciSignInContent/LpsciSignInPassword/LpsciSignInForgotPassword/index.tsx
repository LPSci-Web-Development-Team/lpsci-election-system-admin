// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { Button, KIND, SIZE } from 'baseui/button';

// ANCHOR Models
import { ForgotPasswordVisibility } from '@scoped-models/sign-in/ForgotPasswordVisibility';

// ANCHOR Constants
import { TITLE } from './constants';

// ANCHOR Styles
import { BUTTON } from './styles';

export const LpsciSignInForgotPassword = React.memo(() => {
  const show = ForgotPasswordVisibility.useSelector((state) => state.show);

  return (
    <Button
      kind={KIND.minimal}
      onClick={show}
      size={SIZE.compact}
      overrides={BUTTON}
      type="button"
    >
      {TITLE}
    </Button>
  );
});
