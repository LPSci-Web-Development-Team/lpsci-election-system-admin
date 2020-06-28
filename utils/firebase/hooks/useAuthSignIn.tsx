// ANCHOR React
import * as React from 'react';

// ANCHOR Models
import { FirebaseAuth } from '@scoped-models/firebase/FirebaseAuth';

export function useAuthSignIn() {
  // get instance
  const authInstance = FirebaseAuth.useSelector((state) => state.auth);

  const signinCore = React.useCallback(async (email: string, password: string) => {
    if (authInstance) {
      try {
        await authInstance.signInWithEmailAndPassword(email, password);
      } catch (err) {
        throw new Error(err);
      }
    }
  }, [authInstance]);

  const call = React.useCallback(async (email: string, password: string) => {
    if (authInstance && authInstance.currentUser) {
      try {
        await authInstance.signOut();
      } catch (err) {
        throw new Error(err);
      }
    }

    await signinCore(email, password);
  }, [authInstance, signinCore]);

  return React.useMemo(() => ({
    call,
  }), [call]);
}
