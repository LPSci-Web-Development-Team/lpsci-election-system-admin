// ANCHOR React
import * as React from 'react';

// ANCHOR Models
import { CreateSchoolYearForm } from '@scoped-models/school-year/CreateSchoolYearForm';

// ANCHOR Component
import { LpsciMainPage } from '@components/page/LpsciMainPage';
import { LpsciCreateSchoolYearForm } from './LpsciCreateSchoolYearForm';

export const LpsciCreateSchoolYear = React.memo(() => (
  <LpsciMainPage title="Create School Years">
    <CreateSchoolYearForm.Provider>
      <LpsciCreateSchoolYearForm />
    </CreateSchoolYearForm.Provider>
  </LpsciMainPage>
));
