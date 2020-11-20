// ANCHOR React
import React from 'react';

// ANCHOR Hooks
import { useConstant, useConstantCallback } from '@lpsci/hooks';

// ANCHOR React Icons
import { Icon } from 'react-icons-kit';
import { envelope } from 'react-icons-kit/fa/envelope';

// ANCHOR Models
import { useSignUpFormPasswordHandler } from '@scoped-models/sign-up/SignUpForm';

// ANCHOR Component
import { FormField } from '@components/utils/FormField';

// ANCHOR Constants
import { PASSWORD_LABEL, PASSWORD_PLACEHOLDER } from '@constants/forms/password';

export const LpsciSignUpPassword = React.memo(() => {
  const setPassword = useSignUpFormPasswordHandler();

  const startEnhancer = useConstant(() => (
    <Icon icon={envelope} />
  ));

  const onChange = useConstantCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setPassword(event.target.value);
    },
  );

  return (
    <FormField
      label={PASSWORD_LABEL}
      placeholder={PASSWORD_PLACEHOLDER}
      startEnhancer={startEnhancer}
      onChange={onChange}
      type="password"
      name="new-password"
      autoComplete="new-password"
      required
    />
  );
});
