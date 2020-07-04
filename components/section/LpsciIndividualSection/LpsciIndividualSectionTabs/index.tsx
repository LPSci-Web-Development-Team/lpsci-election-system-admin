// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { Tabs, Tab } from 'baseui/tabs';

// ANCHOR Hooks
import { useConstantCallback, useConstant } from '@lpsci/hooks';

// ANCHOR Models

// ANCHOR Components
import { TabTitle } from '@components/utils/TabTitle';

// ANCHOR Styles
import { ROOT, TAB } from './styles';

interface IProps {
  id: string;
}

export const LpsciIndividualSectionTabs = React.memo(({
  id,
}: IProps) => {
  const [active, setActive] = React.useState('sections');

  const onChange = useConstantCallback(({ activeKey }) => {
    setActive(activeKey);
  });

  const SectionTitle = useConstant(() => <TabTitle title="Sections" />);

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
        {id}
      </Tab>
    </Tabs>
  );
});
