// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { styled } from 'baseui';
import { LabelSmall } from 'baseui/typography';

// ANCHOR React Icons
import { Icon } from 'react-icons-kit';
import { moonO } from 'react-icons-kit/fa/moonO';

// ANCHOR Models
import { ThemePreference } from '@scoped-models/theme/ThemePreference';

// ANCHOR Styles
import { DIV, TEXT } from './styles';

const ClickableDiv = styled('div', DIV);

export const LpsciNavBarPopoverTheme = React.memo(() => {
  const [isDark, toggle, theme] = ThemePreference.useSelectors((state) => [
    state.isDark, state.toggle, state.theme,
  ]);

  const onClick = React.useCallback(() => {
    toggle();
  }, [toggle]);

  return (
    <ClickableDiv
      onClick={onClick}
      $theme={theme}
    >
      <Icon size={20} icon={moonO} />
      <LabelSmall overrides={TEXT}>
        {`Dark Theme: ${isDark ? 'On' : 'Off'}`}
      </LabelSmall>
    </ClickableDiv>
  );
});
