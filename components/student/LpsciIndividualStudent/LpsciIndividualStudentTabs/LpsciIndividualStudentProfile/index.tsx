// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { Block } from 'baseui/block';

// ANCHOR Styles
import { BLOCK } from './styles';

// ANCHOR Components
import { LpsciIndividualStudentPrimary } from './LpsciIndividualStudentPrimary';

export const LpsciIndividualStudentProfile = React.memo(() => (
  <Block overrides={BLOCK}>
    <LpsciIndividualStudentPrimary />
    <Block>
      Details
    </Block>
  </Block>
));
