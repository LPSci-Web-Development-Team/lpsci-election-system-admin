// ANCHOR SWR
import useSWR from 'swr';

// ANCHOR Model
import createModel from '@lxsmnsyc/react-scoped-model';

// ANCHOR API
import { getVotesForStudent } from '@api/student';
import { IVoteResult } from '@api/results/vote';

// ANCHOR Hooks
import { useAuthToken } from '@firebase/hooks/useAuthToken';

interface IState {
  data?: IVoteResult[];
  error: any;
  mutate: () => Promise<IVoteResult[] | undefined>;
}

interface IProps {
  id: string;
}

export const StudentVotesData = createModel<IState, IProps>(({
  id,
}: IProps) => {
  const { data: token } = useAuthToken();

  const { data, error, mutate } = useSWR(
    (token ? `/student/${id}/votes` : null),
    () => (token ? getVotesForStudent({ id, token }) : undefined),
  );

  return {
    data,
    error,
    mutate,
  };
}, {
  displayName: 'Models.StudentVotesData',
});
