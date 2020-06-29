// ANCHOR Base
import { DarkTheme, LightTheme } from 'baseui';
import { Theme as IBaseTheme } from 'baseui/theme';

// ANCHOR Theme
import { BREAKPOINTS } from './breakpoints';
import { SHADOWS } from './shadows';

// ANCHOR Functions
import { userTheme } from '../functions/userTheme';

interface IGeneralTheme {
  media: {
    small: string;
    medium: string;
    large: string;
    xlarge: string;
    xxlarge: string;
    xxxlarge: string;
  },
  shadow: {
    shadow400: string;
    shadow500: string;
    shadow600: string;
    shadow700: string;
    shadow800: string;
    tshadow400: string;
    tshadow500: string;
    tshadow600: string;
    tshadow700: string;
    tshadow800: string;
  },
}

interface ILpsciTheme extends IBaseTheme, IGeneralTheme {}

// ANCHOR General theme used in either light or dark
export const GENERAL_THEME: IGeneralTheme = {
  media: BREAKPOINTS,
  shadow: SHADOWS,
};

// ANCHOR Dark Theme Definition
export const DARK_THEME: ILpsciTheme = {
  ...DarkTheme,
  ...GENERAL_THEME,
  colors: {
    ...DarkTheme.colors,
    buttonDisabledFill: DarkTheme.colors.mono600,
    buttonDisabledText: DarkTheme.colors.mono400,
  },
  name: 'lpsci-dark-theme',
};

// ANCHOR Light Theme Definition
export const LIGHT_THEME: ILpsciTheme = {
  ...LightTheme,
  ...GENERAL_THEME,
  colors: {
    ...LightTheme.colors,
    buttonDisabledFill: LightTheme.colors.mono400,
    buttonDisabledText: LightTheme.colors.mono600,
  },
  name: 'lpsci-light-theme',
};

// ANCHOR Smart Theme Definition
export const THEME: ILpsciTheme = userTheme().isLight
  ? LIGHT_THEME
  : DARK_THEME;
