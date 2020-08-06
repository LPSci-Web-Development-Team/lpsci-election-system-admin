// ANCHOR React
import React from 'react';

// ANCHOR Next
import Router from 'next/router';

// ANCHOR Models
import { FirebaseAuth } from '@scoped-models/firebase/FirebaseAuth';

export function useAuthSignOut() {
  // get instance
  const authInstance = FirebaseAuth.useSelector((state) => state.auth);

  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<any>();

  const call = React.useCallback(async () => {
    setLoading(true);

    if (authInstance && authInstance.currentUser) {
      try {
        await authInstance.signOut();
        await Router.replace('/');
      } catch (err) {
        setError(err);
      }
    }
    setLoading(false);
  }, [authInstance]);

  return React.useMemo(() => ({
    loading,
    error,
    call,
  }), [loading, error, call]);
}
