// ANCHOR Next
import App from 'next/app';

// ANCHOR React
import * as React from 'react';

// ANCHOR Component
import { GlobalProvider } from '@lpsci/components/utils/GlobalProvider';

// ANCHOR CSS
import 'normalize.css/normalize.css';
import '../public/styles/parsed-link.css';

// NOTE Next App requires this to be exported by default
// eslint-disable-next-line import/no-default-export
export default class LpsciApp extends App {
  public render() {
    const { Component, pageProps } = this.props;

    return (
      <GlobalProvider>
        <Component {...pageProps} />
      </GlobalProvider>
    );
  }
}
