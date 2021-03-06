// ANCHOR React
import React from 'react';

// ANCHOR Types
import { IChildrenProps } from '@interfaces/Common';

interface IProps extends IChildrenProps {
  elements: Array<React.FunctionComponentElement<any>>;
}

export function Compose({ elements, children }: IProps) {
  return (
    <>
      {elements.reduceRight((acc, el) => React.cloneElement(el, {}, acc), children)}
    </>
  );
}
