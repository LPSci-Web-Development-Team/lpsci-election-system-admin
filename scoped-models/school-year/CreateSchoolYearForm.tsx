// ANCHOR React
import * as React from 'react';

// ANCHOR Model
import createModel from '@lxsmnsyc/react-scoped-model';

// ANCHOR LPSci Hooks
import { useDebouncedState } from '@lpsci/hooks';
import { SetState, State } from '@lpsci/hooks/dist/_utils/types';

// ANCHOR Firebase
import { useAuthToken } from '@firebase/hooks/useAuthToken';

interface IState {
  state: {
    startYear: State<string>;
    endYear: State<string>;
    loading: boolean;
    error: string;
  };
  handler: {
    startYear: SetState<string>;
    endYear: SetState<string>;
    submit: (event: React.FormEvent<HTMLFormElement>) => void;
  }
  valid: {
    all: boolean,
    startYear: boolean,
    endYear: boolean,
  }
}

export const CreateSchoolYearForm = createModel<IState>(() => {
  const [startYear, setStartYear] = useDebouncedState<string>('');
  const [endYear, setEndYear] = useDebouncedState<string>('');

  const [loading, setLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string>('');

  const { data: token } = useAuthToken();

  const submit = React.useCallback((
    event: React.FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();

    setLoading(true);
    setError('');

    if (token) {
      setError('');
    }
  }, [token]);

  const validStartYear = startYear.length === 4;
  const validEndYear = endYear.length === 4;
  const validAll = validStartYear
    && validEndYear
    && startYear !== endYear
    && Number(endYear) - Number(startYear) === 1;

  return {
    state: {
      startYear,
      endYear,
      loading,
      error,
    },
    handler: {
      startYear: setStartYear,
      endYear: setEndYear,
      submit,
    },
    valid: {
      all: validAll,
      startYear: validStartYear,
      endYear: validEndYear,
    },
  };
},
{
  displayName: 'Models.CreateSchoolYearForm',
});
