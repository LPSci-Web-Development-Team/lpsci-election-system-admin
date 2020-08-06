// ANCHOR React
import React from 'react';

// ANCHOR Base
import { BaseProvider } from 'baseui';

// ANCHOR Models
import { ThemePreference } from '@scoped-models/theme/ThemePreference';

// ANCHOR Types
import { IChildrenProps } from '@interfaces/Common';

export const LpsciThemeProvider = (
  { children }: IChildrenProps,
) => {
  const theme = ThemePreference.useSelector((state) => state.theme);

  return (
    <BaseProvider theme={theme}>
      {children}
    </BaseProvider>
  );
};
