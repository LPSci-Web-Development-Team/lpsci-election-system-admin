/* eslint-disable react/jsx-props-no-spreading */
// ANCHOR Next
import App from 'next/app';

// ANCHOR React
import * as React from 'react';

// ANCHOR CSS
import 'normalize.css/normalize.css';

// ANCHOR Font Awesome
import { config, library } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { faLock } from '@fortawesome/free-solid-svg-icons';

// ANCHOR Component
import { GlobalProvider } from '../components/GlobalProvider';

config.autoAddCss = false;

library.add(faLock);

// NOTE Next App requires this to be exported by default
// eslint-disable-next-line import/no-default-export
export default class ElectionApp extends App {
  // Only uncomment this method if you have blocking data requirements for
  // every single page in your application. This disables the ability to
  // perform automatic static optimization, causing every page in your app to
  // be server-side rendered.
  //
  // public static async getInitialProps(appContext: AppContext) {
  //   // calls page's `getInitialProps` and fills `appProps.pageProps`
  //   const appProps = await App.getInitialProps(appContext);

  //   return { ...appProps }
  // }

  public render() {
    const { Component, pageProps } = this.props;

    return (
      <GlobalProvider>
        <Component {...pageProps} />
      </GlobalProvider>
    );
  }
}
