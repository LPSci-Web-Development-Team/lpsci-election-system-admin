// ANCHOR React
import React from 'react';

// ANCHOR Base
import { OnChangeParams, Value } from 'baseui/select';

// ANCHOR Models
import { useSignUpFormSexHandler } from '@scoped-models/sign-up/SignUpForm';

// ANCHOR Component
import { FormSelect } from '@components/utils/FormSelect';

// ANCHOR Hooks
import { useConstantCallback } from '@lpsci/hooks';

// ANCHOR Constants
import { USER_SEX_LABEL, USER_SEX_OPTIONS, USER_SEX_PLACEHOLDER } from '@constants/forms/user';

// ANCHOR Payloads
import { ESex } from '@payloads/user';

export const LpsciSignUpSex = React.memo(() => {
  const [value, setValue] = React.useState<Value>([]);

  const setSex = useSignUpFormSexHandler();

  const onChange = useConstantCallback(
    (event: OnChangeParams) => {
      setSex(event.option?.id as ESex);
      setValue(event.value);
    },
  );

  return (
    <FormSelect
      value={value}
      label={USER_SEX_LABEL}
      placeholder={USER_SEX_PLACEHOLDER}
      onChange={onChange}
      options={USER_SEX_OPTIONS}
    />
  );
});
