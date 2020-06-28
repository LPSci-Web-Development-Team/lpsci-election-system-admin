// ANCHOR React
import * as React from 'react';

// ANCHOR Hooks
import { useConstant, useConstantCallback } from '@lpsci/hooks';

// ANCHOR React Icons
import { Icon } from 'react-icons-kit';
import { lock } from 'react-icons-kit/fa/lock';

// ANCHOR Models
import { ForgotPasswordVisibility } from '@scoped-models/sign-in/ForgotPasswordVisibility';
import { SignInForm } from '@scoped-models/sign-in/SignInForm';

// ANCHOR Component
import { FormField } from '@components/utils/FormField';
import { LpsciSignInForgotPassword } from './LpsciSignInForgotPassword';

// ANCHOR Constants
import { LABEL, PLACEHOLDER } from './constants';

export const LpsciSignInPassword = React.memo(() => {
  const setPassword = SignInForm.useSelector((state) => state.handler.password);

  const startEnhancer = useConstant(() => (
    <Icon icon={lock} />
  ));

  const onChange = useConstantCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  });

  const caption = useConstant(() => (
    <ForgotPasswordVisibility.Provider>
      <LpsciSignInForgotPassword />
    </ForgotPasswordVisibility.Provider>
  ));

  return (
    <FormField
      label={LABEL}
      caption={caption}
      placeholder={PLACEHOLDER}
      startEnhancer={startEnhancer}
      onChange={onChange}
      type="password"
      required
    />
  );
});
