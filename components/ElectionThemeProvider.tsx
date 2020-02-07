// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { BaseProvider, createTheme, lightThemePrimitives } from 'baseui';

// ANCHOR Theme
import { THEME } from '../utils/themes';

// ANCHOR Utils
import { useConstant } from '../utils/hooks/useConstant';

interface IProps {
  children: React.ReactNode;
}

export const ElectionThemeProvider = ({ children }: IProps) => {
  const theme = useConstant(() => createTheme(lightThemePrimitives, THEME));

  return (
    <BaseProvider theme={theme}>
      {children}
    </BaseProvider>
  );
};
