// ANCHOR React
import * as React from 'react';

// ANCHOR Model
import createModel from '@lxsmnsyc/react-scoped-model';

export const VoteModal = createModel(() => {
  const [modal, setModal] = React.useState<boolean>(false);

  return {
    modal,
    setModal,
  };
});
