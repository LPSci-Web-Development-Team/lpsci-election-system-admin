// ANCHOR Model
import createModel from '@lxsmnsyc/react-scoped-model';

// ANCHOR Hooks
import { useTheme } from '@functions/useTheme';

export const ThemePreference = createModel(() => useTheme(),
  {
    displayName: 'Models.ThemePreference',
  });
