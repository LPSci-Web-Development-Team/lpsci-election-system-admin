// ANCHOR Base
import { DarkTheme, LightTheme } from 'baseui';
import { Theme } from 'baseui/theme';

// ANCHOR Theme
import { BREAKPOINTS } from './breakpoints';

// ANCHOR Functions
import { userTheme } from '../functions/userTheme';

interface ILpsciTheme extends Theme {
  media: {
    small: string;
    medium: string;
    large: string;
    xlarge: string;
    xxlarge: string;
    xxxlarge: string;
  }
}

// ANCHOR Dark Theme Definition
export const DARK_THEME: ILpsciTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    buttonDisabledFill: DarkTheme.colors.mono600,
    buttonDisabledText: DarkTheme.colors.mono400,
  },
  media: BREAKPOINTS,
  name: 'lpsci-dark-theme',
};

// ANCHOR Light Theme Definition
export const LIGHT_THEME: ILpsciTheme = {
  ...LightTheme,
  colors: {
    ...LightTheme.colors,
    buttonDisabledFill: LightTheme.colors.mono400,
    buttonDisabledText: LightTheme.colors.mono600,
  },
  media: BREAKPOINTS,
  name: 'lpsci-light-theme',
};

// ANCHOR Smart Theme Definition
export const THEME: ILpsciTheme = userTheme().isLight
  ? LIGHT_THEME
  : DARK_THEME;
