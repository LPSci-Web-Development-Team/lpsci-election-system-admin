import { useAuthState } from './useAuthState';

export function useAuthRequired(): boolean | undefined {
  const { user } = useAuthState();

  if (typeof user === 'undefined') {
    return undefined;
  }

  return user != null;
}
