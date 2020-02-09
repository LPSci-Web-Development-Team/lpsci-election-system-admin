// ANCHOR React
import * as React from 'react';

// ANCHOR Components
import { ElectionPartyHeading } from '../ElectionPartyHeading';

export const ElectionParty = React.memo(() => (
  <>
    <ElectionPartyHeading />
  </>
))