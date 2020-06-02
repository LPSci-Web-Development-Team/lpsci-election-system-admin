// ANCHOR React
import * as React from 'react';

// ANCHOR Model
import createModel from '@lxsmnsyc/react-scoped-model';

// ANCHOR Hooks
import { useConstant } from '@lpsci/utils/hooks/useConstant';

export const PartiesModal = createModel(() => {
  const [addModal, setAddModal] = React.useState<boolean>(false);
  const [editModal, setEditModal] = React.useState<boolean>(false);
  const [deleteModal, setDeleteModal] = React.useState<boolean>(false);
  const [removeAllModal, setRemoveAllModal] = React.useState<boolean>(false);
  const [name, setName] = React.useState<string>('');
  const [color, setColor] = React.useState<string>('');

  const handler = useConstant(() => ({
    name: (e: React.ChangeEvent<HTMLInputElement>) => {
      setName(e.target.value);
    },
    color: (e: React.ChangeEvent<HTMLInputElement>) => {
      setColor(e.target.value);
    },
  }));

  const filled = React.useMemo(() => (
    name !== ''
    && color !== ''
  ), [name, color]);

  return {
    handler,
    filled,
    addModal,
    setAddModal,
    editModal,
    setEditModal,
    deleteModal,
    setDeleteModal,
    removeAllModal,
    setRemoveAllModal,
    name,
    setName,
    color,
    setColor,
  };
});
