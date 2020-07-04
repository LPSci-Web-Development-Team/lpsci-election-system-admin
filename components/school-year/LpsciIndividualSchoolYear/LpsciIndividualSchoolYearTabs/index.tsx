// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { Tabs, Tab } from 'baseui/tabs';

// ANCHOR Hooks
import { useConstantCallback, useConstant } from '@lpsci/hooks';

// ANCHOR Styles
import { TabTitle } from '@components/utils/TabTitle';
import { ROOT, TAB } from './styles';

export const LpsciIndividualSchoolYearTabs = React.memo(() => {
  const [active, setActive] = React.useState('sections');

  const onChange = useConstantCallback(({ activeKey }) => {
    setActive(activeKey);
  });

  const SectionTitle = useConstant(() => <TabTitle title="Sections" />);
  const PartyTitle = useConstant(() => <TabTitle title="Parties" />);

  return (
    <Tabs
      onChange={onChange}
      activeKey={active}
      overrides={ROOT}
      renderAll
    >
      <Tab
        title={SectionTitle}
        key="sections"
        overrides={TAB}
      >
        Sections
      </Tab>
      <Tab
        title={PartyTitle}
        key="parties"
        overrides={TAB}
      >
        Parties
      </Tab>
    </Tabs>
  );
});
