// ANCHOR React
import * as React from 'react';

// ANCHOR Models
import { StudentData } from '@scoped-models/student/StudentData';

// ANCHOR Results
import { IStudentResult } from '@api/results/student';

// ANCHOR Component
import { LpsciMainPage } from '@components/page/LpsciMainPage';
import { LpsciIndividualStudentProfile } from './LpsciIndividualStudentProfile';

interface IProps {
  id: string;
  initialData: IStudentResult;
}

export const LpsciIndividualStudent = React.memo(({
  id, initialData,
}: IProps) => (
  <LpsciMainPage>
    <StudentData.Provider data={initialData} id={id}>
      <LpsciIndividualStudentProfile />
    </StudentData.Provider>
  </LpsciMainPage>
));
