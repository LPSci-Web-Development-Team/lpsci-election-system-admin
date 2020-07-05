// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { Block } from 'baseui/block';
import { LabelMedium } from 'baseui/typography';

// ANCHOR Models
import { StudentData } from '@scoped-models/student/StudentData';

// ANCHOR Components
import { DashboardCard } from '@components/utils/DashboardCard';

// ANCHOR Styles
import { Empty } from '@components/utils/Empty';
import { BLOCK, HISTORY } from './styles';

export const LpsciIndividualStudentStatusHistory = React.memo(() => {
  const data = StudentData.useSelector((state) => state.data);

  return (
    <Block overrides={BLOCK}>
      <LabelMedium marginBottom="24px">
        Student&apos;s History
      </LabelMedium>
      <Block overrides={HISTORY}>
        {data.sections && data.sections.length > 0
          ? data.sections.map((item) => (
            <DashboardCard
              label={`S.Y. ${item.schoolYear?.year ?? 'Unknown'}`}
              content={`Grade ${item.gradeLevel} - ${item.name}`}
            />
          ))
          : <Empty label="records" />}
      </Block>
    </Block>
  );
});
