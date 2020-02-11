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

interface IEditModalProps {
  firstName: string;
  lastName: string;
  position: string;
}

export const EditCandidateModal = React.memo(
  ({
    firstName, lastName, position,
  }: IEditModalProps) => {
    const [editModal, setEditModal] = CandidatesModal.useSelectors((state) => [
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
        <CandidatesModalHeading text={`Edit ${firstName} ${lastName}'s profile.`} />
        <CandidatesModalBody>
          <form>
            <FormControl
              label="First Name"
            >
              <Input
                startEnhancer={NameIcon}
                name="firstName"
                placeholder={firstName}
              />
            </FormControl>
            <FormControl
              label="Last Name"
            >
              <Input
                startEnhancer={NameIcon}
                name="lastName"
                placeholder={lastName}
              />
            </FormControl>
            <FormControl
              label="Position"
            >
              <Input
                startEnhancer={ColorIcon}
                name="position"
                placeholder={position}
              />
            </FormControl>
          </form>
        </CandidatesModalBody>
        <CandidatesModalFooter />
      </Modal>
    );
  },
);
