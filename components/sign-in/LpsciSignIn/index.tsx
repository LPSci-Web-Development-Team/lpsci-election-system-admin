// ANCHOR React
import * as React from 'react';

// ANCHOR Component
import { LpsciSignInPage } from '@components/page/LpsciSignInPage';

export const LpsciSignIn = React.memo(() => (
  <LpsciSignInPage>
    <p>
      Hi
    </p>
  </LpsciSignInPage>
));
