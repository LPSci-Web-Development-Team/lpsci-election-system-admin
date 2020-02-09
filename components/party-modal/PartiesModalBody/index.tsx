// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { ModalBody } from 'baseui/modal';

interface IModalBodyProps {
  text: string;
}

export const PartiesModalBody = React.memo(({ text }: IModalBodyProps) => (
  <ModalBody>
    {text}
  </ModalBody>
));
