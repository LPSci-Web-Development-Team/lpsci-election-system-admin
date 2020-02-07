// ANCHOR React
import * as React from 'react';

// ANCHOR Styletron
import { Provider as StyletronProvider } from 'styletron-react';

// ANCHOR Utilities
import { debug, styletron } from '../utils/styletron';

// ANCHOR Providers
import { makeProviders } from './utils/Providers';

// ANCHOR Utils
import { Compose } from './utils/Compose';

// ANCHOR Components
import { ElectionThemeProvider } from './ElectionThemeProvider';


interface IProps {
  children: React.ReactNode;
}

export const GlobalProvider = ({ children }: IProps) => (
  <Compose elements={makeProviders()}>
    <StyletronProvider
      value={styletron}
      debug={debug}
      debugAfterHydration
    >
      <ElectionThemeProvider>
        {children}
      </ElectionThemeProvider>
    </StyletronProvider>
  </Compose>
);
