// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { Button } from 'baseui/button';

// ANCHOR Scoped Models
import { PartiesModal } from '@lpsci/scoped-models/parties-modal/PartiesModal';

// ANCHOR Styles
import { BUTTON } from './styles';

export const ElectionPartyRemoveAllButton = React.memo(() => {
  const setRemoveAllModal = PartiesModal.useSelector((state) => state.setRemoveAllModal);

  const openRemoveModal = React.useCallback(() => setRemoveAllModal(true), [setRemoveAllModal]);

  return (
    <Button
      overrides={BUTTON}
      onClick={openRemoveModal}
      kind="secondary"
    >
      Remove All Parties
    </Button>
  );
});
