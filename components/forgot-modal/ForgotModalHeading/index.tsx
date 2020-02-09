// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { ModalHeader } from 'baseui/modal';

export const ForgotModalHeading = React.memo(() => (
  <ModalHeader>Are you sure?</ModalHeader>
));
