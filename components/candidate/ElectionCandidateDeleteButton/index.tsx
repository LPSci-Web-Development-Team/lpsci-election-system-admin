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
  name: string;
}

export const ElectionCandidateDeleteButton = React.memo(({ name }: IDeleteProps) => {
  const [setDeleteModal, partyName, setName] = CandidatesModal.useSelectors((state) => [
    state.setDeleteModal, state.name, state.setName,
  ]);

  const openRemoveModal = React.useCallback(() => {
    setName(name);
    setDeleteModal(true);
  }, [name, setDeleteModal, setName]);

  return (
    <>
      <Button
        overrides={BUTTON}
        onClick={openRemoveModal}
        kind="secondary"
      >
        Delete Candidate
      </Button>
      <DeleteCandidateModal name={partyName} />
    </>
  );
});
