// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { ButtonGroup } from 'baseui/button-group';

// ANCHOR Components
import { ElectionCandidateEditButton } from '../ElectionCandidateEditButton';
import { ElectionCandidateDeleteButton } from '../ElectionCandidateDeleteButton';

interface IListButtonProps {
  name: string;
  color: string;
}

export const ElectionCandidateListButton = React.memo(({ name, color }: IListButtonProps) => (
  <ButtonGroup>
    <ElectionCandidateEditButton name={name} color={color} />
    <ElectionCandidateDeleteButton name={name} />
  </ButtonGroup>
));
