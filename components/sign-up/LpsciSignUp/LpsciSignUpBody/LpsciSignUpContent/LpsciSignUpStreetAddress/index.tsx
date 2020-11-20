// ANCHOR React
import React from 'react';

// ANCHOR Hooks
import { useConstant, useConstantCallback } from '@lpsci/hooks';

// ANCHOR React Icons
import { Icon } from 'react-icons-kit';
import { envelope } from 'react-icons-kit/fa/envelope';

// ANCHOR Models
import { useSignUpFormStreetAddressHandler } from '@scoped-models/sign-up/SignUpForm';

// ANCHOR Component
import { FormField } from '@components/utils/FormField';

// ANCHOR Constants
import { USER_STREET_ADDRESS_LABEL, USER_STREET_ADDRESS_PLACEHOLDER } from '@constants/forms/user';

export const LpsciSignUpStreetAddress = React.memo(() => {
  const setStreetAddress = useSignUpFormStreetAddressHandler();

  const startEnhancer = useConstant(() => (
    <Icon icon={envelope} />
  ));

  const onChange = useConstantCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setStreetAddress(event.target.value);
    },
  );

  return (
    <FormField
      label={USER_STREET_ADDRESS_LABEL}
      placeholder={USER_STREET_ADDRESS_PLACEHOLDER}
      startEnhancer={startEnhancer}
      onChange={onChange}
      required
    />
  );
});
