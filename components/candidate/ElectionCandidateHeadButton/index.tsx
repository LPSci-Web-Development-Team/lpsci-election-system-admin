// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { ButtonGroup } from 'baseui/button-group';

// ANCHOR Components
import { ElectionCandidateRemoveAllButton } from '../ElectionCandidateRemoveAllButton';
import { ElectionCandidateAddButton } from '../ElectionCandidateAddButton';

// ANCHOR Styles
import { BUTTON_CONTAINER } from './styles';

export const ElectionCandidateHeadButton = React.memo(() => (
  <ButtonGroup overrides={BUTTON_CONTAINER}>
    <ElectionCandidateAddButton />
    <ElectionCandidateRemoveAllButton />
  </ButtonGroup>
));
