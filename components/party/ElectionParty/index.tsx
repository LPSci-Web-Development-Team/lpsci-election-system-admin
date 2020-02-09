// ANCHOR React
import * as React from 'react';

// ANCHOR Components
import { RemoveAllPartiesModal } from '@lpsci/components/party-modal/RemoveAllPartyModal';
import { ElectionPartyHeading } from '../ElectionPartyHeading';
import { ElectionPartyList } from '../ElectionPartyList';
import { ElectionPartyHeadButton } from '../ElectionPartyHeadButton';

export const ElectionParty = React.memo(() => (
  <>
    <ElectionPartyHeading />
    <ElectionPartyHeadButton />
    <ElectionPartyList />
    <RemoveAllPartiesModal />
  </>
));
