import * as React from 'react';

interface IProps {
  elements: Array<React.FunctionComponentElement<any>>;
  children: React.ReactNode;
}

export const Compose = (
  { elements, children }: IProps,
) => <>{elements.reduceRight((acc, el) => React.cloneElement(el, {}, acc), children)}</>;
