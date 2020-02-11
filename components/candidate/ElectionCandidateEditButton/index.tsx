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
  name: string;
  color: string;
}

export const ElectionCandidateEditButton = React.memo(({ name, color }: IEditProps) => {
  const [
    setEditModal, partyName, setName, partyColor, setColor,
  ] = CandidatesModal.useSelectors((state) => [
    state.setEditModal, state.name, state.setName, state.color, state.setColor,
  ]);

  const openEditModal = React.useCallback(() => {
    setName(name);
    setColor(color);
    setEditModal(true);
  }, [color, name, setColor, setEditModal, setName]);

  return (
    <>
      <Button
        overrides={BUTTON}
        onClick={openEditModal}
      >
        Edit Candidate
      </Button>
      <EditCandidateModal name={partyName} color={partyColor} />
    </>
  );
});
