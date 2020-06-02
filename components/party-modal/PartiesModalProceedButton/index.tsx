// ANCHOR React
import * as React from 'react';

// ANCHOR Next
import Router from 'next/router';

// ANCHOR Base
import { ModalButton } from 'baseui/modal';

// ANCHOR Scoped Models
import { PartiesModal } from 'scoped-models/parties-modal/PartiesModal';

// ANCHOR Hooks
import { usePromise } from '@lpsci/utils/hooks/usePromise';

// ANCHOR Utils
import { addParty } from '@lpsci/utils/api/party';


export const PartiesModalProceedButton = React.memo(() => {
  const [
    name, color, filled, setAddModal,
  ] = PartiesModal.useSelectors((state) => [
    state.name,
    state.color,
    state.filled,
    state.setAddModal,
  ]);

  const mounted = usePromise([
    name, color, filled,
  ]);

  const onSubmit = React.useCallback(async (event) => {
    event.preventDefault();

    if (filled) {
      try {
        await mounted(addParty({
          name,
          hexColor: color,
        }));
        setAddModal(false);
        Router.push('/');
        Router.push('/party');
      } catch (err) {
        Router.push('/party');
      }
    }
  }, [color, filled, mounted, name, setAddModal]);

  return (
    <ModalButton onClick={onSubmit}>Proceed</ModalButton>
  );
});
