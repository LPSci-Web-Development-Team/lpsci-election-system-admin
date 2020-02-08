// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { ModalButton } from 'baseui/modal';

// ANCHOR Scoped Models
import { VoteModal } from 'scoped-models/vote-modal/VoteModal';

export const VoterModalCloseButton = React.memo(() => {
  const setModal = VoteModal.useSelector((state) => state.setModal);

  const closeModal = React.useCallback(() => setModal(false), [setModal]);

  return (
    <ModalButton
      onClick={closeModal}
    >
      Close
    </ModalButton>
  );
});
