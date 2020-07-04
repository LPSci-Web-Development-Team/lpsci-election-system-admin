// ANCHOR React
import * as React from 'react';

// ANCHOR Models
import { CreateSchoolYearForm } from '@scoped-models/school-year/CreateSchoolYearForm';

// ANCHOR Component
import { LpsciMainPage } from '@components/page/LpsciMainPage';

export const LpsciCreateSection = React.memo(() => (
  <LpsciMainPage title="Create Section">
    <CreateSchoolYearForm.Provider>
      Section
    </CreateSchoolYearForm.Provider>
  </LpsciMainPage>
));
