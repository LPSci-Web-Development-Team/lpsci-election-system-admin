// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { Block } from 'baseui/block';

// ANCHOR Models
import { CandidateVotesData } from '@scoped-models/candidate/CandidateVotesData';

// ANCHOR Components
import { DashboardCard } from '@components/utils/DashboardCard';
import { Empty } from '@components/utils/Empty';
import { LpsciIndividualCandidateVoteCard } from './LpsciIndividualCandidateVoteCard';

// ANCHOR Styles
import { HISTORY } from './styles';

export const LpsciIndividualCandidateVote = React.memo(() => {
  const data = CandidateVotesData.useSelector((state) => state.data);

  if (!data) {
    return null;
  }

  return (
    <Block overrides={HISTORY}>
      {data.length > 0
        ? data.map((item) => (
          <DashboardCard>
            <LpsciIndividualCandidateVoteCard data={item} />
          </DashboardCard>
        ))
        : <Empty align="center" label="votes for this candidate" />}
    </Block>
  );
});
