// ANCHOR React
import * as React from 'react';

// ANCHOR Model
import createModel from '@lxsmnsyc/react-scoped-model';

// ANCHOR Hooks
import { SetState } from '@lpsci/hooks/dist/_utils/types';

// ANCHOR Firebase
import { useAuthToken } from '@firebase/hooks/useAuthToken';

// ANCHOR API
import { createParty, updateParty } from '@api/party';
import { IPartyResult } from '@api/results/party';

interface IState {
  state: {
    name: string;
    color?: string;
    schoolYear?: string;
    loading: boolean;
    error: string;
  };
  handler: {
    name: SetState<string>;
    color: SetState<string>;
    schoolYear: SetState<string | undefined>;
    submit: (event: React.FormEvent<HTMLFormElement>) => Promise<void>;
  }
  valid: {
    all: boolean;
    name: boolean;
    color: boolean;
    schoolYear: boolean;
    create: boolean;
  }
}

interface IProps {
  id?: string;
  initialData?: IPartyResult;
}

export const CreatePartyForm = createModel<IState, IProps>(({
  id, initialData,
}: IProps) => {
  const [name, setName] = React.useState<string>(initialData?.name ?? '');
  const [color, setColor] = React.useState<string>(initialData?.color ?? '');
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

    if (token) {
      if (schoolYear) {
        await createParty({
          token,
          name,
          color,
          schoolYear,
        })
          .catch((err) => setError(err.message))
          .finally(() => setLoading(false));
      } else if (id) {
        await updateParty({
          token,
          id,
          name,
          color,
        })
          .catch((err) => setError(err.message))
          .finally(() => setLoading(false));
      }
    } else {
      setError('Sign-in required');
      setLoading(false);
    }
  }, [color, id, name, schoolYear, token]);

  const validName = name.length > 0;
  const validColor = color.length > 0;
  const validSchoolYear = !!initialData || (!!schoolYear && schoolYear.length > 0);
  const validAll = validName
    && validColor
    && validSchoolYear;

  return {
    state: {
      name,
      color,
      schoolYear,
      loading,
      error,
    },
    handler: {
      name: setName,
      color: setColor,
      schoolYear: setSchoolYear,
      submit,
    },
    valid: {
      all: validAll,
      name: validName,
      color: validColor,
      schoolYear: validSchoolYear,
      create: !initialData,
    },
  };
},
{
  displayName: 'Models.CreatePartyForm',
});
