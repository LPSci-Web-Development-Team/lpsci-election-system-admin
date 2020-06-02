// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { Modal, SIZE } from 'baseui/modal';
import { Paragraph1 } from 'baseui/typography';

// ANCHOR Scoped Models
import { SectionsModal } from 'scoped-models/sections-modal/SectionsModal';

// ANCHOR Components
import { SectionsModalHeading } from '../SectionsModalHeading';
import { SectionsModalBody } from '../SectionsModalBody';
import { SectionsModalFooter } from '../SectionsModalFooter';

// ANCHOR Styles
import { MODAL } from './styles';

interface IDeleteSectionModalProps {
  name: string;
}

export const DeleteSectionModal = React.memo(({ name }: IDeleteSectionModalProps) => {
  const [deleteModal, setDeleteModal] = SectionsModal.useSelectors((state) => [
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
      <SectionsModalHeading text="Are you sure?" />
      <SectionsModalBody>
        <Paragraph1>
          If you proceed,
          <b>{` ${name} Section `}</b>
          will be deleted.
        </Paragraph1>
      </SectionsModalBody>
      <SectionsModalFooter />
    </Modal>
  );
});
