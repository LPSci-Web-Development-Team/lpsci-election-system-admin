// ANCHOR React
import * as React from 'react';

// ANCHOR  Next
import Router from 'next/router';

// ANCHOR Base
import { styled } from 'baseui';
import { Block } from 'baseui/block';
import { Paragraph1 } from 'baseui/typography';

// ANCHOR Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';

// ANCHOR Styles
import { BLOCK, SELECTED_SELECTION } from './styles';

const ClickableDiv = styled('div', {
  marginTop: '-17px',
  marginLeft: '0px',
  marginRight: '40px',
  cursor: 'pointer',
});

export const SidebarSelection = React.memo(() => (
  <Block overrides={BLOCK}>
    <ClickableDiv onClick={() => Router.push('/forgot')}>
      <Paragraph1 overrides={SELECTED_SELECTION}>
        <FontAwesomeIcon
          icon={faLock}
          style={{
            height: '14px',
            marginRight: '30px',
          }}
        />
        Forgot Password
      </Paragraph1>
    </ClickableDiv>
  </Block>
));
