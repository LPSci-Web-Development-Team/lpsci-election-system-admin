// ANCHOR React
import * as React from 'react';

// ANCHOR Hooks
import { useTheme } from '@functions/useTheme';
import { LIGHT_THEME, DARK_THEME } from '@themes/theme';
import { useAuthState } from './useAuthState';

// ANCHOR Functions

export function useAuthProfilePhoto() {
  // get user data
  const { user } = useAuthState();

  const { isLight } = useTheme();

  const THEME = isLight
    ? {
      background: LIGHT_THEME.colors.primary,
      color: LIGHT_THEME.colors.backgroundPrimary,
    }
    : {
      background: DARK_THEME.colors.primary,
      color: DARK_THEME.colors.backgroundPrimary,
    };

  const baseUrl = `https://ui-avatars.com/api/?background=${(THEME.background).slice(1)}&color=${(THEME.color).slice(1)}&size=256&name=`;

  const name = user ? (user.displayName ?? 'Cedrick Castro') : 'Cedrick Castro';

  // generate avatar from username
  const avatar = React.useMemo(() => `${baseUrl}${name}`, [baseUrl, name]);

  return React.useMemo(() => {
    // Check if user exists
    if (user && user.photoURL) {
      return user.photoURL;
    }

    return avatar;
  }, [avatar, user]);
}
