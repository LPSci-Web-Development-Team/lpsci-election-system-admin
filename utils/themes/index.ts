// ANCHOR Base
import { DarkTheme, LightTheme } from 'baseui';

// ANCHOR Theme
import { BREAKPOINTS } from './breakpoints';
import { TYPOGRAPHY } from './typography';

// ANCHOR Dark Theme Definition
export const DARK_THEME = {
  ...DarkTheme,
  media: BREAKPOINTS,
  typography: TYPOGRAPHY,
  name: 'lpsci-dark-theme',
};

// ANCHOR Light Theme Definition
export const LIGHT_THEME = {
  ...LightTheme,
  media: BREAKPOINTS,
  typography: TYPOGRAPHY,
  name: 'lpsci-light-theme',
};
