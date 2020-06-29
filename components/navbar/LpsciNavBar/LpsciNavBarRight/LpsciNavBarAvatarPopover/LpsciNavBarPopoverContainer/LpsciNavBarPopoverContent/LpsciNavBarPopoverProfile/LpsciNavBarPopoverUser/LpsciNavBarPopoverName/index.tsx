// ANCHOR  React
import * as React from 'react';

// ANCHOR Base
import { LabelMedium } from 'baseui/typography';

// ANCHOR Hooks
import { useAuthState } from '@firebase/hooks/useAuthState';

export const LpsciNavBarPopoverName = React.memo(() => {
  const { user } = useAuthState();

  if (user) {
    return <LabelMedium>{user.displayName}</LabelMedium>;
  }

  return null;
});
