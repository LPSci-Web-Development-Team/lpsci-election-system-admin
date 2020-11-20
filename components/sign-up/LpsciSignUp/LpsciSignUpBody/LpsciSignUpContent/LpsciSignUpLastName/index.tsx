// ANCHOR React
import React from 'react';

// ANCHOR Hooks
import { useConstant, useConstantCallback } from '@lpsci/hooks';

// ANCHOR React Icons
import { Icon } from 'react-icons-kit';
import { envelope } from 'react-icons-kit/fa/envelope';

// ANCHOR Models
import { useSignUpFormLastNameHandler } from '@scoped-models/sign-up/SignUpForm';

// ANCHOR Component
import { FormField } from '@components/utils/FormField';

// ANCHOR Constants
import { USER_LAST_NAME_LABEL, USER_LAST_NAME_PLACEHOLDER } from '@constants/forms/user';

export const LpsciSignUpLastName = React.memo(() => {
  const setLastName = useSignUpFormLastNameHandler();

  const startEnhancer = useConstant(() => (
    <Icon icon={envelope} />
  ));

  const onChange = useConstantCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setLastName(event.target.value);
    },
  );

  return (
    <FormField
      label={USER_LAST_NAME_LABEL}
      placeholder={USER_LAST_NAME_PLACEHOLDER}
      startEnhancer={startEnhancer}
      onChange={onChange}
      required
    />
  );
});
