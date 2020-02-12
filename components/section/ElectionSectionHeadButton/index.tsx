// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { ButtonGroup } from 'baseui/button-group';

// ANCHOR Components
import { ElectionSectionRemoveAllButton } from '../ElectionSectionRemoveAllButton';
import { ElectionSectionAddButton } from '../ElectionSectionAddButton';

// ANCHOR Styles
import { BUTTON_CONTAINER } from './styles';

export const ElectionSectionHeadButton = React.memo(() => (
  <ButtonGroup overrides={BUTTON_CONTAINER}>
    <ElectionSectionAddButton />
    <ElectionSectionRemoveAllButton />
  </ButtonGroup>
));
