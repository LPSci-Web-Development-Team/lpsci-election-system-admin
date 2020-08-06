// ANCHOR React
import React from 'react';

// ANCHOR Base
import { KIND, Notification } from 'baseui/notification';

// ANCHOR Styles
import { NOTIFICATION } from './styles';

interface ILpsciSignUpErrorProps {
  message?: string;
  kind: KIND[keyof KIND];
}

export const Response = React.memo(({ message, kind }: ILpsciSignUpErrorProps) => {
  if (!message) {
    return null;
  }

  return (
    <Notification kind={kind} overrides={NOTIFICATION}>
      {message}
    </Notification>
  );
});
