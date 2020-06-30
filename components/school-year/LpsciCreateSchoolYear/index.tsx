// ANCHOR React
import * as React from 'react';

// ANCHOR Component
import { LpsciMainPage } from '@components/page/LpsciMainPage';
import { LpsciCreateSchoolYearForm } from './LpsciCreateSchoolYearForm';

export const LpsciCreateSchoolYear = React.memo(() => (
  <LpsciMainPage title="Create School Years">
    <LpsciCreateSchoolYearForm />
  </LpsciMainPage>
));
