// ANCHOR React
import React from 'react';

// ANCHOR Models
import { SchoolYearData } from '@scoped-models/school-year/SchoolYearData';

// ANCHOR Component
import { LpsciMainPage } from '@components/page/LpsciMainPage';
import { LpsciViewSchoolYearDataTable } from './LpsciViewSchoolYearDataTable';

export const LpsciViewSchoolYear = React.memo(() => (
  <LpsciMainPage title="View School Years">
    <SchoolYearData.Provider>
      <LpsciViewSchoolYearDataTable />
    </SchoolYearData.Provider>
  </LpsciMainPage>
));
