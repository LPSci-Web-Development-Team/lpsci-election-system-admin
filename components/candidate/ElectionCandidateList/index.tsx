/* eslint-disable no-mixed-operators */
// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { styled } from 'baseui';
import { ListItem, ListItemLabel } from 'baseui/list';
import { Paragraph1, Paragraph2 } from 'baseui/typography';
import { Block } from 'baseui/block';

// ANCHOR Scoped Models
import { FetchedData } from '@lpsci/scoped-models/fetched-data/FetchedData';

// ANCHOR Models
import { ICandidate } from 'models/interfaces/Candidate';

// ANCHOR Utils
import { GET } from '@lpsci/utils/axios/methods';

// ANCHOR Components
import { ElectionCandidateListButton } from '../ElectionCandidateListButton';
import { ElectionCandidateListHead } from '../ElectionCandidateListHead';
import { ElectionCandidatePartyTag } from '../ElectionCandidatePartyTag';

// ANCHOR Styles
import {
  CONTAINER, CANDIDATE_NAME, CANDIDATE_LABEL, LIST_ITEM,
} from './styles';

const ListContainer = styled('ul', {
  width: '100%',
  marginTop: '30px',
  paddingLeft: 0,
  paddingRight: 0,
});

export const ElectionCandidateList = React.memo(() => {
  const [fetchCandidate, setFetchCandidate] = FetchedData.useSelector((state) => [
    state.fetchCandidate, state.setFetchCandidate,
  ]);

  // ANCHOR Fetch all parties
  React.useEffect(() => {
    const fetchedCandidates: ICandidate[] = [];
    // TODO Fix this on production
    GET('http://localhost:5000/api/candidates')
      .then((response) => {
        response.data.forEach((item: any) => {
          fetchedCandidates.push({
            id: item.id,
            firstName: item.firstName,
            lastName: item.lastName,
            position: item.position,
            party: item.partyId,
            image: item.imageURL,
          });
          setFetchCandidate([...fetchedCandidates]);
        });
      });
  }, [setFetchCandidate]);

  return (
    <ListContainer>
      <ElectionCandidateListHead />
      {
        fetchCandidate.map(({
          id, firstName, lastName, position, party, image,
        }) => (
          <Block key={id} overrides={LIST_ITEM}>
            <ListItem
              artwork={() => (
                <ElectionCandidatePartyTag id={party} />
              )}
              endEnhancer={() => (
                <ElectionCandidateListButton
                  firstName={firstName}
                  lastName={lastName}
                  position={position}
                  image={image}
                />
              )}
            >
              <ListItemLabel>
                <Block overrides={CONTAINER}>
                  <Paragraph1 overrides={CANDIDATE_NAME}>
                    {`${firstName} ${lastName}`}
                  </Paragraph1>
                  <Paragraph2 overrides={CANDIDATE_LABEL}>{position}</Paragraph2>
                </Block>
              </ListItemLabel>
            </ListItem>
          </Block>
        ))
      }
    </ListContainer>
  );
});
