// ANCHOR React
import * as React from 'react';

// ANCHOR Model
import createModel from '@lxsmnsyc/react-scoped-model';

// ANCHOR Hooks
import { useConstant } from '@lpsci/utils/hooks/useConstant';

export const CandidatesModal = createModel(() => {
  const [addModal, setAddModal] = React.useState<boolean>(false);
  const [editModal, setEditModal] = React.useState<boolean>(false);
  const [deleteModal, setDeleteModal] = React.useState<boolean>(false);
  const [removeAllModal, setRemoveAllModal] = React.useState<boolean>(false);
  const [firstName, setFirstName] = React.useState<string>('');
  const [lastName, setLastName] = React.useState<string>('');
  const [position, setPosition] = React.useState<string>('');
  const [party, setParty] = React.useState();
  const [image, setImage] = React.useState<string>('');

  const handler = useConstant(() => ({
    firstName: (e: React.ChangeEvent<HTMLInputElement>) => {
      setFirstName(e.target.value);
    },
    lastName: (e: React.ChangeEvent<HTMLInputElement>) => {
      setLastName(e.target.value);
    },
    positiom: (e: React.ChangeEvent<HTMLInputElement>) => {
      setPosition(e.target.value);
    },
    image: (e: React.ChangeEvent<HTMLInputElement>) => {
      setImage(e.target.value);
    },
    party: setParty,
  }));

  const filled = React.useMemo(() => (
    firstName !== ''
    && lastName !== ''
    && position !== ''
    && party !== ''
    && image !== ''
  ), [firstName, lastName, position, party, image]);

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
    firstName,
    setFirstName,
    lastName,
    setLastName,
    position,
    setPosition,
    party,
    setParty,
    image,
    setImage,
  };
});
