// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { Button } from 'baseui/button';

// ANCHOR Scoped Models
import { CandidatesModal } from '@lpsci/scoped-models/candidates-modal/CandidatesModal';

// ANCHOR Components
import { EditCandidateModal } from '@lpsci/components/candidate-modal/EditCandidateModal';

// ANCHOR Styles
import { BUTTON } from './styles';

interface IEditProps {
  firstName: string;
  lastName: string;
  position: string;
  image: string;
}

export const ElectionCandidateEditButton = React.memo(
  ({
    firstName, lastName, position, image,
  }: IEditProps) => {
    const [
      setEditModal,
      candidateFirstName,
      setFirstName,
      candidateLastName,
      setLastName,
      candidatePosition,
      setPosition,
      candidateImage,
      setImage,
    ] = CandidatesModal.useSelectors((state) => [
      state.setEditModal,
      state.firstName,
      state.setFirstName,
      state.lastName,
      state.setLastName,
      state.position,
      state.setPosition,
      state.image,
      state.setImage,
    ]);

    const openEditModal = React.useCallback(() => {
      setFirstName(firstName);
      setLastName(lastName);
      setPosition(position);
      setImage(image);
      setEditModal(true);
    }, [firstName, image, lastName, position, setEditModal, setFirstName, setImage, setLastName, setPosition]);

    return (
      <>
        <Button
          overrides={BUTTON}
          onClick={openEditModal}
        >
          Edit
        </Button>
        <EditCandidateModal
          firstName={candidateFirstName}
          lastName={candidateLastName}
          position={candidatePosition}
          image={candidateImage}
        />
      </>
    );
  },
);
