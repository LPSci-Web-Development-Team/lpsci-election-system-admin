// ANCHOR React
import * as React from 'react';

// ANCHOR Models
import { SchoolYearPartiesData } from '@scoped-models/school-year/SchoolYearPartiesData';

// ANCHOR Components
import { Empty } from '@components/utils/Empty';
import { LpsciIndividualSchoolYearParty } from './LpsciIndividualSchoolYearParty';

export const LpsciIndividualSchoolYearParties = React.memo(() => {
  const data = SchoolYearPartiesData.useSelector((state) => state.data);

  if (!data) {
    return null;
  }

  if (data.length === 0) {
    return <Empty label="parties" />;
  }

  return (
    <>
      {data.map((item) => (
        <LpsciIndividualSchoolYearParty data={item} />
      ))}
    </>
  );
});
