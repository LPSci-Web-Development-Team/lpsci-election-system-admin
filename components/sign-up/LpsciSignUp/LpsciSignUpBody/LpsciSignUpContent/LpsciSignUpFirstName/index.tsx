// ANCHOR React
import React from 'react';

// ANCHOR Hooks
import { useConstant, useConstantCallback } from '@lpsci/hooks';

// ANCHOR React Icons
import { Icon } from 'react-icons-kit';
import { envelope } from 'react-icons-kit/fa/envelope';

// ANCHOR Models
import { useSignUpFormFirstNameHandler } from '@scoped-models/sign-up/SignUpForm';

// ANCHOR Component
import { FormField } from '@components/utils/FormField';

// ANCHOR Constants
import { USER_FIRST_NAME_LABEL, USER_FIRST_NAME_PLACEHOLDER } from '@constants/forms/user';

export const LpsciSignUpFirstName = React.memo(() => {
  const setFirstName = useSignUpFormFirstNameHandler();

  const startEnhancer = useConstant(() => (
    <Icon icon={envelope} />
  ));

  const onChange = useConstantCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setFirstName(event.target.value);
    },
  );

  return (
    <FormField
      label={USER_FIRST_NAME_LABEL}
      placeholder={USER_FIRST_NAME_PLACEHOLDER}
      startEnhancer={startEnhancer}
      onChange={onChange}
      required
    />
  );
});
