// ANCHOR SWR
import useSWR from 'swr';

// ANCHOR Model
import createModel from '@lxsmnsyc/react-scoped-model';

// ANCHOR API
import { getSchoolYears } from '@api/school-year';
import { ISchoolYearResult } from '@api/results/school-year';

// ANCHOR Hooks
import { useAuthToken } from '@firebase/hooks/useAuthToken';

interface IState {
  data?: ISchoolYearResult[];
  error: any;
  mutate: () => Promise<ISchoolYearResult[] | undefined>;
}

export const SchoolYearData = createModel<IState>(() => {
  const { data: token } = useAuthToken();

  const { data, error, mutate } = useSWR(
    (token ? '/school-year' : null),
    () => (token ? getSchoolYears({ token }) : undefined),
  );

  return {
    data,
    error,
    mutate,
  };
}, {
  displayName: 'Models.SchoolYearData',
});
