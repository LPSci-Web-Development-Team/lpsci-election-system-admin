// ANCHOR SWR
import useSWR from 'swr';

// ANCHOR Model
import createModel from '@lxsmnsyc/react-scoped-model';

// ANCHOR API
import { getSectionsForSchoolYear } from '@api/school-year';
import { ISectionResult } from '@api/results/section';

// ANCHOR Hooks
import { useAuthToken } from '@firebase/hooks/useAuthToken';

interface IState {
  data?: ISectionResult[];
  error: any;
  mutate: () => Promise<ISectionResult[] | undefined>;
}

interface IProps {
  id: string;
}

export const SchoolYearSectionsData = createModel<IState, IProps>(({
  id,
}: IProps) => {
  const { data: token } = useAuthToken();

  const { data, error, mutate } = useSWR(
    (token ? `/school-year/${id}/sections` : null),
    () => (token ? getSectionsForSchoolYear({ id, token }) : undefined),
  );

  return {
    data,
    error,
    mutate,
  };
}, {
  displayName: 'Models.SchoolYearSectionsData',
});
