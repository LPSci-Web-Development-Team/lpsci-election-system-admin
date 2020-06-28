// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { KIND, Notification } from 'baseui/notification';

// ANCHOR Styles
import { NOTIFICATION } from './styles';

interface ILyonSignUpErrorProps {
  message?: string;
  kind: KIND[keyof KIND];
}

export const Response = React.memo(({ message, kind }: ILyonSignUpErrorProps) => {
  if (!message) {
    return null;
  }

  return (
    <Notification kind={kind} overrides={NOTIFICATION}>
      {message}
    </Notification>
  );
});
