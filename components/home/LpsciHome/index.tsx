// ANCHOR React
import * as React from 'react';

// ANCHOR Component
import { LpsciMainPage } from '@components/page/LpsciMainPage';

export const LpsciHome = React.memo(() => (
  <LpsciMainPage title="Welcome">
    <p>
      Hi
    </p>
  </LpsciMainPage>
));
