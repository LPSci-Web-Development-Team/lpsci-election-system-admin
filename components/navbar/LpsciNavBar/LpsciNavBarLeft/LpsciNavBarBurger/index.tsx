// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { withStyle } from 'baseui';
import {
  Button, KIND, SHAPE, SIZE,
} from 'baseui/button';
import { StyledNavigationItem } from 'baseui/header-navigation';
import { Menu } from 'baseui/icon';

// ANCHOR Models
import { SidebarVisibility } from '@scoped-models/sidebar/SidebarVisibility';

// ANCHOR Styles
import { MENU_SIZE, BURGER } from './styles';

const BurgerContainer = withStyle(StyledNavigationItem, BURGER);

export const LpsciNavBarBurger = React.memo(() => {
  const toggle = SidebarVisibility.useSelector((state) => state.toggle);

  return (
    <BurgerContainer>
      <Button
        kind={KIND.tertiary}
        size={SIZE.default}
        shape={SHAPE.square}
        onClick={toggle}
      >
        <Menu size={MENU_SIZE} />
      </Button>
    </BurgerContainer>
  );
});
