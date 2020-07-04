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
import { createSection, updateSection } from '@api/section';
import { EGrade } from '@payloads/section';
import { ISectionResult } from '@api/results/section';

interface IState {
  state: {
    name: State<string>;
    gradeLevel: State<EGrade | undefined>;
    adviser: State<string>;
    schoolYear: State<string | undefined>;
    loading: boolean;
    error: string;
  };
  handler: {
    name: SetState<string>;
    gradeLevel: SetState<EGrade | undefined>;
    adviser: SetState<string>;
    schoolYear: SetState<string | undefined>;
    submit: (event: React.FormEvent<HTMLFormElement>) => Promise<void>;
  }
  valid: {
    all: boolean;
    name: boolean;
    gradeLevel: boolean;
    adviser: boolean;
    schoolYear: boolean;
    create: boolean;
  }
}

interface IProps {
  id?: string;
  initialData?: ISectionResult;
}

export const CreateSectionForm = createModel<IState, IProps>(({
  id, initialData,
}: IProps) => {
  const [name, setName] = useDebouncedState<string>(initialData?.name ?? '');
  const [
    gradeLevel, setGradeLevel,
  ] = useDebouncedState<EGrade | undefined>(initialData?.gradeLevel);
  const [adviser, setAdviser] = useDebouncedState<string>(initialData?.adviser ?? '');
  const [schoolYear, setSchoolYear] = React.useState<string>();

  const [loading, setLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string>('');

  const { data: token } = useAuthToken();

  const submit = React.useCallback(async (
    event: React.FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();

    setError('');
    setLoading(true);

    if (token && gradeLevel && schoolYear) {
      if (!initialData || !id) {
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
        await updateSection({
          token,
          id,
          name,
          gradeLevel,
          adviser,
        })
          .catch((err) => setError(err.message))
          .finally(() => setLoading(false));
      }
    } else {
      setError('Sign-in required');
      setLoading(false);
    }
  }, [adviser, gradeLevel, id, initialData, name, schoolYear, token]);

  const validName = name.length > 0;
  const validGradeLevel = !!gradeLevel && gradeLevel.length >= 1 && gradeLevel.length <= 2;
  const validAdviser = adviser.length > 0;
  const validSchoolYear = !!schoolYear && schoolYear.length > 0;
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
      create: !initialData,
    },
  };
},
{
  displayName: 'Models.CreateSectionForm',
});
