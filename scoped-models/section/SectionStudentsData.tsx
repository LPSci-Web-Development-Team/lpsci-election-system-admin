// ANCHOR SWR
import useSWR from 'swr';

// ANCHOR Model
import createModel from '@lxsmnsyc/react-scoped-model';

// ANCHOR API
import { getStudentsForSection } from '@api/section';
import { IStudentResult } from '@api/results/student';

// ANCHOR Hooks
import { useAuthToken } from '@firebase/hooks/useAuthToken';

interface IState {
  data?: IStudentResult[];
  error: any;
  mutate: () => Promise<IStudentResult[] | undefined>;
}

interface IProps {
  id: string;
}

export const SectionStudentData = createModel<IState, IProps>(({
  id,
}: IProps) => {
  const { data: token } = useAuthToken();

  const { data, error, mutate } = useSWR(
    (token ? `/section/${id}/students` : null),
    () => (token ? getStudentsForSection({ id, token }) : undefined),
  );

  return {
    data,
    error,
    mutate,
  };
}, {
  displayName: 'Models.SectionStudentData',
});
