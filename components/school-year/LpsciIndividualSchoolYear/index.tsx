// ANCHOR React
import * as React from 'react';

// ANCHOR Models

// ANCHOR Results
import { ISchoolYearResult } from '@api/results/school-year';

// ANCHOR Component
import { LpsciMainPage } from '@components/page/LpsciMainPage';
import { LpsciIndividualSchoolYearTabs } from './LpsciIndividualSchoolYearTabs';

interface IProps {
  id: string;
  initialData: ISchoolYearResult;
}

export const LpsciIndividualSchoolYear = React.memo(({
  id, initialData,
}: IProps) => (
  <LpsciMainPage title={`S.Y. ${initialData.year}`}>
    <LpsciIndividualSchoolYearTabs id={id} />
  </LpsciMainPage>
));
