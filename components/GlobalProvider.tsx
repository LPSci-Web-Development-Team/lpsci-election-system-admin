// ANCHOR React
import * as React from 'react';

// ANCHOR Styletron
import { Provider as StyletronProvider } from 'styletron-react';

// ANCHOR Base
import { BaseProvider, lightThemePrimitives, createTheme, createDarkTheme, darkThemePrimitives } from 'baseui';

// ANCHOR Hooks
import { useConstant } from '@lpsci/hooks';

// ANCHOR Themes
import { debug, styletron } from '@lpsci/themes/styletron';
import { LIGHT_THEME, DARK_THEME } from '@lpsci/themes/theme';

// ANCHOR Providers
import { PROVIDERS } from '@lpsci/scoped-models/Providers';

// ANCHOR Functions
import { userTheme } from '@lpsci/functions/userTheme';

// ANCHOR Utils
import { Compose } from './utils/Compose';

interface IGlobalProviderProps {
  children?: React.ReactNode;
}

export function GlobalProvider({ children }: IGlobalProviderProps) {
  const theme = useConstant(() => {
    if (userTheme().isLight) {
      // Create a light theme
      return createTheme(lightThemePrimitives, LIGHT_THEME);
    }

    // Create a dark theme
    return createDarkTheme(darkThemePrimitives, DARK_THEME);
  });

  return (
    <Compose elements={PROVIDERS()}>
      <StyletronProvider
        value={styletron}
        debug={debug}
        debugAfterHydration
      >
        <BaseProvider theme={theme}>
          {children}
        </BaseProvider>
      </StyletronProvider>
    </Compose>
  );
}
