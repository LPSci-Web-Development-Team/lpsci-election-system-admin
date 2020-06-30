// ANCHOR React
import * as React from 'react';

// ANCHOR Next
import Router from 'next/router';

// ANCHOR Base
import { styled } from 'baseui';
import { LabelSmall } from 'baseui/typography';

// ANCHOR React Icons
import { Icon } from 'react-icons-kit';
import { moonO } from 'react-icons-kit/fa/moonO';

// ANCHOR Styles
import { userTheme } from '@functions/userTheme';
import { DIV, TEXT } from './styles';

const ClickableDiv = styled('div', DIV);

export const LpsciNavBarPopoverTheme = React.memo(() => {
  const { isDark, toggle } = userTheme();

  const onClick = React.useCallback(() => {
    toggle();
    Router.reload();
  }, [toggle]);

  return (
    <ClickableDiv onClick={onClick}>
      <Icon size={20} icon={moonO} />
      <LabelSmall overrides={TEXT}>
        {`Dark Theme: ${isDark ? 'On' : 'Off'}`}
      </LabelSmall>
    </ClickableDiv>
  );
});
