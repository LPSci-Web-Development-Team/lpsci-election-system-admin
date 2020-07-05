// ANCHOR React
import * as React from 'react';

// ANCHOR Models
import { CreateStudentForm } from '@scoped-models/student/CreateStudentForm';

// ANCHOR Results
import { IStudentResult } from '@api/results/student';

// ANCHOR Component
import { LpsciMainPage } from '@components/page/LpsciMainPage';
// import { LpsciCreateStudentForm } from './LpsciCreateStudentForm';

interface IProps {
  id?: string;
  initialData?: IStudentResult;
}

export const LpsciCreateStudent = React.memo(({
  id, initialData,
}: IProps) => (
  <LpsciMainPage
    title={`${initialData
      ? (`Update ${initialData.learnerReferenceNumber}`)
      : 'Create a Student'}`}
  >
    <CreateStudentForm.Provider
      id={id}
      initialData={initialData}
    >
      Hi
    </CreateStudentForm.Provider>
  </LpsciMainPage>
));
