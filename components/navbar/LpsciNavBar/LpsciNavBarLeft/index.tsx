// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { ALIGN, StyledNavigationList } from 'baseui/header-navigation';
import { LabelMedium } from 'baseui/typography';
import { Block } from 'baseui/block';
import { styled } from 'baseui';

// ANCHOR Models
import { DeviceView } from '@scoped-models/device/DeviceView';

// ANCHOR Constants
import { LOGO_TEXT } from '@constants/logo';

// ANCHOR Components
import { LpsciLogo } from '@components/logo/LpsciLogo';
import { LpsciNavBarBurger } from './LpsciNavBarBurger';

// ANCHOR Styles
import { BLOCK, TEXT, LINK } from './styles';

const LpsciLink = styled('a', LINK);

export const LpsciNavBarLeft = React.memo(() => {
  const isDesktop = DeviceView.useSelector((state) => state.isDesktop);

  return (
    <StyledNavigationList $align={ALIGN.left}>
      <LpsciNavBarBurger />
      {isDesktop && (
      <LpsciLink href="/">
        <Block overrides={BLOCK}>
          <LpsciLogo height="28px" />
          <LabelMedium overrides={TEXT}>
            {LOGO_TEXT}
          </LabelMedium>
        </Block>
      </LpsciLink>
      )}
    </StyledNavigationList>
  );
});
