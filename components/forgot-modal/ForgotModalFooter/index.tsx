// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { ModalFooter } from 'baseui/modal';

// ANCHOR Components
import { ForgotModalCancelButton } from '../ForgotModalCancelButton';
import { ForgotModalProceedButton } from '../ForgotModalProceedButton';

export const ForgotModalFooter = () => (
  <ModalFooter>
    <ForgotModalCancelButton />
    <ForgotModalProceedButton />
  </ModalFooter>
);