// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { Modal, SIZE } from 'baseui/modal';

// ANCHOR Scoped Models
import { VoteModal } from 'scoped-models/vote-modal/VoteModal';

// ANCHOR Components
import { VoterModalHeading } from '../VoterModalHeading';
import { VoterModalBody } from '../VoterModalBody';
import { VoterModalFooter } from '../VoterModalFooter';

// ANCHOR Styles
import { MODAL } from './styles';

export const VoterModal = React.memo(() => {
  const [modal, setModal] = VoteModal.useSelectors((state) => [
    state.modal, state.setModal,
  ]);

  const closeModal = React.useCallback(() => setModal(false), [setModal]);

  return (
    <Modal
      onClose={closeModal}
      isOpen={modal}
      size={SIZE.default}
      overrides={MODAL}
    >
      <VoterModalHeading />
      <VoterModalBody />
      <VoterModalFooter />
    </Modal>
  );
});
