// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { styled } from 'baseui';
import { LabelSmall } from 'baseui/typography';

// ANCHOR React Icons
import { Icon } from 'react-icons-kit';
import { signOut } from 'react-icons-kit/fa/signOut';

// ANCHOR Hooks
import { useAuthSignOut } from '@firebase/hooks/useAuthSignOut';

// ANCHOR Models
import { ThemePreference } from '@scoped-models/theme/ThemePreference';

// ANCHOR Styles
import { DIV, TEXT } from './styles';

const ClickableDiv = styled('div', DIV);

export const LpsciNavBarPopoverLogout = React.memo(() => {
  const { call: logout } = useAuthSignOut();

  const theme = ThemePreference.useSelector((state) => state.theme);

  return (
    <ClickableDiv
      onClick={logout}
      $theme={theme}
    >
      <Icon size={20} icon={signOut} />
      <LabelSmall overrides={TEXT}>Sign Out</LabelSmall>
    </ClickableDiv>
  );
});
