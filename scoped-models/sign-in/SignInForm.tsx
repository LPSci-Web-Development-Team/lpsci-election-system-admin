// ANCHOR Model
import createModel from '@lxsmnsyc/react-scoped-model';

// ANCHOR LPSci Hooks
import { useDebouncedState } from '@lpsci/hooks';
import { SetState, State } from '@lpsci/hooks/dist/_utils/types';

interface IState {
  state: {
    email: State<string>;
    password: State<string>;
  };
  handler: {
    email: SetState<string>
    password: SetState<string>
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

  const validEmail = !!email;
  const validPassword = password.length > 7;
  const validAll = validEmail && validPassword;

  return {
    state: {
      email,
      password,
    },
    handler: {
      email: setEmail,
      password: setPassword,
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
