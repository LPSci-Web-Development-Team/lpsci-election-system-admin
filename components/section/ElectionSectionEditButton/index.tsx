// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { Button } from 'baseui/button';

// ANCHOR Scoped Models
import { SectionsModal } from '@lpsci/scoped-models/sections-modal/SectionsModal';

// ANCHOR Components
import { EditSectionModal } from '@lpsci/components/section-modal/EditSectionModal';

// ANCHOR Styles
import { BUTTON } from './styles';

interface IEditProps {
  name: string;
  gradeLevel: number;
}

export const ElectionSectionEditButton = React.memo(({ name, gradeLevel }: IEditProps) => {
  const [
    setEditModal, sectionName, setName, sectionGradeLevel, setGradeLevel,
  ] = SectionsModal.useSelectors((state) => [
    state.setEditModal, state.name, state.setName, state.gradeLevel, state.setGradeLevel,
  ]);

  const openEditModal = React.useCallback(() => {
    setName(name);
    setGradeLevel(gradeLevel);
    setEditModal(true);
  }, [gradeLevel, name, setEditModal, setGradeLevel, setName]);

  return (
    <>
      <Button
        overrides={BUTTON}
        onClick={openEditModal}
      >
        Edit Section
      </Button>
      <EditSectionModal name={sectionName} gradeLevel={sectionGradeLevel} />
    </>
  );
});
