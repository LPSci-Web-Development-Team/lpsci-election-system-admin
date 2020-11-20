// ANCHOR React
import React from 'react';

// ANCHOR Hooks
import { useConstant, useConstantCallback } from '@lpsci/hooks';

// ANCHOR React Icons
import { Icon } from 'react-icons-kit';
import { envelope } from 'react-icons-kit/fa/envelope';

// ANCHOR Models
import { useSignUpFormMiddleNameHandler } from '@scoped-models/sign-up/SignUpForm';

// ANCHOR Component
import { FormField } from '@components/utils/FormField';

// ANCHOR Constants
import { USER_MIDDLE_NAME_LABEL, USER_MIDDLE_NAME_PLACEHOLDER } from '@constants/forms/user';

export const LpsciSignUpMiddleName = React.memo(() => {
  const setMiddleName = useSignUpFormMiddleNameHandler();

  const startEnhancer = useConstant(() => (
    <Icon icon={envelope} />
  ));

  const onChange = useConstantCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setMiddleName(event.target.value);
    },
  );

  return (
    <FormField
      label={USER_MIDDLE_NAME_LABEL}
      placeholder={USER_MIDDLE_NAME_PLACEHOLDER}
      startEnhancer={startEnhancer}
      onChange={onChange}
      required
    />
  );
});
