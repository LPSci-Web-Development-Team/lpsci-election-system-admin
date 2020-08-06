// ANCHOR React
import React from 'react';

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
      <DashboardCard label="Current Grade and Section">
        {data.currentGradeLevel ? gradeSection : 'N/A'}
      </DashboardCard>
      <DashboardCard label="Current Adviser">
        {data.currentAdviser ?? 'N/A'}
      </DashboardCard>
    </Block>
  );
});
