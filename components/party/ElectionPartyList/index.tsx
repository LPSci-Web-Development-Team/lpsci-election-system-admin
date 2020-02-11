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
import { PARTIES } from 'models/ui-models/party-list';

// ANCHOR Components
import { ElectionPartyListButton } from '../ElectionPartyListButton';
import { ElectionPartyListHead } from '../ElectionPartyListHead';

// ANCHOR Styles
import {
  TAG, CONTAINER, PARTY_NAME, PARTY_LABEL, LIST_ITEM,
} from './styles';

const ListContainer = styled('ul', {
  width: '100%',
  marginTop: '30px',
  paddingLeft: 0,
  paddingRight: 0,
});

export const ElectionPartyList = React.memo(() => (
  <ListContainer>
    <ElectionPartyListHead />
    {
        PARTIES.map(({ color, name }, index) => (
          <Block key={index} overrides={LIST_ITEM}>
            <ListItem
              artwork={() => (
                <Tag
                  overrides={TAG}
                  closeable={false}
                  variant={VARIANT.solid}
                  kind={KIND.custom}
                  color={color}
                >
                  {color}
                </Tag>
              )}
              endEnhancer={() => (
                <ElectionPartyListButton name={name} color={color} />
              )}
            >
              <ListItemLabel>
                <Block overrides={CONTAINER}>
                  <Paragraph1 overrides={PARTY_NAME}>
                    {name.toUpperCase()}
                  </Paragraph1>
                  <Paragraph2 overrides={PARTY_LABEL}>Party</Paragraph2>
                </Block>
              </ListItemLabel>
            </ListItem>
          </Block>
        ))
      }
  </ListContainer>
));
