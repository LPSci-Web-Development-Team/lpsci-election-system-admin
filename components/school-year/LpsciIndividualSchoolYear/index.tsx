// ANCHOR React
import * as React from 'react';

// ANCHOR Models
import { SchoolYearData } from '@scoped-models/school-year/SchoolYearData';

// ANCHOR Component
import { LpsciMainPage } from '@components/page/LpsciMainPage';
import { ISchoolYearResult } from '@api/results/school-year';

interface IProps {
  id: string;
  initialData: ISchoolYearResult;
}

export const LpsciIndividualSchoolYear = React.memo(({
  id, initialData,
}: IProps) => {
  if (!id) {
    return null;
  }

  return (
    <LpsciMainPage title={`S.Y. ${initialData.year}`}>
      <SchoolYearData.Provider>
        Hi
      </SchoolYearData.Provider>
    </LpsciMainPage>
  );
});
