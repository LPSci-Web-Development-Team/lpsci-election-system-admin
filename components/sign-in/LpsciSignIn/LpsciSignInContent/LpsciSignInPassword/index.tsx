// ANCHOR React
import * as React from 'react';

// ANCHOR Hooks
import { useConstant } from '@lpsci/hooks';

// ANCHOR React Icons
import { Icon } from 'react-icons-kit';
import { lock } from 'react-icons-kit/fa/lock';

// ANCHOR Models
import { ForgotPasswordVisibility } from '@scoped-models/sign-in/ForgotPasswordVisibility';

// ANCHOR Component
import { FormField } from '@components/utils/FormField';
import { LpsciSignInForgotPassword } from './LpsciSignInForgotPassword';

// ANCHOR Constants
import { LABEL, PLACEHOLDER } from './constants';

export const LpsciSignInPassword = React.memo(() => {
  const startEnhancer = useConstant(() => (
    <Icon icon={lock} />
  ));

  const caption = useConstant(() => (
    <ForgotPasswordVisibility.Provider>
      <LpsciSignInForgotPassword />
    </ForgotPasswordVisibility.Provider>
  ));

  return (
    <FormField
      label={LABEL}
      caption={caption}
      placeholder={PLACEHOLDER}
      startEnhancer={startEnhancer}
      type="password"
      required
    />
  );
});
