// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { Button } from 'baseui/button';

// ANCHOR Scoped Models
import { CandidatesModal } from '@lpsci/scoped-models/candidates-modal/CandidatesModal';

// ANCHOR Styles
import { BUTTON } from './styles';

export const ElectionCandidateRemoveAllButton = React.memo(() => {
  const setRemoveAllModal = CandidatesModal.useSelector((state) => state.setRemoveAllModal);

  const openRemoveModal = React.useCallback(() => setRemoveAllModal(true), [setRemoveAllModal]);

  return (
    <Button
      overrides={BUTTON}
      onClick={openRemoveModal}
      kind="secondary"
    >
      Remove All Candidates
    </Button>
  );
});
