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

interface IProps {
  id: string;
}

export const LpsciIndividualStudentTabs = React.memo(({
  id,
}: IProps) => {
  const [active, setActive] = React.useState('information');

  const onChange = useConstantCallback(({ activeKey }) => {
    setActive(activeKey);
  });

  const InformationTitle = useConstant(() => <TabTitle title="Informations" />);
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
        title={InformationTitle}
        key="information"
        overrides={TAB}
      >
        Hi
      </Tab>
      <Tab
        title={VoteTitle}
        key="votes"
        overrides={TAB}
      >
        Hi
      </Tab>
    </Tabs>
  );
});
