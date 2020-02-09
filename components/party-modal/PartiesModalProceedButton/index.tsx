// ANCHOR React
import * as React from 'react';

// ANCHOR Next
import Link from 'next/link';

// ANCHOR Base
import { ModalButton } from 'baseui/modal';

// ANCHOR Scoped Models
import { PartiesModal } from 'scoped-models/parties-modal/PartiesModal';

export const PartiesModalProceedButton = React.memo(() => {
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
    <Link href="#">
      <ModalButton onClick={closeModal}>Proceed</ModalButton>
    </Link>
  );
});
