import { BREAKPOINTS } from '@themes/breakpoints';
import { StyleObject } from 'styletron-react';

export const FORM: StyleObject = {
  width: '50%',

  [BREAKPOINTS.small]: {
    width: '100%',
  },
};
