// ANCHOR React
import * as React from 'react';

// ANCHOR Models
import { StudentData } from '@scoped-models/student/StudentData';

// ANCHOR Component
import { LpsciMainPage } from '@components/page/LpsciMainPage';
import { LpsciViewStudentDataTable } from './LpsciViewStudentDataTable';

export const LpsciViewStudent = React.memo(() => (
  <LpsciMainPage title="View Students">
    <StudentData.Provider>
      <LpsciViewStudentDataTable />
    </StudentData.Provider>
  </LpsciMainPage>
));
