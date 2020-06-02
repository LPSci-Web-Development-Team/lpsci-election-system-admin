// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { ModalButton } from 'baseui/modal';

// ANCHOR Scoped Models
import { ResetModal } from '@lpsci/scoped-models/reset-modal/ResetModal';

// ANCHOR Utils
import { resetVoterPassword } from '@lpsci/utils/api/voter';

export const ForgotModalProceedButton = React.memo(() => {
  const [voter, setModal] = ResetModal.useSelectors((state) => [state.voter, state.setModal]);

  const closeModal = React.useCallback(() => {
    resetVoterPassword(voter, { password: 'ilovelpsci' });
    setModal(false);
  }, [setModal, voter]);

  return (
    <ModalButton onClick={closeModal}>Proceed</ModalButton>
  );
});
