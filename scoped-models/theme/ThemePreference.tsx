// ANCHOR Model
import createModel from '@lxsmnsyc/react-scoped-model';

// ANCHOR Hooks
import { useTheme } from '@lpsci/hooks';

// ANCHOR Base
import {
  createTheme, lightThemePrimitives, createDarkTheme, darkThemePrimitives,
} from 'baseui';

// ANCHOR Themes
import { LIGHT_THEME, DARK_THEME } from '@themes/theme';

export const ThemePreference = createModel(() => useTheme(
  createTheme(lightThemePrimitives, LIGHT_THEME),
  createDarkTheme(darkThemePrimitives, DARK_THEME),
),
{
  displayName: 'Models.ThemePreference',
});
