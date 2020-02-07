import * as React from 'react';
import { useOnUnmount } from './useOnUnmount';

type StateSupplier<T> = T | (() => T);

type StateTuple<T> = [T, React.Dispatch<React.SetStateAction<T>>];

export function useDebouncedState<T>(initialState: StateSupplier<T>, timeout = 150): StateTuple<T> {
  const [state, setState] = React.useState<T>(initialState);

  const timer = React.useRef<number | undefined>();

  useOnUnmount(() => {
    if (timer.current) {
      window.clearTimeout(timer.current);
    }
  });

  const set = React.useCallback<React.Dispatch<React.SetStateAction<T>>>((value) => {
    if (timer.current) {
      window.clearTimeout(timer.current);
    }

    timer.current = window.setTimeout(() => {
      setState(value);

      timer.current = undefined;
    }, timeout);
  }, [timeout]);

  return [state, set];
}
