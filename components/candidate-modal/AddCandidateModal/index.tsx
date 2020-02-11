// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { Modal, SIZE } from 'baseui/modal';
import { FormControl } from 'baseui/form-control';
import { Input } from 'baseui/input';

// ANCHOR Scoped Models
import { CandidatesModal } from 'scoped-models/candidates-modal/CandidatesModal';

// ANCHOR Hooks
import { useConstant } from '@lpsci/utils/hooks/useConstant';

// ANCHOR FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTag, faPalette } from '@fortawesome/free-solid-svg-icons';

// ANCHOR Components
import { CandidatesModalHeading } from '../CandidatesModalHeading';
import { CandidatesModalBody } from '../CandidatesModalBody';
import { CandidatesModalFooter } from '../CandidatesModalFooter';

// ANCHOR Styles
import { MODAL } from './styles';

export const AddCandidatesModal = React.memo(() => {
  const [addModal, setAddModal] = CandidatesModal.useSelectors((state) => [
    state.addModal, state.setAddModal,
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
      <CandidatesModalHeading text="Add another candidate." />
      <CandidatesModalBody>
        <form>
          <FormControl
            label="Name"
          >
            <Input
              startEnhancer={NameIcon}
              name="name"
              placeholder="THIRD"
            />
          </FormControl>
          <FormControl
            label="Color"
          >
            <Input
              startEnhancer={ColorIcon}
              name="lrn"
              placeholder="#F2F2F2"
            />
          </FormControl>
        </form>
      </CandidatesModalBody>
      <CandidatesModalFooter />
    </Modal>
  );
});
