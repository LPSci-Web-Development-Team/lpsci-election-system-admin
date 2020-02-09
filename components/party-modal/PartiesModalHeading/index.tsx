// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { ModalHeader } from 'baseui/modal';

interface IModalHeadingProps {
  text: string;
}

export const PartiesModalHeading = React.memo(({ text }: IModalHeadingProps) => (
  <ModalHeader>{text}</ModalHeader>
));