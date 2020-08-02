// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { Block } from 'baseui/block';

// ANCHOR Styles
import { BLOCK } from './styles';

// ANCHOR Components
import { LpsciIndividualCandidatePrimary } from './LpsciIndividualCandidatePrimary';
import { LpsciIndividualCandidateSecondary } from './LpsciIndividualSCandidateSecondary';

export const LpsciIndividualCandidateProfile = React.memo(() => (
  <Block overrides={BLOCK}>
    <LpsciIndividualCandidatePrimary />
    <LpsciIndividualCandidateSecondary />
  </Block>
));
