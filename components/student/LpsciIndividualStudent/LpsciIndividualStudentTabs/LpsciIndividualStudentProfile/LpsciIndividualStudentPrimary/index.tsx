// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { Block } from 'baseui/block';

// ANCHOR Styles
import { BLOCK } from './styles';

// ANCHOR Components
import { LpsciIndividualStudentAvatar } from './LpsciIndividualStudentAvatar';

export const LpsciIndividualStudentPrimary = React.memo(() => (
  <Block overrides={BLOCK}>
    <LpsciIndividualStudentAvatar />
  </Block>
));
