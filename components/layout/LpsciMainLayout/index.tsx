// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { Block } from 'baseui/block';

// ANCHOR Types
import { IChildrenProps } from '@interfaces/Common';

// ANCHOR Styles
import { BLOCK } from './styles';

/**
 * Base component of all pages
 *
 * Used for layout definition
 */
export const LpsciMainLayout = (
  { children }: IChildrenProps,
) => (
  <Block overrides={BLOCK}>
    { children }
  </Block>
);
