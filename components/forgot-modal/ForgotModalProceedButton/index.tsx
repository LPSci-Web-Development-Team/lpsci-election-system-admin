// ANCHOR React
import * as React from 'react';

// ANCHOR Next
import Link from 'next/link';

// ANCHOR Base
import { ModalButton } from 'baseui/modal';

// ANCHOR Scoped Models
import { ResetModal } from '@lpsci/scoped-models/reset-modal/ResetModal';

export const ForgotModalProceedButton = React.memo(() => {
  const setModal = ResetModal.useSelector((state) => state.setModal);

  const closeModal = React.useCallback(() => setModal(false), [setModal]);

  return (
    <Link href="/vote-success">
      <ModalButton onClick={closeModal}>Proceed</ModalButton>
    </Link>
  );
});
