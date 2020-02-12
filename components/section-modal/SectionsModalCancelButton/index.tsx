// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { ModalButton } from 'baseui/modal';

// ANCHOR Scoped Models
import { SectionsModal } from 'scoped-models/sections-modal/SectionsModal';

// ANCHOR Styles
import { BUTTON } from './styles';

export const SectionsModalCancelButton = React.memo(() => {
  const [
    setAddModal, setEditModal, setRemoveAllModal, setDeleteModal,
  ] = SectionsModal.useSelectors((state) => [
    state.setAddModal, state.setEditModal, state.setRemoveAllModal, state.setDeleteModal,
  ]);

  const closeModal = React.useCallback(() => {
    setAddModal(false);
    setEditModal(false);
    setRemoveAllModal(false);
    setDeleteModal(false);
  }, [setAddModal, setDeleteModal, setEditModal, setRemoveAllModal]);

  return (
    <ModalButton
      overrides={BUTTON}
      onClick={closeModal}
    >
      Cancel
    </ModalButton>
  );
});
