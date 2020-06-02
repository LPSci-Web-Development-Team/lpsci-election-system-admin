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
  const fetchCandidate = FetchedData.useSelector((state) => state.fetchCandidate);

  return (
    <ListContainer>
      <ElectionCandidateListHead />
      {
        fetchCandidate.map(({
          id, firstName, lastName, position, partyId, imgUrl,
        }) => (
          <Block key={id} overrides={LIST_ITEM}>
            <ListItem
              artwork={() => (
                <ElectionCandidatePartyTag id={partyId} />
              )}
              endEnhancer={() => (
                <ElectionCandidateListButton
                  firstName={firstName}
                  lastName={lastName}
                  position={position}
                  image={imgUrl}
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
