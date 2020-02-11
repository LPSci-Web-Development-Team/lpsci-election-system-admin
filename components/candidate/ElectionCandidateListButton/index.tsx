// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { ButtonGroup } from 'baseui/button-group';

// ANCHOR Components
import { ElectionCandidateEditButton } from '../ElectionCandidateEditButton';
import { ElectionCandidateDeleteButton } from '../ElectionCandidateDeleteButton';

interface IListButtonProps {
  firstName: string;
  lastName: string;
  position: string;
  image: string;
}

export const ElectionCandidateListButton = React.memo(
  ({
    firstName, lastName, position, image,
  }: IListButtonProps) => (
    <ButtonGroup>
      <ElectionCandidateEditButton
        firstName={firstName}
        lastName={lastName}
        position={position}
        image={image}
      />
      <ElectionCandidateDeleteButton firstName={firstName} lastName={lastName} />
    </ButtonGroup>
  ),
);
