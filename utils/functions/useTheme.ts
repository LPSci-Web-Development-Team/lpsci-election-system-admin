// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import {
  createTheme, lightThemePrimitives, createDarkTheme, darkThemePrimitives,
} from 'baseui';

// ANCHOR Themes
import { LIGHT_THEME, DARK_THEME } from '@themes/theme';

/**
 * ANCHOR: Returns the user's theme preference, isLight
 * theme check, and isDark theme check.
 *
 * The user's theme preference is storred in their
 * localStorage with the key "theme".
 */
export const useTheme = () => {
  const initialTheme = typeof window === 'undefined'
    ? 'light'
    : window.localStorage.getItem('theme');

  const [state, setState] = React.useState<string>(initialTheme ?? 'light');

  // ANCHOR Toggle between dark and light
  const toggle = React.useCallback(() => {
    if (state === 'dark') {
      window.localStorage.setItem('theme', 'light');
      setState('light');
    } else {
      window.localStorage.setItem('theme', 'dark');
      setState('dark');
    }
  }, [state]);

  // ANCHOR Smart Theme Definition
  const theme = !state || state === 'light'
    ? createTheme(lightThemePrimitives, LIGHT_THEME)
    : createDarkTheme(darkThemePrimitives, DARK_THEME);

  return React.useMemo(() => ({
    theme,
    isLight: !state || state === 'light',
    isDark: state === 'dark',
    toggle,
  }), [state, theme, toggle]);
};
