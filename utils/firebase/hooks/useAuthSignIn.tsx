// ANCHOR React
import * as React from 'react';

// ANCHOR Models
import { FirebaseAuth } from '@scoped-models/firebase/FirebaseAuth';

export function useAuthSignIn() {
  // get instance
  const authInstance = FirebaseAuth.useSelector((state) => state.auth);

  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<any>();

  const signinCore = React.useCallback(async (email: string, password: string) => {
    if (authInstance) {
      try {
        await authInstance.signInWithEmailAndPassword(email, password);
      } catch (err) {
        setError(err);
      }
      setLoading(false);
    }
  }, [authInstance]);

  const call = React.useCallback(async (email: string, password: string) => {
    setLoading(true);

    if (authInstance && authInstance.currentUser) {
      try {
        await authInstance.signOut();
      } catch (err) {
        setError(err);
        setLoading(false);
        return;
      }
    }

    await signinCore(email, password);
  }, [authInstance, signinCore]);

  return React.useMemo(() => ({
    loading,
    error,
    call,
  }), [loading, error, call]);
}
