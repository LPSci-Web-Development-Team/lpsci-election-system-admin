// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { Tabs, Tab } from 'baseui/tabs';

// ANCHOR Hooks
import { useConstantCallback, useConstant } from '@lpsci/hooks';

// ANCHOR Models
import { SchoolYearPartiesData } from '@scoped-models/school-year/SchoolYearPartiesData';
import { SchoolYearSectionsData } from '@scoped-models/school-year/SchoolYearSectionsData';

// ANCHOR Components
import { TabTitle } from '@components/utils/TabTitle';
import { LpsciIndividualSchoolYearSections } from './LpsciIndividualSchoolYearSections';
import { LpsciIndividualSchoolYearParties } from './LpsciIndividualSchoolYearParties';

// ANCHOR Styles
import { ROOT, TAB } from './styles';

interface IProps {
  id: string;
}

export const LpsciIndividualSchoolYearTabs = React.memo(({
  id,
}: IProps) => {
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
        <SchoolYearSectionsData.Provider id={id}>
          <LpsciIndividualSchoolYearSections />
        </SchoolYearSectionsData.Provider>
      </Tab>
      <Tab
        title={PartyTitle}
        key="parties"
        overrides={TAB}
      >
        <SchoolYearPartiesData.Provider id={id}>
          <LpsciIndividualSchoolYearParties />
        </SchoolYearPartiesData.Provider>
      </Tab>
    </Tabs>
  );
});
