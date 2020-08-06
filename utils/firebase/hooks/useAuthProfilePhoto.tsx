// ANCHOR React
import React from 'react';

// ANCHOR Hooks
import { useAuthState } from './useAuthState';
import { useAvatar } from './useAvatar';

export function useAuthProfilePhoto() {
  // get user data
  const { user } = useAuthState();

  // generate avatar from username
  const avatar = useAvatar(user?.displayName ?? 'Cedrick Castro');

  return React.useMemo(() => {
    // Check if user exists
    if (user && user.photoURL) {
      return user.photoURL;
    }

    return avatar;
  }, [avatar, user]);
}
