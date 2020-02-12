// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { ButtonGroup } from 'baseui/button-group';

// ANCHOR Components
import { ElectionSectionEditButton } from '../ElectionSectionEditButton';
import { ElectionSectionDeleteButton } from '../ElectionSectionDeleteButton';

interface IListButtonProps {
  name: string;
  gradeLevel: number;
}

export const ElectionSectionListButton = React.memo(({ name, gradeLevel }: IListButtonProps) => (
  <ButtonGroup>
    <ElectionSectionEditButton name={name} gradeLevel={gradeLevel} />
    <ElectionSectionDeleteButton name={name} />
  </ButtonGroup>
));
