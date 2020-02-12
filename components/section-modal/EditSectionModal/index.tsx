// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { Modal, SIZE } from 'baseui/modal';
import { FormControl } from 'baseui/form-control';
import { Input } from 'baseui/input';

// ANCHOR Scoped Models
import { SectionsModal } from 'scoped-models/sections-modal/SectionsModal';

// ANCHOR Hooks
import { useConstant } from '@lpsci/utils/hooks/useConstant';

// ANCHOR FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTag, faPalette } from '@fortawesome/free-solid-svg-icons';

// ANCHOR Components
import { SectionsModalHeading } from '../SectionsModalHeading';
import { SectionsModalBody } from '../SectionsModalBody';
import { SectionsModalFooter } from '../SectionsModalFooter';

// ANCHOR Styles
import { MODAL } from './styles';

interface IEditModalProps {
  name: string;
  gradeLevel: number;
}

export const EditSectionModal = React.memo(({ name, gradeLevel }: IEditModalProps) => {
  const [editModal, setEditModal] = SectionsModal.useSelectors((state) => [
    state.editModal, state.setEditModal,
  ]);

  const closeModal = React.useCallback(() => setEditModal(false), [setEditModal]);

  const NameIcon = useConstant(() => <FontAwesomeIcon icon={faTag} />);
  const ColorIcon = useConstant(() => <FontAwesomeIcon icon={faPalette} />);

  return (
    <Modal
      onClose={closeModal}
      isOpen={editModal}
      size={SIZE.default}
      overrides={MODAL}
      autofocus={false}
    >
      <SectionsModalHeading text={`Edit ${name} section.`} />
      <SectionsModalBody>
        <form>
          <FormControl
            label="Name"
          >
            <Input
              startEnhancer={NameIcon}
              name="name"
              placeholder={name}
            />
          </FormControl>
          <FormControl
            label="Grade Level"
          >
            <Input
              startEnhancer={ColorIcon}
              name="gradeLevel"
              type="number"
              placeholder={String(gradeLevel)}
            />
          </FormControl>
        </form>
      </SectionsModalBody>
      <SectionsModalFooter />
    </Modal>
  );
});
