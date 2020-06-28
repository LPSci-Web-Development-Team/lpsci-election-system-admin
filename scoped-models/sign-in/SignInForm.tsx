// ANCHOR React
import * as React from 'react';

// ANCHOR Model
import createModel from '@lxsmnsyc/react-scoped-model';

// ANCHOR LPSci Hooks
import { useDebouncedState, useDebouncedCallback } from '@lpsci/hooks';
import { SetState, State } from '@lpsci/hooks/dist/_utils/types';

// ANCHOR Functions
import { isEmail } from '@functions/isEmail';

interface IState {
  state: {
    email: State<string>;
    password: State<string>;
    loading: boolean;
    error: string;
  };
  handler: {
    email: SetState<string>;
    password: SetState<string>;
    submit: (event: React.FormEvent<HTMLFormElement>) => Promise<void>;
  }
  valid: {
    all: boolean,
    email: boolean,
    password: boolean,
  }
}

export const SignInForm = createModel<IState>(() => {
  const [email, setEmail] = useDebouncedState<string>('');
  const [password, setPassword] = useDebouncedState<string>('');

  const [loading, setLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string>('');

  const signIn = useDebouncedCallback(() => {
    call(email, password)
      .then(
        () => setError(''),
        () => setError('Invalid Credentials'),
      )
      .finally(() => setLoading(false));
  }, 200, [
    call, email, password, setLoading, setError,
  ]);

  const submit = React.useCallback(async (
    event: React.FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();

    setLoading(true);

    await signIn();
  }, [setLoading, signIn]);

  const validEmail = isEmail(email as string);
  const validPassword = password.length > 7;
  const validAll = validEmail && validPassword;

  return {
    state: {
      email,
      password,
      loading,
      error,
    },
    handler: {
      email: setEmail,
      password: setPassword,
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
  displayName: 'Models.SignInForm',
});