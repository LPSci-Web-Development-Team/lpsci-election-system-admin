// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { ListItem, ListItemLabel } from 'baseui/list';

// ANCHOR Utils
import { GET } from '@lpsci/utils/axios/methods';

interface IVoterModalListProps {
  candidateId: string;
  position: string;
}

export const VoterModalListItem = React.memo(
  ({ candidateId, position }: IVoterModalListProps) => {
    const [fetchedCandidate, setFetchedCandidate] = React.useState({
      firstName: '',
      lastName: '',
      party: '',
    });
    const [fetchedParty, setFetchedParty] = React.useState('');

    React.useEffect(() => {
      if (candidateId) {
        GET(`http://localhost:5000/api/candidates/${candidateId}`)
          .then((response) => (
            setFetchedCandidate({
              firstName: response.data.firstName,
              lastName: response.data.lastName,
              party: response.data.partyId,
            })
          ));
      } else {
        setFetchedCandidate({
          firstName: 'Abstain',
          lastName: '',
          party: '',
        });
      }
    }, [candidateId, position]);

    React.useEffect(() => {
      GET(`http://localhost:5000/api/parties/${fetchedCandidate.party}`)
        .then((response) => (
          setFetchedParty(response.data.name)
        ));
    }, [fetchedCandidate.party]);

    return (
      <ListItem
        endEnhancer={() => `${fetchedParty}`}
      >
        <ListItemLabel description={position}>
          {`${fetchedCandidate.firstName} ${fetchedCandidate.lastName}`}
        </ListItemLabel>
      </ListItem>
    );
  },
);
