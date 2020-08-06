// ANCHOR SWR
import useSWR from 'swr';

// ANCHOR Hooks
import { useAuthState } from './useAuthState';

interface IToken {
  data?: string;
  error: any;
}

export function useAuthToken(): IToken {
  const { user } = useAuthState();

  const { data, error } = useSWR(
    () => (user ? '/auth/token' : null),
    () => user?.getIdToken(),
  );

  return {
    data,
    error,
  };
}
