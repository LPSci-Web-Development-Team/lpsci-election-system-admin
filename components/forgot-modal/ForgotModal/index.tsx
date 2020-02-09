// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { Modal, SIZE } from 'baseui/modal';

// ANCHOR Scoped Models
import { ResetModal } from '@lpsci/scoped-models/reset-modal/ResetModal';

// ANCHOR Components
import { ForgotModalHeading } from '../ForgotModalHeading';
import { ForgotModalBody } from '../ForgotModalBody';
import { ForgotModalFooter } from '../ForgotModalFooter';

// ANCHOR Styles
import { MODAL } from './styles';

export const ForgotModal = React.memo(() => {
  const [modal, setModal, voter] = ResetModal.useSelectors((state) => [
    state.modal, state.setModal, state.voter,
  ]);

  const closeModal = React.useCallback(() => setModal(false), [setModal]);

  return (
    <Modal
      onClose={closeModal}
      isOpen={modal}
      size={SIZE.default}
      overrides={MODAL}
      autofocus={false}
    >
      <ForgotModalHeading />
      <ForgotModalBody voter={voter} />
      <ForgotModalFooter />
    </Modal>
  );
});
