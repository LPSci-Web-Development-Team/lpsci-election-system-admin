// ANCHOR React
import * as React from 'react';

// ANCHOR Model
import createModel from '@lxsmnsyc/react-scoped-model';

// ANCHOR Hooks
import { useConstant } from '@lpsci/utils/hooks/useConstant';

export const SectionsModal = createModel(() => {
  const [addModal, setAddModal] = React.useState<boolean>(false);
  const [editModal, setEditModal] = React.useState<boolean>(false);
  const [deleteModal, setDeleteModal] = React.useState<boolean>(false);
  const [removeAllModal, setRemoveAllModal] = React.useState<boolean>(false);
  const [name, setName] = React.useState<string>('');
  const [gradeLevel, setGradeLevel] = React.useState();

  const handler = useConstant(() => ({
    name: (e: React.ChangeEvent<HTMLInputElement>) => {
      setName(e.target.value);
    },
    gradeLevelPress: (e: React.KeyboardEvent<HTMLInputElement>) => {
      // Only ASCII charactar in that range allowed
      const ASCIICode = (e.which) ? e.which : e.keyCode;
      if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57)) {
        e.preventDefault();
      }
    },
    gradeLevel: (e: React.ChangeEvent<HTMLInputElement>) => {
      setGradeLevel(e.target.value);
    },
  }));

  const filled = React.useMemo(() => (
    name !== ''
    && gradeLevel !== 0
  ), [name, gradeLevel]);

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
    gradeLevel,
    setGradeLevel,
  };
});
