// ANCHOR React
import React from 'react';

// ANCHOR Base
import { Block } from 'baseui/block';

// ANCHOR Models
import { CandidateData } from '@scoped-models/candidate/CandidateData';

// ANCHOR Component
import { DashboardCard } from '@components/utils/DashboardCard';

// ANCHOR Constants
import { POSITION } from '@constants/forms/candidate';

// ANCHOR Styles
import { CURRENT } from './styles';

export const LpsciIndividualCandidateStatus = React.memo(() => {
  const data = CandidateData.useSelector((state) => state.data);

  return (
    <Block overrides={CURRENT}>
      <DashboardCard label="Party">
        {data.party?.name ?? 'N/A'}
      </DashboardCard>
      <DashboardCard label="Position">
        {POSITION[data.position]}
      </DashboardCard>
    </Block>
  );
});
