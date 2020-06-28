// ANCHOR React
import * as React from 'react';

// ANCHOR LPSci Hooks
import { useConstant } from '@lpsci/hooks';

// ANCHOR React Icons
import { Icon } from 'react-icons-kit';
import { envelope } from 'react-icons-kit/fa/envelope';

// ANCHOR Component
import { FormField } from '@components/utils/FormField';

// ANCHOR Constants
import { LABEL, PLACEHOLDER } from './constants';

export const LpsciSignInEmail = React.memo(() => {
  const startEnhancer = useConstant(() => (
    <Icon icon={envelope} />
  ));

  return (
    <FormField
      label={LABEL}
      placeholder={PLACEHOLDER}
      startEnhancer={startEnhancer}
      type="email"
      required
    />
  );
});
