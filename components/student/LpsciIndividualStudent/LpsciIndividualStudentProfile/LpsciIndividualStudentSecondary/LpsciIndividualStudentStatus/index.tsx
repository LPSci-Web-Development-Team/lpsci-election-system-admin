// ANCHOR React
import React from 'react';

// ANCHOR Base
import { Block } from 'baseui/block';

// ANCHOR Component
import { LpsciIndividualStudentStatusCards } from './LpsciIndividualStudentStatusCards';
import { LpsciIndividualStudentStatusHistory } from './LpsciIndividualStudentStatusHistory';

export const LpsciIndividualStudentStatus = React.memo(() => (
  <Block>
    <LpsciIndividualStudentStatusCards />
    <LpsciIndividualStudentStatusHistory />
  </Block>
));
