// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { Block } from 'baseui/block';
import { Paragraph1 } from 'baseui/typography';

// ANCHOR Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';

// ANCHOR Styles
import { BLOCK, SELECTED_SELECTION } from './styles';

export const SidebarSelection = React.memo(() => (
  <>
    <Block overrides={BLOCK}>
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
    </Block>
  </>
));
