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

export const AddPartiesModal = React.memo(() => {
  const [
    addModal, setAddModal, nameHandler, colorHandler,
  ] = PartiesModal.useSelectors((state) => [
    state.addModal,
    state.setAddModal,
    state.handler.name,
    state.handler.color,
  ]);

  const closeModal = React.useCallback(() => setAddModal(false), [setAddModal]);

  const NameIcon = useConstant(() => <FontAwesomeIcon icon={faTag} />);
  const ColorIcon = useConstant(() => <FontAwesomeIcon icon={faPalette} />);

  return (
    <Modal
      onClose={closeModal}
      isOpen={addModal}
      size={SIZE.default}
      overrides={MODAL}
      autofocus={false}
    >
      <PartiesModalHeading text="Add another party." />
      <PartiesModalBody>
        <form>
          <FormControl
            label="Name"
          >
            <Input
              startEnhancer={NameIcon}
              name="name"
              placeholder="THIRD"
              onChange={nameHandler}
            />
          </FormControl>
          <FormControl
            label="Color"
          >
            <Input
              startEnhancer={ColorIcon}
              name="lrn"
              placeholder="#F2F2F2"
              onChange={colorHandler}
            />
          </FormControl>
        </form>
      </PartiesModalBody>
      <PartiesModalFooter />
    </Modal>
  );
});
