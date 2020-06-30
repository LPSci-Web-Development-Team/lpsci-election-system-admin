// ANCHOR React
import * as React from 'react';

// ANCHOR Styletron
import { Provider as StyletronProvider } from 'styletron-react';

// ANCHOR Themes
import { debug, styletron } from '@themes/styletron';

// ANCHOR Providers
import { PROVIDERS } from '@scoped-models/Providers';

// ANCHOR Types
import { IChildrenProps } from '@interfaces/Common';

// ANCHOR Utils
import { Compose } from '../Compose';
import { LpsciThemeProvider } from './LpsciThemeProvider';

export const GlobalProvider = ({ children }: IChildrenProps) => (
  <Compose elements={PROVIDERS()}>
    <StyletronProvider
      value={styletron}
      debug={debug}
      debugAfterHydration
    >
      <LpsciThemeProvider>
        {children}
      </LpsciThemeProvider>
    </StyletronProvider>
  </Compose>
);
