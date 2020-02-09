// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { Button } from 'baseui/button';

// ANCHOR Scoped Models
import { PartiesModal } from '@lpsci/scoped-models/parties-modal/PartiesModal';

// ANCHOR Styles
import { BUTTON } from './styles';

export const ElectionPartyAddButton = React.memo(() => {
  const setAddModal = PartiesModal.useSelector((state) => state.setAddModal);

  const openAddModal = React.useCallback(() => setAddModal(true), [setAddModal]);

  return (
    <Button
      overrides={BUTTON}
      onClick={openAddModal}
    >
      Add Party
    </Button>
  );
});
