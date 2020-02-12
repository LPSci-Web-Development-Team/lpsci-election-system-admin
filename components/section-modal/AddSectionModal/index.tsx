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

export const AddSectionsModal = React.memo(() => {
  const [
    addModal, setAddModal, nameHandler, gradeLevelPress, gradeLevelHandler,
  ] = SectionsModal.useSelectors((state) => [
    state.addModal,
    state.setAddModal,
    state.handler.name,
    state.handler.gradeLevelPress,
    state.handler.gradeLevel,
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
      <SectionsModalHeading text="Add another section." />
      <SectionsModalBody>
        <form>
          <FormControl
            label="Name"
          >
            <Input
              startEnhancer={NameIcon}
              name="name"
              placeholder="Padolina"
              onChange={nameHandler}
            />
          </FormControl>
          <FormControl
            label="Grade Level"
          >
            <Input
              startEnhancer={ColorIcon}
              name="gradeLevel"
              placeholder="7"
              type="number"
              onKeyPress={gradeLevelPress}
              onChange={gradeLevelHandler}
            />
          </FormControl>
        </form>
      </SectionsModalBody>
      <SectionsModalFooter />
    </Modal>
  );
});
