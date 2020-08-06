// ANCHOR SWR
import useSWR from 'swr';

// ANCHOR Model
import createModel from '@lxsmnsyc/react-scoped-model';

// ANCHOR API
import { getCandidates } from '@api/candidate';
import { ICandidateResult } from '@api/results/candidate';

// ANCHOR Hooks
import { useAuthToken } from '@firebase/hooks/useAuthToken';

interface IState {
  data?: ICandidateResult[];
  error: any;
  mutate: () => Promise<ICandidateResult[] | undefined>;
}

export const CandidatesData = createModel<IState>(() => {
  const { data: token } = useAuthToken();

  const { data, error, mutate } = useSWR(
    (token ? '/candidate' : null),
    () => (token ? getCandidates({ token }) : undefined),
  );

  return {
    data,
    error,
    mutate,
  };
}, {
  displayName: 'Models.CandidatesData',
});
