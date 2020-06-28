// ANCHOR React
import * as React from 'react';

// ANCHOR Hooks
import { useAuthState } from './useAuthState';

// ANCHOR Base URL for UI Avatar
const BASE_URL = 'https://ui-avatars.com/api/?background=5B36C9&color=ffffff&size=256&name=';

const EMPTY = '?';

export function useAuthProfilePhoto() {
  // get user data
  const { user } = useAuthState();

  const name = user ? user.displayName : EMPTY;

  // generate avatar from username
  const avatar = React.useMemo(() => `${BASE_URL}${name}`, [name]);

  return React.useMemo(() => {
    // Check if user exists
    if (user) {
      // Check if there is a photoU
      if (user.photoURL) {
        // Format to photo cdn
        return user.photoURL;
      }

      // return a generated avatar cdn
      return avatar;
    }

    return EMPTY;
  }, [avatar, user]);
}
