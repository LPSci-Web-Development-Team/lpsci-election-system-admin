// ANCHOR React
import React from 'react';

// ANCHOR Base
import { StyledNavigationItem } from 'baseui/header-navigation';
import { Avatar } from 'baseui/avatar';
import {
  Button, KIND, SHAPE, SIZE,
} from 'baseui/button';

// ANCHOR Hooks
import { useAuthState } from '@firebase/hooks/useAuthState';
import { useAuthProfilePhoto } from '@firebase/hooks/useAuthProfilePhoto';

// ANCHOR Styles
import { AVATAR_SIZE } from './styles';

// ANCHOR Components
import { LpsciNavBarPopoverContainer } from './LpsciNavBarPopoverContainer';

export const LpsciNavBarAvatarPopover = React.memo(() => {
  const { user } = useAuthState();

  const imageSrc = useAuthProfilePhoto();

  return (
    <StyledNavigationItem>
      <LpsciNavBarPopoverContainer>
        <Button
          kind={KIND.minimal}
          size={SIZE.compact}
          shape={SHAPE.round}
        >
          <Avatar
            name={(user && user.displayName) || ''}
            size={AVATAR_SIZE}
            src={imageSrc}
          />
        </Button>
      </LpsciNavBarPopoverContainer>
    </StyledNavigationItem>
  );
});
