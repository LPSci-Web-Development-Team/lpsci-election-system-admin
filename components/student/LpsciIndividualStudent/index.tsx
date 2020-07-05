// ANCHOR React
import * as React from 'react';

// ANCHOR Models

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
    <LpsciIndividualStudentTabs id={id} />
  </LpsciMainPage>
));
