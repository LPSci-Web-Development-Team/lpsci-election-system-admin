import * as React from 'react';

interface IProps {
  elements: Array<React.FunctionComponentElement<any>>;
  children: React.ReactNode;
}

export function Compose({ elements, children }: IProps) {
  return (
    <>
      {elements.reduceRight((acc, el) => React.cloneElement(el, {}, acc), children)}
    </>
  );
}
