// ANCHOR React
import React from 'react';

// ANCHOR Model
import createModel from '@lxsmnsyc/react-scoped-model';

// ANCHOR Hooks
import { SetState } from '@lpsci/hooks/dist/_utils/types';

// ANCHOR Firebase
import { useAuthToken } from '@firebase/hooks/useAuthToken';

// ANCHOR API
import { createCandidate } from '@api/candidate';
import { EPosition } from '@payloads/candidate';

interface IState {
  state: {
    position?: EPosition;
    studentId?: string;
    partyId?: string;
    loading: boolean;
    error: string;
  };
  handler: {
    position: SetState<EPosition | undefined>;
    studentId: SetState<string>;
    partyId: SetState<string>;
    submit: (event: React.FormEvent<HTMLFormElement>) => Promise<void>;
  }
  valid: {
    all: boolean;
    position: boolean;
    studentId: boolean;
    partyId: boolean;
  }
}

export const CreateCandidateForm = createModel<IState>(() => {
  const [position, setPosition] = React.useState<EPosition>();
  const [studentId, setStudentId] = React.useState<string>('');
  const [partyId, setPartyId] = React.useState<string>('');

  const [loading, setLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string>('');

  const { data: token } = useAuthToken();

  const submit = React.useCallback(async (
    event: React.FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();

    setError('');
    setLoading(true);

    if (token && position) {
      await createCandidate({
        token,
        studentId,
        partyId,
        position,
      })
        .catch((err) => setError(err.message))
        .finally(() => setLoading(false));
    } else {
      setError('Sign-in required');
      setLoading(false);
    }
  }, [partyId, position, studentId, token]);

  const validPosition = !!position;
  const validStudent = !!studentId;
  const validParty = !!partyId;
  const validAll = validPosition
    && validStudent;

  return {
    state: {
      position,
      studentId,
      partyId,
      loading,
      error,
    },
    handler: {
      position: setPosition,
      studentId: setStudentId,
      partyId: setPartyId,
      submit,
    },
    valid: {
      all: validAll,
      position: validPosition,
      studentId: validStudent,
      partyId: validParty,
    },
  };
},
{
  displayName: 'Models.CreateCandidateForm',
});
