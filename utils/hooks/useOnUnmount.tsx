
// ANCHOR Utils
import { Action } from '../Function';
import { useIsomorphicEffect } from './useIsomorphicEffect';

/**
 * Access to the unmount lifecycle
 */
export function useOnUnmount(callback: Action) {
  useIsomorphicEffect(() => () => {
    callback();
  }, []);
}
