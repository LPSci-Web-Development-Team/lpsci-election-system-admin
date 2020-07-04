// ANCHOR SWR
import useSWR from 'swr';

// ANCHOR Model
import createModel from '@lxsmnsyc/react-scoped-model';

// ANCHOR API
import { getCandidatesForParty } from '@api/party';
import { ICandidateResult } from '@api/results/candidate';

// ANCHOR Hooks
import { useAuthToken } from '@firebase/hooks/useAuthToken';

interface IState {
  data?: ICandidateResult[];
  error: any;
  mutate: () => Promise<ICandidateResult[] | undefined>;
}

interface IProps {
  id: string;
}

export const PartyCandidatesData = createModel<IState, IProps>(({
  id,
}: IProps) => {
  const { data: token } = useAuthToken();

  const { data, error, mutate } = useSWR(
    (token ? `/party/${id}/candidates` : null),
    () => (token ? getCandidatesForParty({ id, token }) : undefined),
  );

  return {
    data,
    error,
    mutate,
  };
}, {
  displayName: 'Models.PartyCandidatesData',
});
