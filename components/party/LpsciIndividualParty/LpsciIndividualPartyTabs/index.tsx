// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { Tabs, Tab } from 'baseui/tabs';

// ANCHOR Hooks
import { useConstantCallback, useConstant } from '@lpsci/hooks';

// ANCHOR Models
import { PartyCandidatesData } from '@scoped-models/party/PartyCandidatesData';

// ANCHOR Components
import { TabTitle } from '@components/utils/TabTitle';
import { LpsciIndividualPartyCandidates } from './LpsciIndividualPartyCandidates';

// ANCHOR Styles
import { ROOT, TAB } from './styles';

interface IProps {
  id: string;
}

export const LpsciIndividualPartyTabs = React.memo(({
  id,
}: IProps) => {
  const [active, setActive] = React.useState('candidate');

  const onChange = useConstantCallback(({ activeKey }) => {
    setActive(activeKey);
  });

  const CandidateTitle = useConstant(() => <TabTitle title="Candidates" />);

  return (
    <Tabs
      onChange={onChange}
      activeKey={active}
      overrides={ROOT}
      renderAll
    >
      <Tab
        title={CandidateTitle}
        key="candidate"
        overrides={TAB}
      >
        <PartyCandidatesData.Provider id={id}>
          <LpsciIndividualPartyCandidates />
        </PartyCandidatesData.Provider>
      </Tab>
    </Tabs>
  );
});
