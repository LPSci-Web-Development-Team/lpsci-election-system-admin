// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { Button } from 'baseui/button';

// ANCHOR Scoped Models
import { SignInFormInput } from '@lpsci/scoped-models/sign-in/SignInFormInput';

// ANCHOR Styles
import { SUBMIT_BUTTON } from './styles';

export const ElectionSignInSubmitButton = React.memo(() => {
  const [disable] = SignInFormInput.useSelectors((state) => [
    state.disabled,
  ]);

  return (
    <Button
      type="submit"
      overrides={SUBMIT_BUTTON}
      disabled={disable}
    >
      Sign In
    </Button>
  );
});
