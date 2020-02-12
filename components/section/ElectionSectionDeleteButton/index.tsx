// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { Button } from 'baseui/button';

// ANCHOR Scoped Models
import { SectionsModal } from '@lpsci/scoped-models/sections-modal/SectionsModal';

// ANCHOR Styles
import { DeleteSectionModal } from '@lpsci/components/section-modal/DeleteSectionModal';
import { BUTTON } from './styles';

interface IDeleteProps {
  name: string;
}

export const ElectionSectionDeleteButton = React.memo(({ name }: IDeleteProps) => {
  const [setDeleteModal, sectionName, setName] = SectionsModal.useSelectors((state) => [
    state.setDeleteModal, state.name, state.setName,
  ]);

  const openRemoveModal = React.useCallback(() => {
    setName(name);
    setDeleteModal(true);
  }, [name, setDeleteModal, setName]);

  return (
    <>
      <Button
        overrides={BUTTON}
        onClick={openRemoveModal}
        kind="secondary"
      >
        Delete Section
      </Button>
      <DeleteSectionModal name={sectionName} />
    </>
  );
});
