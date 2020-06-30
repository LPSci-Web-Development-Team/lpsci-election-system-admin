// ANCHOR React
import * as React from 'react';

// ANCHOR Styletron
import { Provider as StyletronProvider } from 'styletron-react';

// ANCHOR Base
import { ThemeProvider } from 'baseui';

// ANCHOR Themes
import { debug, styletron } from '@themes/styletron';

// ANCHOR Providers
import { PROVIDERS } from '@scoped-models/Providers';

// ANCHOR Functions
import { useTheme } from '@functions/useTheme';

// ANCHOR Types
import { IChildrenProps } from '@interfaces/Common';

// ANCHOR Utils
import { Compose } from '../Compose';

export function GlobalProvider({ children }: IChildrenProps) {
  const { theme } = useTheme();

  React.useEffect(() => {
    console.log(theme);
  }, [theme]);

  return (
    <Compose elements={PROVIDERS()}>
      <StyletronProvider
        value={styletron}
        debug={debug}
        debugAfterHydration
      >
        <ThemeProvider theme={theme}>
          {children}
        </ThemeProvider>
      </StyletronProvider>
    </Compose>
  );
}
