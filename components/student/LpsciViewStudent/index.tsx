// ANCHOR React
import * as React from 'react';

// ANCHOR Models
import { StudentsData } from '@scoped-models/student/StudentsData';

// ANCHOR Component
import { LpsciMainPage } from '@components/page/LpsciMainPage';
import { LpsciViewStudentDataTable } from './LpsciViewStudentDataTable';

export const LpsciViewStudent = React.memo(() => (
  <LpsciMainPage title="View Students">
    <StudentsData.Provider>
      <LpsciViewStudentDataTable />
    </StudentsData.Provider>
  </LpsciMainPage>
));
