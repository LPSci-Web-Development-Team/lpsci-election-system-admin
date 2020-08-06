// ANCHOR React
import React from 'react';

// ANCHOR Base
import { Tabs, Tab } from 'baseui/tabs';

// ANCHOR Hooks
import { useConstantCallback, useConstant } from '@lpsci/hooks';

// ANCHOR Models
import { CandidateData } from '@scoped-models/candidate/CandidateData';
import { CandidateVotesData } from '@scoped-models/candidate/CandidateVotesData';

// ANCHOR Components
import { TabTitle } from '@components/utils/TabTitle';
import { LpsciIndividualCandidateStatus } from './LpsciIndividualCandidateStatus';
import { LpsciIndividualCandidateVote } from './LpsciIndividualCandidateVote';

// ANCHOR Styles
import { ROOT, TAB } from './styles';

export const LpsciIndividualCandidateSecondary = React.memo(() => {
  const [active, setActive] = React.useState('status');

  const id = CandidateData.useSelector((state) => state.id);

  const onChange = useConstantCallback(({ activeKey }) => {
    setActive(activeKey);
  });

  const StatusTitle = useConstant(() => <TabTitle title="Status" />);
  const VoteTitle = useConstant(() => <TabTitle title="Votes" />);

  return (
    <Tabs
      onChange={onChange}
      activeKey={active}
      overrides={ROOT}
      renderAll
    >
      <Tab
        title={StatusTitle}
        key="status"
        overrides={TAB}
      >
        <LpsciIndividualCandidateStatus />
      </Tab>
      <Tab
        title={VoteTitle}
        key="votes"
        overrides={TAB}
      >
        <CandidateVotesData.Provider id={id}>
          <LpsciIndividualCandidateVote />
        </CandidateVotesData.Provider>
      </Tab>
    </Tabs>
  );
});
