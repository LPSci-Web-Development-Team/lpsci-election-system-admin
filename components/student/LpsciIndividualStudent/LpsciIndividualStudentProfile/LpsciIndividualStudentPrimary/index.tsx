// ANCHOR React
import React from 'react';

// ANCHOR Base
import { Block } from 'baseui/block';

// ANCHOR Styles
import { BLOCK } from './styles';

// ANCHOR Components
import { LpsciIndividualStudentAvatar } from './LpsciIndividualStudentAvatar';
import { LpsciIndividualStudentDetails } from './LpsciIndividualStudentDetails';

export const LpsciIndividualStudentPrimary = React.memo(() => (
  <Block overrides={BLOCK}>
    <LpsciIndividualStudentAvatar />
    <LpsciIndividualStudentDetails />
  </Block>
));
