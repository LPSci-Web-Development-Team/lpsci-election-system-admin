// ANCHOR React
import * as React from 'react';

// ANCHOR Models
import { SchoolYearSectionsData } from '@scoped-models/school-year/SchoolYearSectionsData';

// ANCHOR Components
import { LpsciIndividualSchoolYearSection } from './LpsciIndividualSchoolYearSection';

export const LpsciIndividualSchoolYearSections = React.memo(() => {
  const data = SchoolYearSectionsData.useSelector((state) => state.data);

  if (!data) {
    return null;
  }

  if (data.length === 0) {
    return <p>Empty</p>;
  }

  return (
    <>
      {data.map((item) => (
        <LpsciIndividualSchoolYearSection data={item} />
      ))}
    </>
  );
});
