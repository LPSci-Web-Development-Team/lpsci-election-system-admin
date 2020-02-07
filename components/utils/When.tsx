import * as React from 'react';
import { Supplier } from '../../utils/Function';

export interface IWhenProps {
  condition?: boolean;
  children: React.ReactNode | Supplier<React.ReactElement>;
}

/**
 * A component used for conditional rendering.
 *
 * If the condition is true, the children are rendered.
 */
export const When = ({ condition, children }: IWhenProps) => {
  if (condition) {
    if (typeof children === 'function') {
      return children();
    }

    return <>{children}</>;
  }

  return null;
};
