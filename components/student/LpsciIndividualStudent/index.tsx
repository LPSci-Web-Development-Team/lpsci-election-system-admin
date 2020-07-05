// ANCHOR React
import * as React from 'react';

// ANCHOR Models
import { StudentData } from '@scoped-models/student/StudentData';

// ANCHOR Results
import { IStudentResult } from '@api/results/student';

// ANCHOR Component
import { LpsciMainPage } from '@components/page/LpsciMainPage';
import { LpsciIndividualStudentTabs } from './LpsciIndividualStudentTabs';

interface IProps {
  id: string;
  initialData: IStudentResult;
}

export const LpsciIndividualStudent = React.memo(({
  id, initialData,
}: IProps) => (
  <LpsciMainPage
    title={`${initialData.user.lastName}, ${initialData.user.firstName} ${initialData.user.middleName ? `${initialData.user.middleName.charAt(0)}.` : ''}`}
  >
    <StudentData.Provider data={initialData} id={id}>
      <LpsciIndividualStudentTabs id={id} />
    </StudentData.Provider>
  </LpsciMainPage>
));
