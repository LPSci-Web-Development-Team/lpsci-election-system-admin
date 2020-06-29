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

// ANCHOR Constants
import { PASSWORD_LABEL, PASSWORD_PLACEHOLDER } from '@constants/forms/password';

// ANCHOR Component
import { FormField } from '@components/utils/FormField';
import { LpsciSignInForgotPassword } from './LpsciSignInForgotPassword';

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
      label={PASSWORD_LABEL}
      caption={caption}
      placeholder={PASSWORD_PLACEHOLDER}
      startEnhancer={startEnhancer}
      onChange={onChange}
      type="password"
      required
    />
  );
});
