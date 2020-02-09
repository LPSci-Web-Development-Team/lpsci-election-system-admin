// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { Modal, SIZE } from 'baseui/modal';
import { Paragraph1 } from 'baseui/typography';

// ANCHOR Scoped Models
import { PartiesModal } from 'scoped-models/parties-modal/PartiesModal';

// ANCHOR Components
import { PartiesModalHeading } from '../PartiesModalHeading';
import { PartiesModalBody } from '../PartiesModalBody';
import { PartiesModalFooter } from '../PartiesModalFooter';

// ANCHOR Styles
import { MODAL } from './styles';

interface IDeletePartyModalProps {
  name: string;
}

export const DeletePartyModal = React.memo(({ name }: IDeletePartyModalProps) => {
  const [deleteModal, setDeleteModal] = PartiesModal.useSelectors((state) => [
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
      <PartiesModalHeading text="Are you sure?" />
      <PartiesModalBody>
        <Paragraph1>
          If you proceed,
          <b>{` ${name} Party `}</b>
          will be deleted.
        </Paragraph1>
      </PartiesModalBody>
      <PartiesModalFooter />
    </Modal>
  );
});
