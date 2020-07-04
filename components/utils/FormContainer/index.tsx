// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { styled } from 'baseui';
import { KIND } from 'baseui/toast';

// ANCHOR Component
import { IChildrenProps } from '@interfaces/Common';
import { Response } from '../Response';

// ANCHOR Styles
import { FORM } from './styles';

const LpsciForm = styled('form', FORM);

interface IProps extends IChildrenProps {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  error?: string;
}

export const FormContainer = ({
  children, onSubmit, error,
}: IProps) => (
  <LpsciForm onSubmit={onSubmit}>
    <Response message={error} kind={KIND.negative} />
    {children}
  </LpsciForm>
);
