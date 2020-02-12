// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { Button } from 'baseui/button';

// ANCHOR Scoped Models
import { SectionsModal } from '@lpsci/scoped-models/sections-modal/SectionsModal';

// ANCHOR Styles
import { BUTTON } from './styles';

export const ElectionSectionAddButton = React.memo(() => {
  const setAddModal = SectionsModal.useSelector((state) => state.setAddModal);

  const openAddModal = React.useCallback(() => setAddModal(true), [setAddModal]);

  return (
    <Button
      overrides={BUTTON}
      onClick={openAddModal}
    >
      Add Section
    </Button>
  );
});
