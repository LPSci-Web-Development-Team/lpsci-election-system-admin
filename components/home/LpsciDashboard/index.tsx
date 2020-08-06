// ANCHOR React
import React from 'react';

// ANCHOR Component
import { LpsciMainPage } from '@components/page/LpsciMainPage';

export const LpsciDashboard = React.memo(() => (
  <LpsciMainPage title="LPSci Admin Dashboard">
    <p>
      No Data
    </p>
  </LpsciMainPage>
));
