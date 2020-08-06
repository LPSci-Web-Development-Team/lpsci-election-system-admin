// ANCHOR React
import React from 'react';

// ANCHOR Model
import createModel from '@lxsmnsyc/react-scoped-model';

// ANCHOR Hooks
import { useDebouncedState } from '@lpsci/hooks';
import { SetState } from '@lpsci/hooks/dist/_utils/types';

// ANCHOR Firebase
import { useAuthToken } from '@firebase/hooks/useAuthToken';
import { createSchoolYear } from '@api/school-year';

interface IState {
  state: {
    startYear: string;
    endYear: string;
    loading: boolean;
    error: string;
  };
  handler: {
    startYear: SetState<string>;
    endYear: SetState<string>;
    submit: (event: React.FormEvent<HTMLFormElement>) => Promise<void>;
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

  const submit = React.useCallback(async (
    event: React.FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();

    setError('');
    setLoading(true);

    if (token) {
      await createSchoolYear({
        token,
        year: `${startYear}-${endYear}`,
      })
        .catch((err) => setError(err.message))
        .finally(() => setLoading(false));
    } else {
      setError('Sign-in required');
      setLoading(false);
    }
  }, [endYear, startYear, token]);

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
