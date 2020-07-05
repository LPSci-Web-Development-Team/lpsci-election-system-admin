// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { Block } from 'baseui/block';

// ANCHOR Component
import { LpsciIndividualStudentStatusCards } from './LpsciIndividualStudentStatusCards';

export const LpsciIndividualStudentStatus = React.memo(() => (
  <Block>
    <LpsciIndividualStudentStatusCards />
  </Block>
));
