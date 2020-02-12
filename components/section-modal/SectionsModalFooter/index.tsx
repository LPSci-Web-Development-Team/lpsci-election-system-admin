// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { ModalFooter } from 'baseui/modal';

// ANCHOR Components
import { SectionsModalCancelButton } from '../SectionsModalCancelButton';
import { SectionsModalProceedButton } from '../SectionsModalProceedButton';

export const SectionsModalFooter = () => (
  <ModalFooter>
    <SectionsModalCancelButton />
    <SectionsModalProceedButton />
  </ModalFooter>
);
