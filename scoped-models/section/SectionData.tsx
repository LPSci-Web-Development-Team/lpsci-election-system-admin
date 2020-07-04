// ANCHOR SWR
import useSWR from 'swr';

// ANCHOR Model
import createModel from '@lxsmnsyc/react-scoped-model';

// ANCHOR API
import { getSections } from '@api/section';
import { ISectionResult } from '@api/results/section';

// ANCHOR Hooks
import { useAuthToken } from '@firebase/hooks/useAuthToken';

interface IState {
  data?: ISectionResult[];
  error: any;
  mutate: () => Promise<ISectionResult[] | undefined>;
}

export const SectionData = createModel<IState>(() => {
  const { data: token } = useAuthToken();

  const { data, error, mutate } = useSWR(
    (token ? '/section' : null),
    () => (token ? getSections({ token }) : undefined),
  );

  return {
    data,
    error,
    mutate,
  };
}, {
  displayName: 'Models.SectionData',
});
