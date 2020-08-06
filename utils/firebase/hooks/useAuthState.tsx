// ANCHOR React
import React from 'react';

// ANCHOR Models
import { FirebaseAuth } from '@scoped-models/firebase/FirebaseAuth';

export function useAuthState() {
  // Get the auth instance
  const authInstance = FirebaseAuth.useSelector((state) => state.auth);

  // represents the user state
  const [error, setError] = React.useState<any>();
  const [user, setUser] = React.useState<firebase.User | null>();

  React.useEffect(() => {
    if (authInstance) {
      return authInstance.onAuthStateChanged(setUser, setError);
    }

    return undefined;
  }, [authInstance]);

  return React.useMemo(() => ({
    error,
    user,
  }), [error, user]);
}
