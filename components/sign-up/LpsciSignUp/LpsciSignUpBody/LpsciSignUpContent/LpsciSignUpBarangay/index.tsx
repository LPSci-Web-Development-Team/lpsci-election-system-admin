// ANCHOR React
import React from 'react';

// ANCHOR Hooks
import { useConstant, useConstantCallback } from '@lpsci/hooks';

// ANCHOR React Icons
import { Icon } from 'react-icons-kit';
import { envelope } from 'react-icons-kit/fa/envelope';

// ANCHOR Models
import { useSignUpFormBarangayHandler } from '@scoped-models/sign-up/SignUpForm';

// ANCHOR Component
import { FormField } from '@components/utils/FormField';

// ANCHOR Constants
import { USER_BARANGAY_LABEL, USER_BARANGAY_PLACEHOLDER } from '@constants/forms/user';

export const LpsciSignUpBarangay = React.memo(() => {
  const setBarangay = useSignUpFormBarangayHandler();

  const startEnhancer = useConstant(() => (
    <Icon icon={envelope} />
  ));

  const onChange = useConstantCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setBarangay(event.target.value);
    },
  );

  return (
    <FormField
      label={USER_BARANGAY_LABEL}
      placeholder={USER_BARANGAY_PLACEHOLDER}
      startEnhancer={startEnhancer}
      onChange={onChange}
      required
    />
  );
});
