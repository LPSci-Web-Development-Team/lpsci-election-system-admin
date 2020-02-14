/* eslint-disable no-mixed-operators */
// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { styled } from 'baseui';
import { Button } from 'baseui/button';
import { Tag, VARIANT, KIND } from 'baseui/tag';
import { ListItem, ListItemLabel } from 'baseui/list';
import { Paragraph1, Paragraph2 } from 'baseui/typography';
import { Block } from 'baseui/block';

// ANCHOR Scoped Models
import { ResetModal } from '@lpsci/scoped-models/reset-modal/ResetModal';
import { ForgotSearch } from '@lpsci/scoped-models/forgot-search/ForgotSearch';

// ANCHOR Utils
import { getVotersFromLastName } from '@lpsci/utils/api/voter';

// ANCHOR Styles
import {
  TAG, CONTAINER, LAST_NAME, FIRST_NAME,
} from './styles';

// ANCHOR Components
const ListContainer = styled('ul', {
  width: '100%',
  marginTop: '30px',
  paddingLeft: 0,
  paddingRight: 0,
});

export const ElectionForgotList = React.memo(() => {
  const [setVoter, setModal] = ResetModal.useSelectors((state) => [
    state.setVoter,
    state.setModal,
  ]);

  const search = ForgotSearch.useSelector((state) => state.search);

  const [voterList, setVoterList] = React.useState<Array<Record<string, any>>>([]);

  React.useEffect(() => {
    if (search.length >= 2) {
      getVotersFromLastName(search)
        .then((response) => {
          setVoterList(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      setVoterList([]);
    }
  }, [search]);


  const openModal = React.useCallback((voter) => {
    setVoter(voter);
    setModal(true);
  }, [setModal, setVoter]);

  return (
    <ListContainer>
      {voterList.map((data, index) => (
        <ListItem
          key={index}
          artwork={() => (
            <Tag
              overrides={TAG}
              closeable={false}
              variant={
                data.gradeLevel === 12
                  ? VARIANT.outlined
                  : VARIANT.solid
              }
              kind={
                data.gradeLevel === 11 || data.gradeLevel === 12
                  ? KIND.primary
                  : KIND.custom
              }
              color={
                data.gradeLevel === 7 && '#4BB462'
                || data.gradeLevel === 8 && '#FFD600'
                || data.gradeLevel === 9 && '#EE3D48'
                || data.gradeLevel === 10 && '#1EC9E8'
                || 'black'
              }
            >
              {data.section}
            </Tag>
          )}
          endEnhancer={() => (
            <Button
              size="compact"
              kind="primary"
              onClick={() => openModal(data.id)}
            >
              Reset Password
            </Button>
          )}
        >
          <ListItemLabel>
            <Block overrides={CONTAINER}>
              <Paragraph1 overrides={LAST_NAME}>
                {data.lastName.toUpperCase()}
                ,
              </Paragraph1>
              <Paragraph2 overrides={FIRST_NAME}>{data.firstName}</Paragraph2>
            </Block>
          </ListItemLabel>
        </ListItem>
      ))}
    </ListContainer>
  );
});
