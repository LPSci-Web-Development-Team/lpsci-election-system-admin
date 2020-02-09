// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { ButtonGroup } from 'baseui/button-group';

// ANCHOR Components
import { ElectionPartyRemoveAllButton } from '../ElectionPartyRemoveAllButton';
import { ElectionPartyAddButton } from '../ElectionPartyAddButton';

// ANCHOR Styles
import { BUTTON_CONTAINER } from './styles';

export const ElectionPartyHeadButton = React.memo(() => (
  <ButtonGroup overrides={BUTTON_CONTAINER}>
    <ElectionPartyAddButton />
    <ElectionPartyRemoveAllButton />
  </ButtonGroup>
));
