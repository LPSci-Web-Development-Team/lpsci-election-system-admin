// ANCHOR React
import React from 'react';

// ANCHOR Models
import { CreateSchoolYearForm } from '@scoped-models/school-year/CreateSchoolYearForm';

// ANCHOR Component
import { LpsciMainPage } from '@components/page/LpsciMainPage';
import { LpsciCreateSchoolYearForm } from './LpsciCreateSchoolYearForm';

export const LpsciCreateSchoolYear = React.memo(() => (
  <LpsciMainPage title="Create a School Year">
    <CreateSchoolYearForm.Provider>
      <LpsciCreateSchoolYearForm />
    </CreateSchoolYearForm.Provider>
  </LpsciMainPage>
));
