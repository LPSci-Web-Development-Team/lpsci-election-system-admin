// ANCHOR React
import React from 'react';

// ANCHOR Base
import { Button, KIND, SIZE } from 'baseui/button';

// ANCHOR Models
import { ForgotPasswordVisibility } from '@scoped-models/sign-in/ForgotPasswordVisibility';

// ANCHOR Constants
import { PASSWORD_CAPTION } from '@constants/forms/password';

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
      {PASSWORD_CAPTION}
    </Button>
  );
});
