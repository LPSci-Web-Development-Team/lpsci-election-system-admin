// ANCHOR React
import React from 'react';

// ANCHOR Models
import { ThemePreference } from '@scoped-models/theme/ThemePreference';

// ANCHOR Hooks
import { LIGHT_THEME, DARK_THEME } from '@themes/theme';

export function useAvatar(name: string) {
  const isLight = ThemePreference.useSelector((state) => state.isLight);

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

  // generate avatar from username
  const avatar = React.useMemo(() => `${baseUrl}${name}`, [baseUrl, name]);

  return React.useMemo(() => avatar, [avatar]);
}
