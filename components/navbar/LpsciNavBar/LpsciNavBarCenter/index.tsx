// ANCHOR React
import React from 'react';

// ANCHOR Base
import { ALIGN, StyledNavigationList, StyledNavigationItem } from 'baseui/header-navigation';

// ANCHOR Models
import { DeviceView } from '@scoped-models/device/DeviceView';

// ANCHOR Components
import { LpsciLogo } from '@components/logo/LpsciLogo';

export const LpsciNavBarCenter = React.memo(() => {
  const isDesktop = DeviceView.useSelector((state) => state.isDesktop);

  if (isDesktop) {
    return null;
  }

  return (
    <StyledNavigationList $align={ALIGN.left}>
      <StyledNavigationItem>
        <LpsciLogo height="32px" />
      </StyledNavigationItem>
    </StyledNavigationList>
  );
});
