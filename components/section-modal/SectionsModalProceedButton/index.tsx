// ANCHOR React
import * as React from 'react';

// ANCHOR Next
import Router from 'next/router';

// ANCHOR Base
import { ModalButton } from 'baseui/modal';

// ANCHOR Scoped Models
import { SectionsModal } from 'scoped-models/sections-modal/SectionsModal';

// ANCHOR Hooks
import { usePromise } from '@lpsci/utils/hooks/usePromise';

// ANCHOR Utils
import { addSection } from '@lpsci/utils/api/section';


export const SectionsModalProceedButton = React.memo(() => {
  const [
    name, gradeLevel, filled, setAddModal,
  ] = SectionsModal.useSelectors((state) => [
    state.name,
    state.gradeLevel,
    state.filled,
    state.setAddModal,
  ]);

  const mounted = usePromise([
    name, gradeLevel, filled,
  ]);

  const onSubmit = React.useCallback(async (event) => {
    event.preventDefault();

    if (filled) {
      try {
        await mounted(addSection({
          name,
          gradeLevel,
        }));
        setAddModal(false);
        Router.push('/');
        Router.push('/section');
      } catch (err) {
        Router.push('/section');
      }
    }
  }, [filled, gradeLevel, mounted, name, setAddModal]);

  return (
    <ModalButton onClick={onSubmit}>Proceed</ModalButton>
  );
});
