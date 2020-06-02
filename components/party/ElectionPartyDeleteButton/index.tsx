// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { Button } from 'baseui/button';

// ANCHOR Scoped Models
import { PartiesModal } from '@lpsci/scoped-models/parties-modal/PartiesModal';

// ANCHOR Styles
import { DeletePartyModal } from '@lpsci/components/party-modal/DeletePartyModal';
import { BUTTON } from './styles';

interface IDeleteProps {
  name: string;
}

export const ElectionPartyDeleteButton = React.memo(({ name }: IDeleteProps) => {
  const [setDeleteModal, partyName, setName] = PartiesModal.useSelectors((state) => [
    state.setDeleteModal, state.name, state.setName,
  ]);

  const openRemoveModal = React.useCallback(() => {
    setName(name);
    setDeleteModal(true);
  }, [name, setDeleteModal, setName]);

  return (
    <>
      <Button
        overrides={BUTTON}
        onClick={openRemoveModal}
        kind="secondary"
      >
        Delete Party
      </Button>
      <DeletePartyModal name={partyName} />
    </>
  );
});
