// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { ModalFooter } from 'baseui/modal';

// ANCHOR Components
import { CandidatesModalCancelButton } from '../CandidatesModalCancelButton';
import { CandidatesModalProceedButton } from '../CandidatesModalProceedButton';

export const CandidatesModalFooter = () => (
  <ModalFooter>
    <CandidatesModalCancelButton />
    <CandidatesModalProceedButton />
  </ModalFooter>
);
