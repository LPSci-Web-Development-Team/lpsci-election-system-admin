import * as React from 'react';
import { useIsomorphicEffect } from './useIsomorphicEffect';

export type PromiseWrapper = <T>(promise: Promise<T>) => Promise<T>;

export function usePromise(deps?: React.DependencyList): PromiseWrapper {
  const ref = React.useRef(false);

  useIsomorphicEffect(() => {
    ref.current = true;

    return () => {
      ref.current = false;
    };
  }, deps);

  const currentDeps: React.DependencyList = deps || [];

  return React.useCallback((promise: Promise<any>) => new Promise((resolve, reject) => {
    promise.then(
      (value) => ref.current && resolve(value),
      (error) => ref.current && reject(error),
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }), currentDeps);
}
