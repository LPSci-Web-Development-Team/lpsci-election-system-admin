// ANCHOR React
import * as React from 'react';

// ANCHOR Model
import createModel from '@lxsmnsyc/react-scoped-model';

// ANCHOR Hooks
import { useDebouncedState } from 'utils/hooks/useDebouncedState';
import { useConstant } from '@lpsci/utils/hooks/useConstant';

export const SignInFormInput = createModel(() => {
  const [lrn, setLrn] = useDebouncedState('', 150);
  const [password, setPassword] = useDebouncedState('', 150);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const [validLrn, setValidLrn] = React.useState<boolean>(false);
  const [visitedLrn, setVisitedLrn] = React.useState<boolean>(false);
  const [disabled, setDisabled] = React.useState<boolean>(false);

  const handler = useConstant(() => ({
    lrnPress: (e: React.KeyboardEvent<HTMLInputElement>) => {
      // Only ASCII charactar in that range allowed
      const ASCIICode = (e.which) ? e.which : e.keyCode;
      if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57)) {
        e.preventDefault();
      }
    },
    lrn: (e: React.ChangeEvent<HTMLInputElement>) => {
      setLrn(e.target.value);
      if (e.target.value.length !== 12) {
        setValidLrn(false);
        setVisitedLrn(true);
      } else {
        setValidLrn(true);
        setVisitedLrn(true);
      }
    },
    password: (e: React.ChangeEvent<HTMLInputElement>) => {
      setPassword(e.target.value);
    },
  }));

  const filled = React.useMemo(() => (
    lrn !== ''
    && password !== ''
  ), [lrn, password]);

  return {
    handler,
    filled,
    lrn,
    setLrn,
    password,
    setPassword,
    loading,
    setLoading,
    error,
    setError,
    validLrn,
    setValidLrn,
    visitedLrn,
    setVisitedLrn,
    disabled,
    setDisabled,
  };
});
