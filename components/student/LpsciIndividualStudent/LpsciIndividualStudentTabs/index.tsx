// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { Tabs, Tab } from 'baseui/tabs';

// ANCHOR Hooks
import { useConstantCallback, useConstant } from '@lpsci/hooks';

// ANCHOR Components
import { TabTitle } from '@components/utils/TabTitle';

// ANCHOR Styles
import { ROOT, TAB } from './styles';
import { LpsciIndividualStudentProfile } from './LpsciIndividualStudentProfile';

interface IProps {
  id: string;
}

export const LpsciIndividualStudentTabs = React.memo(({
  id,
}: IProps) => {
  const [active, setActive] = React.useState('profile');

  const onChange = useConstantCallback(({ activeKey }) => {
    setActive(activeKey);
  });

  const ProfileTitle = useConstant(() => <TabTitle title="Profile" />);
  const VoteTitle = useConstant(() => <TabTitle title="Votes Casted" />);

  if (!id) {
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
        title={ProfileTitle}
        key="profile"
        overrides={TAB}
      >
        <LpsciIndividualStudentProfile />
      </Tab>
      <Tab
        title={VoteTitle}
        key="votes"
        disabled
        overrides={TAB}
      >
        <LpsciIndividualStudentProfile />
      </Tab>
    </Tabs>
  );
});
