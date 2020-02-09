// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { Modal, SIZE } from 'baseui/modal';

// ANCHOR Scoped Models
import { PartiesModal } from 'scoped-models/parties-modal/PartiesModal';

// ANCHOR Components
import { PartiesModalHeading } from '../PartiesModalHeading';
import { PartiesModalBody } from '../PartiesModalBody';
import { PartiesModalFooter } from '../PartiesModalFooter';

// ANCHOR Styles
import { MODAL } from './styles';

export const RemoveAllPartiesModal = React.memo(() => {
  const [removeAllModal, setRemoveAllModal] = PartiesModal.useSelectors((state) => [
    state.removeAllModal, state.setRemoveAllModal,
  ]);

  const closeModal = React.useCallback(() => setRemoveAllModal(false), [setRemoveAllModal]);

  return (
    <Modal
      onClose={closeModal}
      isOpen={removeAllModal}
      size={SIZE.default}
      overrides={MODAL}
      autofocus={false}
    >
      <PartiesModalHeading text="Are you sure?" />
      <PartiesModalBody text="If you proceed, all registered parties will be deleted." />
      <PartiesModalFooter />
    </Modal>
  );
});
