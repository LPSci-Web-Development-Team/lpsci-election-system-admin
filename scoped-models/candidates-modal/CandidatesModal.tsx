// ANCHOR React
import * as React from 'react';

// ANCHOR Model
import createModel from '@lxsmnsyc/react-scoped-model';

export const CandidatesModal = createModel(() => {
  const [addModal, setAddModal] = React.useState<boolean>(false);
  const [editModal, setEditModal] = React.useState<boolean>(false);
  const [deleteModal, setDeleteModal] = React.useState<boolean>(false);
  const [removeAllModal, setRemoveAllModal] = React.useState<boolean>(false);
  const [firstName, setFirstName] = React.useState<string>('');
  const [lastName, setLastName] = React.useState<string>('');
  const [position, setPosition] = React.useState<string>('');
  const [party, setParty] = React.useState<any>([]);

  return {
    addModal,
    setAddModal,
    editModal,
    setEditModal,
    deleteModal,
    setDeleteModal,
    removeAllModal,
    setRemoveAllModal,
    firstName,
    setFirstName,
    lastName,
    setLastName,
    position,
    setPosition,
    party,
    setParty,
  };
});
