// ANCHOR React
import * as React from 'react';

// ANCHOR Themes
import { THEME } from '@themes/theme';

// ANCHOR Hooks
import { useAuthState } from './useAuthState';

// ANCHOR Base URL for UI Avatar
const BASE_URL = `https://ui-avatars.com/api/?background=${(THEME.colors.primary).slice(1)}&color=${(THEME.colors.backgroundPrimary).slice(1)}&size=256&name=`;

export function useAuthProfilePhoto() {
  // get user data
  const { user } = useAuthState();

  const name = user ? (user.displayName ?? 'Cedrick Castro') : 'Cedrick Castro';

  // generate avatar from username
  const avatar = React.useMemo(() => `${BASE_URL}${name}`, [name]);

  return React.useMemo(() => {
    // Check if user exists
    if (user && user.photoURL) {
      return user.photoURL;
    }

    return avatar;
  }, [avatar, user]);
}
