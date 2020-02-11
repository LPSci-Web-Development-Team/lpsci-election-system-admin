// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { Modal, SIZE } from 'baseui/modal';
import { Paragraph1 } from 'baseui/typography';

// ANCHOR Scoped Models
import { CandidatesModal } from 'scoped-models/candidates-modal/CandidatesModal';

// ANCHOR Components
import { CandidatesModalHeading } from '../CandidatesModalHeading';
import { CandidatesModalBody } from '../CandidatesModalBody';
import { CandidatesModalFooter } from '../CandidatesModalFooter';

// ANCHOR Styles
import { MODAL } from './styles';

export const RemoveAllCandidatesModal = React.memo(() => {
  const [removeAllModal, setRemoveAllModal] = CandidatesModal.useSelectors((state) => [
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
      <CandidatesModalHeading text="Are you sure?" />
      <CandidatesModalBody>
        <Paragraph1>If you proceed, all registered candidates will be deleted.</Paragraph1>
      </CandidatesModalBody>
      <CandidatesModalFooter />
    </Modal>
  );
});
