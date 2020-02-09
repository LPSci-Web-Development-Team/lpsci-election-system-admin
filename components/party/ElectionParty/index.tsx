// ANCHOR React
import * as React from 'react';

// ANCHOR Components
import { ElectionPartyHeading } from '../ElectionPartyHeading';
import { ElectionPartyAddButton } from '../ElectionPartyAddButton';

export const ElectionParty = React.memo(() => (
  <>
    <ElectionPartyHeading />
    <ElectionPartyAddButton />
  </>
))