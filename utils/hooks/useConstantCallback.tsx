import { useConstant } from './useConstant';

export type Callback = (...args: any[]) => any;

export function useConstantCallback<T extends Callback>(callback: T): T {
  return useConstant(() => callback);
}
