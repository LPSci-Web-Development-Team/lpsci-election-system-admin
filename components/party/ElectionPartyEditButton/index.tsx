// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { Button } from 'baseui/button';

// ANCHOR Scoped Models
import { PartiesModal } from '@lpsci/scoped-models/parties-modal/PartiesModal';

// ANCHOR Components
import { EditPartyModal } from '@lpsci/components/party-modal/EditPartyModal';

// ANCHOR Styles
import { BUTTON } from './styles';

interface IEditProps {
  name: string;
  color: string;
}

export const ElectionPartyEditButton = React.memo(({ name, color }: IEditProps) => {
  const [
    setEditModal, partyName, setName, partyColor, setColor,
  ] = PartiesModal.useSelectors((state) => [
    state.setEditModal, state.name, state.setName, state.color, state.setColor,
  ]);

  const openEditModal = React.useCallback(() => {
    setName(name);
    setColor(color);
    setEditModal(true);
  }, [color, name, setColor, setEditModal, setName]);

  return (
    <>
      <Button
        overrides={BUTTON}
        onClick={openEditModal}
      >
        Edit Party
      </Button>
      <EditPartyModal name={partyName} color={partyColor} />
    </>
  );
});
