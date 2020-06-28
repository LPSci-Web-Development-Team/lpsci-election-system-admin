// ANCHOR Base
import { DarkTheme, LightTheme } from 'baseui';

// ANCHOR Theme
import { BREAKPOINTS } from './breakpoints';
import { TYPOGRAPHY } from './typography';

export const DARK_THEME = {
  ...DarkTheme
  media: BREAKPOINTS,
  typography: TYPOGRAPHY,
  name: 'lpsci-dark-theme',
};

export const LIGHT_THEME = {
  ...LightTheme,
  media: BREAKPOINTS,
  typography: TYPOGRAPHY,
  name: 'lpsci-light-theme',
};
