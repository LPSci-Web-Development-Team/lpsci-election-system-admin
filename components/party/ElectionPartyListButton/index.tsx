// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { ButtonGroup } from 'baseui/button-group';

// ANCHOR Components
import { ElectionPartyEditButton } from '../ElectionPartyEditButton';
import { ElectionPartyDeleteButton } from '../ElectionPartyDeleteButton';

interface IListButtonProps {
  name: string;
  color: string;
}

export const ElectionPartyListButton = React.memo(({ name, color }: IListButtonProps) => (
  <ButtonGroup>
    <ElectionPartyEditButton name={name} color={color} />
    <ElectionPartyDeleteButton name={name} color={color} />
  </ButtonGroup>
));
