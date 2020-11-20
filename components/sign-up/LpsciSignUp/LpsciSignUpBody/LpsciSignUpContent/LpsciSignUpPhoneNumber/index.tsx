// ANCHOR React
import React from 'react';

// ANCHOR Base
import { FormControl } from 'baseui/form-control';
import { PhoneInput, Country, SIZE } from 'baseui/phone-input';

// ANCHOR Model
import { useSignUpFormPhoneNumberHandler } from '@scoped-models/sign-up/SignUpForm';

// ANCHOR Hooks
import { useConstantCallback } from '@lpsci/hooks';

// ANCHOR Functions
import { numberOnlyInput } from '@functions/numberOnlyInput';

// ANCHOR Constants
import { USER_PHONE_NUMBER_LABEL, USER_PHONE_NUMBER_PLACEHOLDER } from '@constants/forms/user';

export const LpsciSignUpPhoneNumber = React.memo(() => {
  const setPhoneNumber = useSignUpFormPhoneNumberHandler();

  const [text, setText] = React.useState<string>('');
  const [country, setCountry] = React.useState<Country>({
    label: 'Philippines', id: 'PH', dialCode: '+63',
  });

  const onCountryChange = useConstantCallback(({ option }) => setCountry(option));

  const onTextChange = useConstantCallback(
    (event: React.SyntheticEvent<HTMLInputElement>) => {
      const currentValue = event.currentTarget.value;
      setText(currentValue);
      setPhoneNumber(`${country.dialCode}${currentValue}`);
    },
  );

  const onKeyPress = useConstantCallback(
    (event: React.KeyboardEvent<HTMLInputElement>) => {
      numberOnlyInput(event);
    },
  );

  return (
    <FormControl label={USER_PHONE_NUMBER_LABEL}>
      <PhoneInput
        country={country}
        onCountryChange={onCountryChange}
        onTextChange={onTextChange}
        onKeyPress={onKeyPress}
        text={text}
        size={SIZE.compact}
        placeholder={USER_PHONE_NUMBER_PLACEHOLDER}
      />
    </FormControl>
  );
});
