// ANCHOR React
import React from 'react';

// ANCHOR Base
import { StyledAction } from 'baseui/card';
import { Button } from 'baseui/button';

// ANCHOR Models
import { useSignUpFormLoadingValidState } from '@scoped-models/sign-up/SignUpForm';

// ANCHOR Constants
import { SIGN_UP_CONTENT } from '@constants/buttons';

// ANCHOR Styles
import { BUTTON } from './styles';

export const LpsciSignUpAction = React.memo(() => {
  const [loading, valid] = useSignUpFormLoadingValidState();

  return (
    <StyledAction>
      <Button
        type="submit"
        overrides={BUTTON}
        disabled={!valid}
        isLoading={loading}
      >
        {SIGN_UP_CONTENT}
      </Button>
    </StyledAction>
  );
});
