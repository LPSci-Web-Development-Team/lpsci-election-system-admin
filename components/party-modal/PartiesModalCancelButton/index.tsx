// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { ModalButton } from 'baseui/modal';

// ANCHOR Scoped Models
import { PartiesModal } from 'scoped-models/parties-modal/PartiesModal';

// ANCHOR Styles
import { BUTTON } from './styles';

export const PartiesModalCancelButton = React.memo(() => {
  const [
    setAddModal, setEditModal, setRemoveAllModal, setDeleteModal,
  ] = PartiesModal.useSelectors((state) => [
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
