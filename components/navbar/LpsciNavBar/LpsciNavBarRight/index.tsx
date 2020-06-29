// ANCHOR React
import React from 'react';

// ANCHOR Base
import { Block } from 'baseui/block';
import { withStyle } from 'baseui'; import { ALIGN, StyledNavigationList, StyledNavigationItem } from 'baseui/header-navigation';

// ANCHOR Hooks
import { useAuthState } from '@firebase/hooks/useAuthState';

// ANCHOR Components
import { Skeleton } from '@components/utils/Skeleton';
import { LpsciNavBarAvatarPopover } from './LpsciNavBarAvatarPopover';

// ANCHOR Styles
import { SKELETON } from './styles';

const PopoverSkeleton = withStyle(Skeleton, SKELETON);

const LpsciNavBarRightContent = React.memo(() => {
  const { user } = useAuthState();

  if (user) {
    return (
      <StyledNavigationItem>
        <Block marginRight="16px">
          <PopoverSkeleton />
        </Block>
      </StyledNavigationItem>
    );
  }

  return <LpsciNavBarAvatarPopover />;
});

export const LpsciNavBarRight = React.memo(() => (
  <StyledNavigationList $align={ALIGN.right}>
    <LpsciNavBarRightContent />
  </StyledNavigationList>
));
