// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { StyledAction } from 'baseui/card';
import { Button } from 'baseui/button';

// ANCHOR Models
import { SignInForm } from '@scoped-models/sign-in/SignInForm';

// ANCHOR Constants
import { SIGN_IN_CONTENT } from '@constants/buttons';

// ANCHOR Styles
import { BUTTON } from './styles';

export const LpsciSignInAction = React.memo(() => {
  const [valid, loading] = SignInForm.useSelectors((state) => [
    state.valid.all, state.state.loading,
  ]);

  return (
    <StyledAction>
      <Button
        type="submit"
        overrides={BUTTON}
        disabled={!valid}
        isLoading={loading}
      >
        {SIGN_IN_CONTENT}
      </Button>
    </StyledAction>
  );
});
