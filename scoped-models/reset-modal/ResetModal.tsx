// ANCHOR React
import * as React from 'react';

// ANCHOR Model
import createModel from '@lxsmnsyc/react-scoped-model';

export const ResetModal = createModel(() => {
  const [modal, setModal] = React.useState<boolean>(false);
  const [voter, setVoter] = React.useState<string>('');

  return {
    modal,
    setModal,
    voter,
    setVoter,
  };
});
