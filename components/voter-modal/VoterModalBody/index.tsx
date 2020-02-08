// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { styled } from 'baseui';
import { ModalBody } from 'baseui/modal';
import { ListItem, ListItemLabel } from 'baseui/list';

// ANCHOR Components
const List = styled('ul', {
  marginLeft: '0px',
  marginTop: '0px',
  paddingLeft: '0px',
});

export const VoterModalBody = () => (
  <ModalBody>
    <List>
      <ListItem
        endEnhancer={() => 'SIKLAB Party'}
      >
        <ListItemLabel description="President">Cedrick Castro</ListItemLabel>
      </ListItem>
      <ListItem
        endEnhancer={() => 'SIKLAB Party'}
      >
        <ListItemLabel description="Vice President">Cedrick Castro</ListItemLabel>
      </ListItem>
      <ListItem
        endEnhancer={() => 'SIKLAB Party'}
      >
        <ListItemLabel description="Secretary">Cedrick Castro</ListItemLabel>
      </ListItem>
      <ListItem
        endEnhancer={() => 'SIKLAB Party'}
      >
        <ListItemLabel description="Treasurer">Cedrick Castro</ListItemLabel>
      </ListItem>
      <ListItem
        endEnhancer={() => 'SIKLAB Party'}
      >
        <ListItemLabel description="Auditor">Cedrick Castro</ListItemLabel>
      </ListItem>
      <ListItem
        endEnhancer={() => 'SIKLAB Party'}
      >
        <ListItemLabel description="Public Information Officer">Cedrick Castro</ListItemLabel>
      </ListItem>
      <ListItem
        endEnhancer={() => 'SIKLAB Party'}
      >
        <ListItemLabel description="Peace Officer">Cedrick Castro</ListItemLabel>
      </ListItem>
      <ListItem
        endEnhancer={() => 'SIKLAB Party'}
      >
        <ListItemLabel description="Level Representative">Cedrick Castro</ListItemLabel>
      </ListItem>
    </List>
  </ModalBody>
);
