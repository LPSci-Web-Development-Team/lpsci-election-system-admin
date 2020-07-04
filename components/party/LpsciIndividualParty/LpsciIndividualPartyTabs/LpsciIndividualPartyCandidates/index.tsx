// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { withStyle } from 'baseui';

// ANCHOR Models
import { PartyCandidatesData } from '@scoped-models/party/PartyCandidatesData';

// ANCHOR Components
import { Skeleton } from '@components/utils/Skeleton';
import { Empty } from '@components/utils/Empty';
import { LpsciIndividualPartyCandidate } from './LpsciIndividualPartyCandidate';

// ANCHOR Styles
import { SKELETON } from './styles';

const ListSkeleton = withStyle(Skeleton, SKELETON);

export const LpsciIndividualPartyCandidates = React.memo(() => {
  const data = PartyCandidatesData.useSelector((state) => state.data);

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
    return <Empty label="candidates" />;
  }

  return (
    <>
      {data.map((item) => (
        <LpsciIndividualPartyCandidate data={item} />
      ))}
    </>
  );
});
