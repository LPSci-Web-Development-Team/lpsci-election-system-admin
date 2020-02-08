// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { Block } from 'baseui/block';

// ANCHOR Styles
import { BLOCK, COLUMN } from './styles';

interface IElectionBaseProps {
  children?: React.ReactNode;
}

/**
 * Base component of all pages
 *
 * Used for layout definition
 */
export const ElectionLayout = ({ children }: IElectionBaseProps) => (
  <Block gridTemplateColumns={COLUMN} overrides={BLOCK}>
    {children}
  </Block>
);
