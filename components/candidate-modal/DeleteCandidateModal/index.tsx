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

interface IDeleteCandidateModalProps {
  name: string;
}

export const DeleteCandidateModal = React.memo(({ name }: IDeleteCandidateModalProps) => {
  const [deleteModal, setDeleteModal] = CandidatesModal.useSelectors((state) => [
    state.deleteModal, state.setDeleteModal,
  ]);

  const closeModal = React.useCallback(() => setDeleteModal(false), [setDeleteModal]);

  return (
    <Modal
      onClose={closeModal}
      isOpen={deleteModal}
      size={SIZE.default}
      overrides={MODAL}
      autofocus={false}
    >
      <CandidatesModalHeading text="Are you sure?" />
      <CandidatesModalBody>
        <Paragraph1>
          If you proceed,
          <b>{` ${name} Candidate `}</b>
          will be deleted.
        </Paragraph1>
      </CandidatesModalBody>
      <CandidatesModalFooter />
    </Modal>
  );
});
