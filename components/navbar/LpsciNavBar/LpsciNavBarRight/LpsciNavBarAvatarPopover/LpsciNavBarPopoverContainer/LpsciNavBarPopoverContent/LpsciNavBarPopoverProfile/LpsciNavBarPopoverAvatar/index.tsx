// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { Avatar } from 'baseui/avatar';

// ANCHOR Hooks
import { useAuthProfilePhoto } from '@firebase/hooks/useAuthProfilePhoto';
import { useAuthState } from '@firebase/hooks/useAuthState';

// ANCHOR Styles
import { AVATAR_SIZE } from './styles';

export const LpsciNavBarPopoverAvatar = React.memo(() => {
  const { user } = useAuthState();

  const imageSrc = useAuthProfilePhoto();

  return (
    <Avatar
      name={(user && user.displayName) || ''}
      size={AVATAR_SIZE}
      src={imageSrc}
    />
  );
});
