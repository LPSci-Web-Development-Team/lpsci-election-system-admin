// ANCHOR React
import React from 'react';

// ANCHOR Base
import { withStyle } from 'baseui';

// ANCHOR Models
import { SchoolYearSectionsData } from '@scoped-models/school-year/SchoolYearSectionsData';

// ANCHOR Components
import { Skeleton } from '@components/utils/Skeleton';
import { Empty } from '@components/utils/Empty';
import { LpsciIndividualSchoolYearSection } from './LpsciIndividualSchoolYearSection';

// ANCHOR Styles
import { SKELETON } from './styles';

const ListSkeleton = withStyle(Skeleton, SKELETON);

export const LpsciIndividualSchoolYearSections = React.memo(() => {
  const data = SchoolYearSectionsData.useSelector((state) => state.data);

  if (!data) {
    return (
      <>
        <ListSkeleton />
        <ListSkeleton />
        <ListSkeleton />
      </>
    );
  }

  if (data.length === 0) {
    return <Empty label="sections" />;
  }

  return (
    <>
      {data.map((item) => (
        <LpsciIndividualSchoolYearSection data={item} />
      ))}
    </>
  );
});
