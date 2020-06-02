// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { ModalFooter } from 'baseui/modal';

// ANCHOR Components
import { PartiesModalCancelButton } from '../PartiesModalCancelButton';
import { PartiesModalProceedButton } from '../PartiesModalProceedButton';

export const PartiesModalFooter = () => (
  <ModalFooter>
    <PartiesModalCancelButton />
    <PartiesModalProceedButton />
  </ModalFooter>
);
