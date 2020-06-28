// ANCHOR React
import * as React from 'react';

// ANCHOR Models
import { SignInForm } from '@scoped-models/sign-in/SignInForm';

// ANCHOR Component
import { LpsciSignInAction } from './LpsciSignInAction';
import { LpsciSignInContent } from './LpsciSignInContent';

export const LpsciSignInBody = React.memo(() => {
  const submit = SignInForm.useSelector((state) => state.handler.submit);

  return (
    <form onSubmit={submit}>
      <LpsciSignInContent />
      <LpsciSignInAction />
    </form>
  );
});
