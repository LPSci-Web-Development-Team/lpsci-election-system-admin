// ANCHOR React
import * as React from 'react';

// ANCHOR Components
import { ElectionPartyHeading } from '../ElectionPartyHeading';
import { ElectionPartyList } from '../ElectionPartyList';
import { ElectionPartyHeadButton } from '../ElectionPartyHeadButton';

export const ElectionParty = React.memo(() => (
  <>
    <ElectionPartyHeading />
    <ElectionPartyHeadButton />
    <ElectionPartyList />
  </>
));
