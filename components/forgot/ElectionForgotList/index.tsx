// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { styled } from 'baseui';
import { Button } from 'baseui/button';
import { Tag, VARIANT } from 'baseui/tag';
import { ListItem, ListItemLabel } from 'baseui/list';
import { Paragraph1, Paragraph2 } from 'baseui/typography';
import { Block } from 'baseui/block';

// ANCHOR Styles
import { ResetModal } from '@lpsci/scoped-models/reset-modal/ResetModal';
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

  const openModal = React.useCallback((voter) => {
    setVoter(voter);
    setModal(true);
  }, [setModal, setVoter]);

  return (
    <ListContainer>
      <ListItem
        artwork={() => (
          <Tag overrides={TAG} closeable={false} variant={VARIANT.solid} kind="primary">
            Faraday
          </Tag>
        )}
        endEnhancer={() => (
          <Button
            size="compact"
            kind="primary"
            onClick={() => openModal('Prince Neil Cedrick Castro')}
          >
            Reset Password
          </Button>
        )}
      >
        <ListItemLabel>
          <Block overrides={CONTAINER}>
            <Paragraph1 overrides={LAST_NAME}>CASTRO,</Paragraph1>
            <Paragraph2 overrides={FIRST_NAME}>Prince Neil Cedrick</Paragraph2>
          </Block>
        </ListItemLabel>
      </ListItem>
    </ListContainer>
  );
});
