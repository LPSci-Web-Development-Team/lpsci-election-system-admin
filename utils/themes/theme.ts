// ANCHOR Base
import { DarkTheme, LightTheme } from 'baseui';
import { Theme } from 'baseui/theme';

// ANCHOR Theme
import { BREAKPOINTS } from './breakpoints';

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
  media: BREAKPOINTS,
  name: 'lpsci-dark-theme',
};

// ANCHOR Light Theme Definition
export const LIGHT_THEME: ILpsciTheme = {
  ...LightTheme,
  media: BREAKPOINTS,
  name: 'lpsci-light-theme',
};

const userTheme = localStorage.getItem("theme");

// ANCHOR Smart Theme Definition
export const THEME: ILpsciTheme = userTheme === 'dark'
  ? DARK_THEME
  : LIGHT_THEME;