/* eslint-disable no-mixed-operators */
// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { styled } from 'baseui';
import { Tag, VARIANT, KIND } from 'baseui/tag';
import { ListItem, ListItemLabel } from 'baseui/list';
import { Paragraph1, Paragraph2 } from 'baseui/typography';
import { Block } from 'baseui/block';

// ANCHOR Utils
import { GET } from '@lpsci/utils/axios/methods';

// ANCHOR Scoped Models
import { FetchedData } from '@lpsci/scoped-models/fetched-data/FetchedData';

// ANCHOR Models
import { IParty } from 'models/interfaces/Party';

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

export const ElectionPartyList = React.memo(() => {
  const [fetchParty, setFetchParty] = FetchedData.useSelector((state) => [
    state.fetchParty, state.setFetchParty,
  ]);
  // ANCHOR Fetch all parties
  React.useEffect(() => {
    const fetchedParties: IParty[] = [];
    // TODO Fix this on production
    GET('/api/parties')
      .then((response) => {
        response.data.forEach((item: any) => {
          fetchedParties.push({
            id: item.id,
            name: item.name,
            hexColor: item.hexColor,
          });
          setFetchParty([...fetchedParties]);
        });
      });
  }, [setFetchParty]);

  return (
    <ListContainer>
      <ElectionPartyListHead />
      {
        fetchParty.map(({ id, name, hexColor }) => (
          <Block key={id} overrides={LIST_ITEM}>
            <ListItem
              artwork={() => (
                <Tag
                  overrides={TAG}
                  closeable={false}
                  variant={VARIANT.solid}
                  kind={KIND.custom}
                  color={hexColor}
                >
                  {hexColor}
                </Tag>
              )}
              endEnhancer={() => (
                <ElectionPartyListButton name={name} color={hexColor} />
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
  );
});
