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

  return (
    <Block>
      <Block overrides={CURRENT}>
        <LpsciIndividualStudentStatusCard
          label="Current Grade and Section"
          content="Grade 11 - Faraday"
        />
        <LpsciIndividualStudentStatusCard
          label="Current Adviser"
          content="Joselito P. Grande"
        />
      </Block>
    </Block>
  );
});
