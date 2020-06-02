// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { Button } from 'baseui/button';

// ANCHOR Scoped Models
import { CandidatesModal } from '@lpsci/scoped-models/candidates-modal/CandidatesModal';

// ANCHOR Styles
import { BUTTON } from './styles';

export const ElectionCandidateAddButton = React.memo(() => {
  const setAddModal = CandidatesModal.useSelector((state) => state.setAddModal);

  const openAddModal = React.useCallback(() => setAddModal(true), [setAddModal]);

  return (
    <Button
      overrides={BUTTON}
      onClick={openAddModal}
    >
      Add Candidate
    </Button>
  );
});
