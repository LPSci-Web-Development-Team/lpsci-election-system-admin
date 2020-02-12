// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { Modal, SIZE } from 'baseui/modal';
import { FormControl } from 'baseui/form-control';
import { Input } from 'baseui/input';
import { Select } from 'baseui/select';

// ANCHOR Scoped Models
import { CandidatesModal } from 'scoped-models/candidates-modal/CandidatesModal';
import { FetchedData } from '@lpsci/scoped-models/fetched-data/FetchedData';

// ANCHOR Hooks
import { useConstant } from '@lpsci/utils/hooks/useConstant';

// ANCHOR FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTag, faPalette, faImage } from '@fortawesome/free-solid-svg-icons';

// ANCHOR Components
import { CandidatesModalHeading } from '../CandidatesModalHeading';
import { CandidatesModalBody } from '../CandidatesModalBody';
import { CandidatesModalFooter } from '../CandidatesModalFooter';

// ANCHOR Styles
import { MODAL } from './styles';

export const AddCandidatesModal = React.memo(() => {
  const [selectedValue, setSelectedValue] = React.useState<any>([]);

  const [addModal, setAddModal] = CandidatesModal.useSelectors((state) => [
    state.addModal, state.setAddModal,
  ]);

  const fetchParty = FetchedData.useSelector((state) => state.fetchParty);

  const closeModal = React.useCallback(() => setAddModal(false), [setAddModal]);

  const NameIcon = useConstant(() => <FontAwesomeIcon icon={faTag} />);
  const ColorIcon = useConstant(() => <FontAwesomeIcon icon={faPalette} />);
  const ImageIcon = useConstant(() => <FontAwesomeIcon icon={faImage} />);

  const optionParty: any = [];

  React.useEffect(() => {
    fetchParty.map(({ id, name }) => (
      optionParty.push({
        id,
        label: name,
      })
    ));
  }, [fetchParty, optionParty]);

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
            label="First Name"
          >
            <Input
              startEnhancer={NameIcon}
              name="firstName"
              placeholder="Juan"
            />
          </FormControl>
          <FormControl
            label="Last Name"
          >
            <Input
              startEnhancer={NameIcon}
              name="lastName"
              placeholder="Dela Cruz"
            />
          </FormControl>
          <FormControl
            label="Position"
          >
            <Input
              startEnhancer={ColorIcon}
              name="position"
              placeholder="President"
            />
          </FormControl>
          <FormControl
            label="Party"
          >
            <Select
              options={optionParty}
              labelKey="label"
              valueKey="id"
              onChange={({ value }) => {
                setSelectedValue(value);
              }}
              value={selectedValue}
            />
          </FormControl>
          <FormControl
            label="Image"
          >
            <Input
              startEnhancer={ImageIcon}
              name="image"
              placeholder="/img/party-name-position.jpg"
            />
          </FormControl>
        </form>
      </CandidatesModalBody>
      <CandidatesModalFooter />
    </Modal>
  );
});
