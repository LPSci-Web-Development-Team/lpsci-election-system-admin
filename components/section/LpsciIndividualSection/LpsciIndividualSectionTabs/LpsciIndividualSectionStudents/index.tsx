// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { withStyle } from 'baseui';

// ANCHOR Models
import { SectionStudentsData } from '@scoped-models/section/SectionStudentsData';

// ANCHOR Results
import { ESex } from '@api/results/user';

// ANCHOR Components
import { Skeleton } from '@components/utils/Skeleton';
import { Empty } from '@components/utils/Empty';
import { LpsciIndividualSectionStudent } from './LpsciIndividualSectionStudent';

// ANCHOR Styles
import { SKELETON } from './styles';

const ListSkeleton = withStyle(Skeleton, SKELETON);

export const LpsciIndividualSectionStudents = React.memo(() => {
  const [male, female] = SectionStudentsData.useSelectors((state) => [
    state.data?.filter((i) => i.user?.sex === ESex.M),
    state.data?.filter((i) => i.user?.sex === ESex.F),
  ]);

  if (!male || !female) {
    return (
      <>
        <ListSkeleton />
        <ListSkeleton />
        <ListSkeleton />
      </>
    );
  }

  if (male.length + female.length === 0) {
    return <Empty label="students" />;
  }

  return (
    <>
      {male.map((item, index) => (
        <LpsciIndividualSectionStudent
          data={item}
          index={index + 1}
        />
      ))}
      {female.map((item, index) => (
        <LpsciIndividualSectionStudent
          data={item}
          index={index + 1}
        />
      ))}
    </>
  );
});
