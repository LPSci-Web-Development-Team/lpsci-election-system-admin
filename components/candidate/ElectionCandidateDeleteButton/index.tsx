// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { Button } from 'baseui/button';

// ANCHOR Scoped Models
import { CandidatesModal } from '@lpsci/scoped-models/candidates-modal/CandidatesModal';

// ANCHOR Styles
import { DeleteCandidateModal } from '@lpsci/components/candidate-modal/DeleteCandidateModal';
import { BUTTON } from './styles';

interface IDeleteProps {
  firstName: string;
  lastName: string;
}

export const ElectionCandidateDeleteButton = React.memo(
  ({ firstName, lastName }: IDeleteProps) => {
    const [
      setDeleteModal, candidateFirstName, setFirstName, candidateLastName, setLastName,
    ] = CandidatesModal.useSelectors((state) => [
      state.setDeleteModal,
      state.firstName,
      state.setFirstName,
      state.lastName,
      state.setLastName,
    ]);

    const openRemoveModal = React.useCallback(() => {
      setFirstName(firstName);
      setLastName(lastName);
      setDeleteModal(true);
    }, [firstName, lastName, setDeleteModal, setFirstName, setLastName]);

    return (
      <>
        <Button
          overrides={BUTTON}
          onClick={openRemoveModal}
          kind="secondary"
        >
          Delete
        </Button>
        <DeleteCandidateModal firstName={candidateFirstName} lastName={candidateLastName} />
      </>
    );
  },
);
