// ANCHOR React
import { useCallback, useEffect, useState } from 'react';

// ANCHOR Model
import { createNullaryModel, createSelector, createSelectors } from 'react-scoped-model';

// ANCHOR Hooks
import { useDebouncedState } from '@lpsci/hooks';

// ANCHOR Functions
import { isEmail } from '@functions/isEmail';

// ANCHOR Payloads
import { ESex } from '@payloads/user';
import { signUp } from '@api/user';

export const SignUpForm = createNullaryModel(
  () => {
    const [firstName, setFirstName] = useDebouncedState('');
    const [middleName, setMiddleName] = useDebouncedState('');
    const [lastName, setLastName] = useDebouncedState('');
    const [email, setEmail] = useDebouncedState('');
    const [password, setPassword] = useDebouncedState('');
    const [streetAddress, setStreetAddress] = useDebouncedState('');
    const [barangay, setBarangay] = useDebouncedState('');
    const [city, setCity] = useDebouncedState('');
    const [phoneNumber, setPhoneNumber] = useDebouncedState('');
    const [sex, setSex] = useState<ESex>(ESex.Male);
    const [birthDate, setBirthDate] = useDebouncedState('');

    const validEmail = isEmail(email);
    const validPassword = password.length > 7;
    const validName = firstName.length > 1
      && lastName.length > 1;
    const validAddress = streetAddress.length > 1
      && barangay.length > 1
      && city.length > 1;
    const validBirthDate = !!birthDate;
    const validAll = validEmail
      && validPassword
      && validName
      && validAddress
      && validBirthDate;

    const [loading, setLoading] = useState(false);

    const submit = useCallback(
      async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (validAll) {
          setLoading(true);

          await signUp({
            firstName,
            middleName,
            lastName,
            email,
            password,
            streetAddress,
            barangay,
            city,
            phoneNumber,
            sex,
            birthDate,
          });

          setLoading(false);
        }
      }, [
        barangay, birthDate, city, email,
        firstName, lastName, middleName, password,
        phoneNumber, sex, streetAddress, validAll,
      ],
    );

    return {
      state: {
        firstName,
        middleName,
        lastName,
        email,
        password,
        streetAddress,
        barangay,
        city,
        phoneNumber,
        sex,
        birthDate,
        loading,
      },
      handler: {
        firstName: setFirstName,
        middleName: setMiddleName,
        lastName: setLastName,
        email: setEmail,
        password: setPassword,
        streetAddress: setStreetAddress,
        barangay: setBarangay,
        city: setCity,
        phoneNumber: setPhoneNumber,
        sex: setSex,
        birthDate: setBirthDate,
        submit,
      },
      valid: {
        all: validAll,
        email: validEmail,
        password: validPassword,
      },
    };
  },
  {
    displayName: 'Models.SignUpForm',
  },
);

export const useSignUpFormFirstNameHandler = createSelector(
  SignUpForm,
  ({ handler }) => handler.firstName,
);

export const useSignUpFormMiddleNameHandler = createSelector(
  SignUpForm,
  ({ handler }) => handler.middleName,
);
export const useSignUpFormLastNameHandler = createSelector(
  SignUpForm,
  ({ handler }) => handler.lastName,
);

export const useSignUpFormEmailHandler = createSelector(
  SignUpForm,
  ({ handler }) => handler.email,
);

export const useSignUpFormPasswordHandler = createSelector(
  SignUpForm,
  ({ handler }) => handler.password,
);

export const useSignUpFormStreetAddressHandler = createSelector(
  SignUpForm,
  ({ handler }) => handler.streetAddress,
);

export const useSignUpFormBarangayHandler = createSelector(
  SignUpForm,
  ({ handler }) => handler.barangay,
);

export const useSignUpFormCityHandler = createSelector(
  SignUpForm,
  ({ handler }) => handler.city,
);

export const useSignUpFormPhoneNumberHandler = createSelector(
  SignUpForm,
  ({ handler }) => handler.phoneNumber,
);

export const useSignUpFormSexHandler = createSelector(
  SignUpForm,
  ({ handler }) => handler.sex,
);

export const useSignUpFormBirthDateHandler = createSelector(
  SignUpForm,
  ({ handler }) => handler.birthDate,
);

export const useSignUpFormSubmitHandler = createSelector(
  SignUpForm,
  ({ handler }) => handler.submit,
);

export const useSignUpFormLoadingValidState = createSelectors(
  SignUpForm,
  ({ state, valid }) => [
    state.loading,
    valid.all,
  ],
);
