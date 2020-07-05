// ANCHOR SWR
import useSWR from 'swr';

// ANCHOR Model
import createModel from '@lxsmnsyc/react-scoped-model';

// ANCHOR API
import { getUsers } from '@api/user';
import { IUserResult } from '@api/results/user';

// ANCHOR Hooks
import { useAuthToken } from '@firebase/hooks/useAuthToken';

interface IState {
  data?: IUserResult[];
  error: any;
  mutate: () => Promise<IUserResult[] | undefined>;
}

export const UserData = createModel<IState>(() => {
  const { data: token } = useAuthToken();

  const { data, error, mutate } = useSWR(
    (token ? '/user' : null),
    () => (token ? getUsers({ token }) : undefined),
  );

  return {
    data,
    error,
    mutate,
  };
}, {
  displayName: 'Models.UserData',
});
