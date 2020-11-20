// ANCHOR React
import React from 'react';

// ANCHOR Hooks
import { useConstant, useConstantCallback } from '@lpsci/hooks';

// ANCHOR React Icons
import { Icon } from 'react-icons-kit';
import { envelope } from 'react-icons-kit/fa/envelope';

// ANCHOR Models
import { useSignUpFormEmailHandler } from '@scoped-models/sign-up/SignUpForm';

// ANCHOR Component
import { FormField } from '@components/utils/FormField';

// ANCHOR Constants
import { EMAIL_LABEL, EMAIL_PLACEHOLDER } from '@constants/forms/email';

export const LpsciSignUpEmail = React.memo(() => {
  const setEmail = useSignUpFormEmailHandler();

  const startEnhancer = useConstant(() => (
    <Icon icon={envelope} />
  ));

  const onChange = useConstantCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setEmail(event.target.value);
    },
  );

  return (
    <FormField
      label={EMAIL_LABEL}
      placeholder={EMAIL_PLACEHOLDER}
      startEnhancer={startEnhancer}
      onChange={onChange}
      type="email"
      required
    />
  );
});
