// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { withStyle } from 'baseui';

// ANCHOR Models
import { SchoolYearPartiesData } from '@scoped-models/school-year/SchoolYearPartiesData';

// ANCHOR Components
import { Skeleton } from '@components/utils/Skeleton';
import { Empty } from '@components/utils/Empty';
import { LpsciIndividualSchoolYearParty } from './LpsciIndividualSchoolYearParty';

// ANCHOR Styles
import { SKELETON } from './styles';

const ListSkeleton = withStyle(Skeleton, SKELETON);

export const LpsciIndividualSchoolYearParties = React.memo(() => {
  const data = SchoolYearPartiesData.useSelector((state) => state.data);

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
