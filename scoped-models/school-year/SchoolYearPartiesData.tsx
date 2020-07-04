// ANCHOR SWR
import useSWR from 'swr';

// ANCHOR Model
import createModel from '@lxsmnsyc/react-scoped-model';

// ANCHOR API
import { getPartiesForSchoolYear } from '@api/school-year';
import { IPartyResult } from '@api/results/party';

// ANCHOR Hooks
import { useAuthToken } from '@firebase/hooks/useAuthToken';

interface IState {
  data?: IPartyResult[];
  error: any;
  mutate: () => Promise<IPartyResult[] | undefined>;
}

interface IProps {
  id: string;
}

export const SchoolYearPartiesData = createModel<IState, IProps>(({
  id,
}: IProps) => {
  const { data: token } = useAuthToken();

  const { data, error, mutate } = useSWR(
    (token ? `/school-year/${id}/parties` : null),
    () => (token ? getPartiesForSchoolYear({ id, token }) : undefined),
  );

  return {
    data,
    error,
    mutate,
  };
}, {
  displayName: 'Models.SchoolYearPartiesData',
});
