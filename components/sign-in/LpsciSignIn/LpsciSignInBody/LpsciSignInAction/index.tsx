// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { StyledAction } from 'baseui/card';
import { Button } from 'baseui/button';

// ANCHOR Models
import { SignInForm } from '@scoped-models/sign-in/SignInForm';

// ANCHOR Styles
import { BUTTON } from './styles';

// ANCHOR Constants
import { CONTENT } from './constants';

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
        {CONTENT}
      </Button>
    </StyledAction>
  );
});
