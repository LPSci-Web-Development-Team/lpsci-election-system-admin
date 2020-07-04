// ANCHOR React
import * as React from 'react';

// ANCHOR Model
import createModel from '@lxsmnsyc/react-scoped-model';

// ANCHOR Hooks
import { useDebouncedState } from '@lpsci/hooks';
import { SetState, State } from '@lpsci/hooks/dist/_utils/types';

// ANCHOR Firebase
import { useAuthToken } from '@firebase/hooks/useAuthToken';

// ANCHOR API
import { createSection } from '@api/section';
import { EGrade } from '@payloads/section';

interface IState {
  state: {
    name: State<string>;
    gradeLevel: State<EGrade | undefined>;
    adviser: State<string>;
    schoolYear: State<string>;
    loading: boolean;
    error: string;
  };
  handler: {
    name: SetState<string>;
    gradeLevel: SetState<EGrade | undefined>;
    adviser: SetState<string>;
    schoolYear: SetState<string>;
    submit: (event: React.FormEvent<HTMLFormElement>) => Promise<void>;
  }
  valid: {
    all: boolean;
    name: boolean;
    gradeLevel: boolean;
    adviser: boolean;
    schoolYear: boolean;
  }
}

export const CreateSectionForm = createModel<IState>(() => {
  const [name, setName] = useDebouncedState<string>('');
  const [gradeLevel, setGradeLevel] = useDebouncedState<EGrade | undefined>(undefined);
  const [adviser, setAdviser] = useDebouncedState<string>('');
  const [schoolYear, setSchoolYear] = React.useState<string>('');

  const [loading, setLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string>('');

  const { data: token } = useAuthToken();

  const submit = React.useCallback(async (
    event: React.FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();

    setError('');
    setLoading(true);

    if (token && gradeLevel) {
      await createSection({
        token,
        name,
        gradeLevel,
        adviser,
        schoolYear,
      })
        .catch((err) => setError(err.message))
        .finally(() => setLoading(false));
    } else {
      setError('Sign-in required');
      setLoading(false);
    }
  }, [adviser, gradeLevel, name, schoolYear, token]);

  const validName = name.length > 0;
  const validGradeLevel = gradeLevel && gradeLevel.length >= 1 && gradeLevel.length <= 2;
  const validAdviser = adviser.length > 0;
  const validSchoolYear = schoolYear.length > 0;
  const validAll = validName
    && validGradeLevel
    && validAdviser
    && validSchoolYear;

  return {
    state: {
      name,
      gradeLevel,
      adviser,
      schoolYear,
      loading,
      error,
    },
    handler: {
      name: setName,
      gradeLevel: setGradeLevel,
      adviser: setAdviser,
      schoolYear: setSchoolYear,
      submit,
    },
    valid: {
      all: validAll,
      name: validName,
      gradeLevel: validGradeLevel,
      adviser: validAdviser,
      schoolYear: validSchoolYear,
    },
  };
},
{
  displayName: 'Models.CreateSectionForm',
});
