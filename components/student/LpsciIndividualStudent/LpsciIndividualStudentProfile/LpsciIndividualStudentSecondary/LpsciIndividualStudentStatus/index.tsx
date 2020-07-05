// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { Block } from 'baseui/block';

// ANCHOR Models
import { StudentData } from '@scoped-models/student/StudentData';

// ANCHOR Styles
import { CURRENT } from './styles';

// ANCHOR Component
import { LpsciIndividualStudentStatusCard } from './LpsciIndividualStudentStatusCard';

export const LpsciIndividualStudentStatus = React.memo(() => {
  const data = StudentData.useSelector((state) => state.data);

  const gradeSection = `${String(data.currentGradeLevel)} - ${String(data.currentSection)}`;

  return (
    <Block>
      <Block overrides={CURRENT}>
        <LpsciIndividualStudentStatusCard
          label="Current Grade and Section"
          content={data.currentGradeLevel ? gradeSection : 'N/A'}
        />
        <LpsciIndividualStudentStatusCard
          label="Current Adviser"
          content={data.currentAdviser ?? 'N/A'}
        />
      </Block>
    </Block>
  );
});
