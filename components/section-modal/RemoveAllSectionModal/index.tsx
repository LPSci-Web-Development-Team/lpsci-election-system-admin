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

export const RemoveAllSectionsModal = React.memo(() => {
  const [removeAllModal, setRemoveAllModal] = SectionsModal.useSelectors((state) => [
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
      <SectionsModalHeading text="Are you sure?" />
      <SectionsModalBody>
        <Paragraph1>If you proceed, all registered sections will be deleted.</Paragraph1>
      </SectionsModalBody>
      <SectionsModalFooter />
    </Modal>
  );
});
