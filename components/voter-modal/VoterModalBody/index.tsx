// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { styled } from 'baseui';
import { ModalBody } from 'baseui/modal';

// ANCHOR Scoped Models
import { VoteModal } from '@lpsci/scoped-models/vote-modal/VoteModal';

// ANCHOR Utils
import { GET } from '@lpsci/utils/axios/methods';

// ANCHOR Components
import { VoterModalListItem } from '../VoterModalListItem';

const List = styled('ul', {
  marginLeft: '0px',
  marginTop: '0px',
  paddingLeft: '0px',
});

export const VoterModalBody = React.memo(() => {
  const voterId = VoteModal.useSelector((state) => state.voterId);
  const [fetchedVotes, setFetchedVotes] = React.useState<any>([]);
  const temporaryFetch: any = [];

  React.useEffect(() => {
    GET(`/api/voters/${voterId}/votes`)
      .then((response) => {
        response.data.map((item: any) => (
          temporaryFetch.push(item)
        ));
        setFetchedVotes([...temporaryFetch]);
      });
  }, [temporaryFetch, voterId]);

  return (
    <ModalBody>
      <List>
        {
          fetchedVotes.map((item: { candidateId: string; position: string }) => (
            <VoterModalListItem candidateId={item.candidateId} position={item.position} />
          ))
        }
      </List>
    </ModalBody>
  );
});
