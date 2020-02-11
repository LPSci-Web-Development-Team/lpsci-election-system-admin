/* eslint-disable no-mixed-operators */
// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { styled } from 'baseui';
import { Tag, VARIANT, KIND } from 'baseui/tag';
import { ListItem, ListItemLabel } from 'baseui/list';
import { Paragraph1, Paragraph2 } from 'baseui/typography';
import { Block } from 'baseui/block';

// ANCHOR UI Models
import { CANDIDATES } from 'models/ui-models/candidate-list';

// ANCHOR Components
import { ElectionCandidateListButton } from '../ElectionCandidateListButton';
import { ElectionCandidateListHead } from '../ElectionCandidateListHead';

// ANCHOR Styles
import {
  TAG, CONTAINER, CANDIDATE_NAME, CANDIDATE_LABEL, LIST_ITEM,
} from './styles';

const ListContainer = styled('ul', {
  width: '100%',
  marginTop: '30px',
  paddingLeft: 0,
  paddingRight: 0,
});

export const ElectionCandidateList = React.memo(() => (
  <ListContainer>
    <ElectionCandidateListHead />
    {
        CANDIDATES.map(({
          firstName, lastName, position, party,
        }, index) => (
          <Block key={index} overrides={LIST_ITEM}>
            <ListItem
              artwork={() => (
                <Tag
                  overrides={TAG}
                  closeable={false}
                  variant={VARIANT.solid}
                  kind={KIND.custom}
                  color={party.color}
                >
                  {party.name}
                </Tag>
              )}
              endEnhancer={() => (
                <ElectionCandidateListButton
                  firstName={firstName}
                  lastName={lastName}
                  position={position}
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
));
