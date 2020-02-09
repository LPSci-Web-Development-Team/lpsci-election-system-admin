// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { ModalButton } from 'baseui/modal';

// ANCHOR Scoped Models
import { ResetModal } from '@lpsci/scoped-models/reset-modal/ResetModal';

// ANCHOR Styles
import { BUTTON } from './styles';

export const ForgotModalCancelButton = React.memo(() => {
  const setModal = ResetModal.useSelector((state) => state.setModal);

  const closeModal = React.useCallback(() => setModal(false), [setModal]);

  return (
    <ModalButton
      overrides={BUTTON}
      onClick={closeModal}
    >
      Cancel
    </ModalButton>
  );
});
