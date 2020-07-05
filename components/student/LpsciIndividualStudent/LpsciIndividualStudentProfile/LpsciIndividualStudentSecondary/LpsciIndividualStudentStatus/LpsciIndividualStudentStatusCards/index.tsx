// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { Block } from 'baseui/block';

// ANCHOR Models
import { StudentData } from '@scoped-models/student/StudentData';

// ANCHOR Component
import { DashboardCard } from '@components/utils/DashboardCard';

// ANCHOR Styles
import { CURRENT } from './styles';

export const LpsciIndividualStudentStatusCards = React.memo(() => {
  const data = StudentData.useSelector((state) => state.data);

  const gradeSection = `Grade ${String(data.currentGradeLevel)} - ${String(data.currentSection)}`;

  return (
    <Block overrides={CURRENT}>
      <DashboardCard
        label="Current Grade and Section"
        content={data.currentGradeLevel ? gradeSection : 'N/A'}
      />
      <DashboardCard
        label="Current Adviser"
        content={data.currentAdviser ?? 'N/A'}
      />
    </Block>
  );
});
