// ANCHOR React
import React from 'react';

// ANCHOR Base
import { KIND } from 'baseui/toast';

// ANCHOR Models
import { SignInForm } from '@scoped-models/sign-in/SignInForm';

// ANCHOR Component
import { Response } from '@components/utils/Response';
import { LpsciSignInAction } from './LpsciSignInAction';
import { LpsciSignInContent } from './LpsciSignInContent';

export const LpsciSignInBody = React.memo(() => {
  const [submit, error] = SignInForm.useSelectors((state) => [
    state.handler.submit, state.state.error,
  ]);

  return (
    <form onSubmit={submit}>
      <Response message={error} kind={KIND.negative} />
      <LpsciSignInContent />
      <LpsciSignInAction />
    </form>
  );
});
