// ANCHOR React
import * as React from 'react';

// ANCHOR Next
import Router from 'next/router';

// ANCHOR Base
import { ModalButton } from 'baseui/modal';

// ANCHOR Scoped Models
import { CandidatesModal } from 'scoped-models/candidates-modal/CandidatesModal';

// ANCHOR Hooks
import { usePromise } from '@lpsci/utils/hooks/usePromise';

// ANCHOR Utils
import { addCandidate } from '@lpsci/utils/api/candidate';

export const CandidatesModalProceedButton = React.memo(() => {
  const [
    firstName, lastName, position, party, image, filled, setAddModal,
  ] = CandidatesModal.useSelectors((state) => [
    state.firstName,
    state.lastName,
    state.position,
    state.party,
    state.image,
    state.filled,
    state.setAddModal,
  ]);

  const mounted = usePromise([
    firstName, lastName, position, party, image, filled,
  ]);

  const onSubmit = React.useCallback(async (event) => {
    event.preventDefault();

    if (filled) {
      try {
        await mounted(addCandidate({
          firstName,
          lastName,
          position,
          imgUrl: image,
          partyId: party,
        }));
        console.log('SUCCESS');
        setAddModal(false);
        Router.push('/');
        Router.push('/candidate');
      } catch (err) {
        Router.push('/candidate');
        console.log('SUCCESS BUT', err);
      }
    }
  }, [filled, firstName, image, lastName, mounted, party, position, setAddModal]);

  return (
    <ModalButton onClick={onSubmit}>Proceed</ModalButton>
  );
});
