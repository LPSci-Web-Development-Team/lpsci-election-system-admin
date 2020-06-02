// ANCHOR React
import * as React from 'react';

// ANCHOR Utils
import { Supplier } from '../Function';

interface IValue<T> {
  value: T;
}

export function useConstant<T>(fn: Supplier<T>): T {
  const ref = React.useRef<IValue<T>>();

  if (!ref.current) {
    ref.current = {
      value: fn(),
    };
  }

  return ref.current.value;
}
