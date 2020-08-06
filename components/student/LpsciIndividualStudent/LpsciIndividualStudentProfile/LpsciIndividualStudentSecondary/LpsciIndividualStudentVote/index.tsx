// ANCHOR React
import React from 'react';

// ANCHOR Base
import { Block } from 'baseui/block';

// ANCHOR Models
import { StudentVotesData } from '@scoped-models/student/StudentVotesData';

// ANCHOR Components
import { DashboardCard } from '@components/utils/DashboardCard';
import { Empty } from '@components/utils/Empty';
import { LpsciIndividualStudentVoteCard } from './LpsciIndividualStudentVoteCard';

// ANCHOR Styles
import { HISTORY } from './styles';

export const LpsciIndividualStudentVote = React.memo(() => {
  const data = StudentVotesData.useSelector((state) => state.data);

  if (!data) {
    return null;
  }

  return (
    <Block overrides={HISTORY}>
      {data.length > 0
        ? data.map((item) => (
          <DashboardCard>
            <LpsciIndividualStudentVoteCard data={item} />
          </DashboardCard>
        ))
        : <Empty align="center" label="votes casted" />}
    </Block>
  );
});
