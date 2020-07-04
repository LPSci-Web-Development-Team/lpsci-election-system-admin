// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { Tabs, Tab } from 'baseui/tabs';

// ANCHOR Hooks
import { useConstantCallback, useConstant } from '@lpsci/hooks';

// ANCHOR Models
import { SectionStudentsData } from '@scoped-models/section/SectionStudentsData';

// ANCHOR Components
import { TabTitle } from '@components/utils/TabTitle';
import { LpsciIndividualSectionStudents } from './LpsciIndividualSectionStudents';

// ANCHOR Styles
import { ROOT, TAB } from './styles';

interface IProps {
  id: string;
}

export const LpsciIndividualSectionTabs = React.memo(({
  id,
}: IProps) => {
  const [active, setActive] = React.useState('student');

  const onChange = useConstantCallback(({ activeKey }) => {
    setActive(activeKey);
  });

  const StudentTitle = useConstant(() => <TabTitle title="Students" />);

  return (
    <Tabs
      onChange={onChange}
      activeKey={active}
      overrides={ROOT}
      renderAll
    >
      <Tab
        title={StudentTitle}
        key="student"
        overrides={TAB}
      >
        <SectionStudentsData.Provider id={id}>
          <LpsciIndividualSectionStudents />
        </SectionStudentsData.Provider>
      </Tab>
    </Tabs>
  );
});
