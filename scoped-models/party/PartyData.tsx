// ANCHOR SWR
import useSWR from 'swr';

// ANCHOR Model
import createModel from '@lxsmnsyc/react-scoped-model';

// ANCHOR API
import { getParties } from '@api/party';
import { IPartyResult } from '@api/results/party';

// ANCHOR Hooks
import { useAuthToken } from '@firebase/hooks/useAuthToken';

interface IState {
  data?: IPartyResult[];
  error: any;
  mutate: () => Promise<IPartyResult[] | undefined>;
}

export const PartyData = createModel<IState>(() => {
  const { data: token } = useAuthToken();

  const { data, error, mutate } = useSWR(
    (token ? '/party' : null),
    () => (token ? getParties({ token }) : undefined),
  );

  return {
    data,
    error,
    mutate,
  };
}, {
  displayName: 'Models.PartyData',
});
