// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { Button } from 'baseui/button';

// ANCHOR Scoped Models
import { PartiesModal } from '@lpsci/scoped-models/parties-modal/PartiesModal';

// ANCHOR Styles
import { BUTTON } from './styles';

export const ElectionPartyDeleteButton = React.memo(() => {
  const setDeleteModal = PartiesModal.useSelector((state) => state.setDeleteModal);

  const openRemoveModal = React.useCallback(() => setDeleteModal(true), [setDeleteModal]);

  return (
    <Button
      overrides={BUTTON}
      onClick={openRemoveModal}
      kind="secondary"
    >
      Delete Party
    </Button>
  );
});
