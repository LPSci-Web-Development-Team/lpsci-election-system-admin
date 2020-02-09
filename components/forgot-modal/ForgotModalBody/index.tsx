// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { ModalBody } from 'baseui/modal';

interface IForgotModalBodyProps {
  voter: string;
}

export const ForgotModalBody = ({ voter }: IForgotModalBodyProps) => (
  <ModalBody>
    If you proceed to reset the
    <b>{` ${voter}'s `}</b>
    password, it will be changed to
    &apos;
    <b>ilovelpsci</b>
    &apos;.
  </ModalBody>
);
