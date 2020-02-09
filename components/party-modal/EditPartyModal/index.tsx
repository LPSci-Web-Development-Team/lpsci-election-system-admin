// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { Modal, SIZE } from 'baseui/modal';
import { FormControl } from 'baseui/form-control';
import { Input } from 'baseui/input';

// ANCHOR Scoped Models
import { PartiesModal } from 'scoped-models/parties-modal/PartiesModal';

// ANCHOR Hooks
import { useConstant } from '@lpsci/utils/hooks/useConstant';

// ANCHOR FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTag, faPalette } from '@fortawesome/free-solid-svg-icons';

// ANCHOR Components
import { PartiesModalHeading } from '../PartiesModalHeading';
import { PartiesModalBody } from '../PartiesModalBody';
import { PartiesModalFooter } from '../PartiesModalFooter';

// ANCHOR Styles
import { MODAL } from './styles';

interface IEditModalProps {
  name: string;
  color: string;
}

export const EditPartyModal = React.memo(({ name, color }: IEditModalProps) => {
  const [editModal, setEditModal] = PartiesModal.useSelectors((state) => [
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
      <PartiesModalHeading text={`Edit ${name} party.`} />
      <PartiesModalBody>
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
            label="Color"
          >
            <Input
              startEnhancer={ColorIcon}
              name="color"
              placeholder={color}
            />
          </FormControl>
        </form>
      </PartiesModalBody>
      <PartiesModalFooter />
    </Modal>
  );
});
