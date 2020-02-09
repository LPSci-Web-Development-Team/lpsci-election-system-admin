// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { ButtonGroup } from 'baseui/button-group';

// ANCHOR Components
import { ElectionPartyEditButton } from '../ElectionPartyEditButton';
import { ElectionPartyDeleteButton } from '../ElectionPartyDeleteButton';

export const ElectionPartyListButton = React.memo(() => (
  <ButtonGroup>
    <ElectionPartyEditButton />
    <ElectionPartyDeleteButton />
  </ButtonGroup>
));
