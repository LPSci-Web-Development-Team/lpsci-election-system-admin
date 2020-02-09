// ANCHOR React
import * as React from 'react';

// ANCHOR Model
import createModel from '@lxsmnsyc/react-scoped-model';

export const PartiesModal = createModel(() => {
  const [addModal, setAddModal] = React.useState<boolean>(false);
  const [editModal, setEditModal] = React.useState<boolean>(false);
  const [deleteModal, setDeleteModal] = React.useState<boolean>(false);
  const [removeAllModal, setRemoveAllModal] = React.useState<boolean>(false);

  return {
    addModal,
    setAddModal,
    editModal,
    setEditModal,
    deleteModal,
    setDeleteModal,
    removeAllModal,
    setRemoveAllModal,
  };
});
