// ANCHOR React
import React from 'react';

// ANCHOR Models
import { useSignUpFormSubmitHandler } from '@scoped-models/sign-up/SignUpForm';

// ANCHOR Component
import { LpsciSignUpAction } from './LpsciSignUpAction';
import { LpsciSignUpContent } from './LpsciSignUpContent';

export const LpsciSignUpBody = React.memo(() => {
  const submit = useSignUpFormSubmitHandler();

  return (
    <form onSubmit={submit}>
      <LpsciSignUpContent />
      <LpsciSignUpAction />
    </form>
  );
});
