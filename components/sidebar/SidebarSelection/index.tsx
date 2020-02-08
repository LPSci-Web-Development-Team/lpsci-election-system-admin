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

// ANCHOR UI Models
import { SECTIONS } from 'models/ui-models/sidebar-section';

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
    {
      SECTIONS.map(({ label, Icon, url }) => (
        <ClickableDiv onClick={() => Router.push(url)}>
          <Paragraph1 overrides={SELECTED_SELECTION}>
            <FontAwesomeIcon
              icon={Icon}
              style={{
                height: '14px',
                marginRight: '30px',
              }}
            />
            {label}
          </Paragraph1>
        </ClickableDiv>
      ))
    }
  </Block>
));
