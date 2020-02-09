// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { Button } from 'baseui/button';

// ANCHOR Scoped Models
import { PartiesModal } from '@lpsci/scoped-models/parties-modal/PartiesModal';

// ANCHOR Styles
import { BUTTON } from './styles';

export const ElectionPartyEditButton = React.memo(() => {
  const setEditModal = PartiesModal.useSelector((state) => state.setEditModal);

  const openEditModal = React.useCallback(() => setEditModal(true), [setEditModal]);

  return (
    <Button
      overrides={BUTTON}
      onClick={openEditModal}
    >
      Edit Party
    </Button>
  );
});
