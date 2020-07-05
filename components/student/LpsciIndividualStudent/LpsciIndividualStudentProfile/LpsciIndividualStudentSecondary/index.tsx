// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { Tabs, Tab } from 'baseui/tabs';

// ANCHOR Hooks
import { useConstantCallback, useConstant } from '@lpsci/hooks';

// ANCHOR Models
import { StudentData } from '@scoped-models/student/StudentData';

// ANCHOR Components
import { TabTitle } from '@components/utils/TabTitle';
import { LpsciIndividualStudentStatus } from './LpsciIndividualStudentStatus';

// ANCHOR Styles
import { ROOT, TAB } from './styles';

export const LpsciIndividualStudentSecondary = React.memo(() => {
  const [active, setActive] = React.useState('status');

  const studentId = StudentData.useSelector((state) => state.id);

  const onChange = useConstantCallback(({ activeKey }) => {
    setActive(activeKey);
  });

  const StatusTitle = useConstant(() => <TabTitle title="Status" />);
  const VoteTitle = useConstant(() => <TabTitle title="Votes Casted" />);

  if (!studentId) {
    return null;
  }

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
        <LpsciIndividualStudentStatus />
      </Tab>
      <Tab
        title={VoteTitle}
        key="votes"
        disabled
        overrides={TAB}
      >
        Votes
      </Tab>
    </Tabs>
  );
});
