// ANCHOR Base
import { LightTheme } from 'baseui';

// ANCHOR Theme
import { TYPOGRAPHY } from './typography';

export const THEME = {
  colors: {
    ...LightTheme.colors,
  },
  lighting: {
    ...LightTheme.lighting,
  },
  typography: TYPOGRAPHY,
  name: 'election-theme',
};
