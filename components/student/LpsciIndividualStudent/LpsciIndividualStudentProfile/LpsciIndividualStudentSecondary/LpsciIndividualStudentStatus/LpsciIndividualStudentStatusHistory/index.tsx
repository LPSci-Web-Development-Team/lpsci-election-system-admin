// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { Block } from 'baseui/block';
import { LabelMedium } from 'baseui/typography';

// ANCHOR Components
import { DashboardCard } from '@components/utils/DashboardCard';

// ANCHOR Styles
import { BLOCK, HISTORY } from './styles';

export const LpsciIndividualStudentStatusHistory = React.memo(() => (
  <Block overrides={BLOCK}>
    <LabelMedium marginBottom="24px">
      Student&apos;s History
    </LabelMedium>
    <Block overrides={HISTORY}>
      <DashboardCard
        label="S.Y. 2019-2020"
        content="Grade 10 - Galilei"
      />
      <DashboardCard
        label="S.Y. 2019-2020"
        content="Grade 10 - Galilei"
      />
      <DashboardCard
        label="S.Y. 2019-2020"
        content="Grade 10 - Galilei"
      />
    </Block>
  </Block>
));
