// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { Button } from 'baseui/button';

// ANCHOR Scoped Models
import { SectionsModal } from '@lpsci/scoped-models/sections-modal/SectionsModal';

// ANCHOR Styles
import { BUTTON } from './styles';

export const ElectionSectionRemoveAllButton = React.memo(() => {
  const setRemoveAllModal = SectionsModal.useSelector((state) => state.setRemoveAllModal);

  const openRemoveModal = React.useCallback(() => setRemoveAllModal(true), [setRemoveAllModal]);

  return (
    <Button
      overrides={BUTTON}
      onClick={openRemoveModal}
      kind="secondary"
    >
      Remove All Sections
    </Button>
  );
});
