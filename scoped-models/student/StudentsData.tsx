// ANCHOR SWR
import useSWR from 'swr';

// ANCHOR Model
import createModel from '@lxsmnsyc/react-scoped-model';

// ANCHOR API
import { getStudents } from '@api/student';
import { IStudentResult } from '@api/results/student';

// ANCHOR Hooks
import { useAuthToken } from '@firebase/hooks/useAuthToken';

interface IState {
  data?: IStudentResult[];
  error: any;
  mutate: () => Promise<IStudentResult[] | undefined>;
}

export const StudentsData = createModel<IState>(() => {
  const { data: token } = useAuthToken();

  const { data, error, mutate } = useSWR(
    (token ? '/student' : null),
    () => (token ? getStudents({ token }) : undefined),
  );

  return {
    data,
    error,
    mutate,
  };
}, {
  displayName: 'Models.StudentData',
});
