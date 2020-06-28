// ANCHOR React
import * as React from 'react';

// ANCHOR LPSci Hooks
import { useConstant, useConstantCallback } from '@lpsci/hooks';

// ANCHOR React Icons
import { Icon } from 'react-icons-kit';
import { envelope } from 'react-icons-kit/fa/envelope';

// ANCHOR Models
import { SignInForm } from '@scoped-models/sign-in/SignInForm';

// ANCHOR Component
import { FormField } from '@components/utils/FormField';

// ANCHOR Constants
import { LABEL, PLACEHOLDER } from './constants';

export const LpsciSignInEmail = React.memo(() => {
  const setEmail = SignInForm.useSelector((state) => state.handler.email);

  const startEnhancer = useConstant(() => (
    <Icon icon={envelope} />
  ));

  const onChange = useConstantCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  });

  return (
    <FormField
      label={LABEL}
      placeholder={PLACEHOLDER}
      startEnhancer={startEnhancer}
      onChange={onChange}
      type="email"
      required
    />
  );
});
