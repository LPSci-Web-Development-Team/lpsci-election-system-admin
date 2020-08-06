// ANCHOR React
import React from 'react';

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
  const data = SectionStudentsData.useSelector((state) => state.data);

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
    return <Empty label="students" />;
  }

  const male = data.filter((item) => (item.user.sex === ESex.M));
  const female = data.filter((item) => (item.user.sex === ESex.F));

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
