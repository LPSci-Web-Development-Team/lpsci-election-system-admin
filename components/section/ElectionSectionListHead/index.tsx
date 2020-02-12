/* eslint-disable no-mixed-operators */
// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { Paragraph2 } from 'baseui/typography';
import { Block } from 'baseui/block';
import { ListItem, ListItemLabel } from 'baseui/list';

// ANCHOR Styles
import {
  CONTAINER, SECTION_LABEL, LIST_ITEM, HEADING,
} from './styles';

export const ElectionSectionListHead = React.memo(() => (
  <Block overrides={LIST_ITEM}>
    <ListItem
      artwork={() => (
        <Paragraph2 overrides={HEADING}>
          Grade Level
        </Paragraph2>
      )}
      endEnhancer={() => (
        <Paragraph2 overrides={HEADING}>
          Actions
        </Paragraph2>
      )}
    >
      <ListItemLabel>
        <Block overrides={CONTAINER}>
          <Paragraph2 overrides={SECTION_LABEL}>Section Name</Paragraph2>
        </Block>
      </ListItemLabel>
    </ListItem>
  </Block>
));
