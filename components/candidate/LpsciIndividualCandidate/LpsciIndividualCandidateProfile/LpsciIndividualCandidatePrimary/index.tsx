// ANCHOR React
import React from 'react';

// ANCHOR Base
import { Block } from 'baseui/block';

// ANCHOR Styles
import { BLOCK } from './styles';

// ANCHOR Components
import { LpsciIndividualCandidateAvatar } from './LpsciIndividualCandidateAvatar';
import { LpsciIndividualCandidateDetails } from './LpsciIndividualCandidateDetails';

export const LpsciIndividualCandidatePrimary = React.memo(() => (
  <Block overrides={BLOCK}>
    <LpsciIndividualCandidateAvatar />
    <LpsciIndividualCandidateDetails />
  </Block>
));
