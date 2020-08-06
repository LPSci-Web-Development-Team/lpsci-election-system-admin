// ANCHOR React
import React from 'react';

// ANCHOR Model
import createModel from '@lxsmnsyc/react-scoped-model';

// ANCHOR Hooks
import { SetState } from '@lpsci/hooks/dist/_utils/types';

// ANCHOR Firebase
import { useAuthToken } from '@firebase/hooks/useAuthToken';

// ANCHOR API
import { createStudent, updateStudent } from '@api/student';
import { IStudentResult } from '@api/results/student';

interface IState {
  state: {
    lrn: string;
    user?: string;
    loading: boolean;
    error: string;
  };
  handler: {
    lrn: SetState<string>;
    user: SetState<string | undefined>;
    submit: (event: React.FormEvent<HTMLFormElement>) => Promise<void>;
  }
  valid: {
    all: boolean;
    lrn: boolean;
    user: boolean;
    create: boolean;
  }
}

interface IProps {
  id?: string;
  initialData?: IStudentResult;
}

export const CreateStudentForm = createModel<IState, IProps>(({
  id, initialData,
}: IProps) => {
  const [lrn, setLrn] = React.useState<string>(initialData?.learnerReferenceNumber ?? '');
  const [user, setUser] = React.useState<string>();

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
      if (user) {
        await createStudent({
          token,
          learnerReferenceNumber: lrn,
          userId: user,
        })
          .catch((err) => setError(err.message))
          .finally(() => setLoading(false));
      } else if (id) {
        await updateStudent({
          token,
          id,
          learnerReferenceNumber: lrn,
        })
          .catch((err) => setError(err.message))
          .finally(() => setLoading(false));
      }
    } else {
      setError('Sign-in required');
      setLoading(false);
    }
  }, [id, lrn, token, user]);

  const validLrn = lrn.length === 12;
  const validUser = !!initialData || (!!user && user.length > 0);
  const validAll = validLrn
    && validUser;

  return {
    state: {
      lrn,
      user,
      loading,
      error,
    },
    handler: {
      lrn: setLrn,
      user: setUser,
      submit,
    },
    valid: {
      all: validAll,
      lrn: validLrn,
      user: validUser,
      create: !initialData,
    },
  };
},
{
  displayName: 'Models.CreateStudentForm',
});
