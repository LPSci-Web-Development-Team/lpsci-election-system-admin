// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { ModalHeader, FocusOnce } from 'baseui/modal';

export const VoterModalHeading = React.memo(() => (
  <FocusOnce>
    <ModalHeader>Votes Casted.</ModalHeader>
  </FocusOnce>
));
