// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { ModalFooter } from 'baseui/modal';

// ANCHOR Components
import { VoterModalCloseButton } from '../VoterModalCloseButton';

export const VoterModalFooter = React.memo(() => (
  <ModalFooter>
    <VoterModalCloseButton />
  </ModalFooter>
));
