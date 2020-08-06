// ANCHOR React
import React from 'react';

// ANCHOR Base
import { Block, BlockOverrides, Responsive } from 'baseui/block';

// ANCHOR Types
import { IChildrenProps } from '@interfaces/Common';

interface IProps extends IChildrenProps {
  overrides?: BlockOverrides;
  gridTemplateColumns?: Responsive<string>;
}

export const Scrollbar = React.forwardRef<HTMLDivElement, IProps>(({
  children, overrides, gridTemplateColumns,
}: IProps, ref) => (
  <Block
    overflow="scrollY"
    position="relative"
    width="100%"
    height="100%"
    overrides={overrides}
    gridTemplateColumns={gridTemplateColumns}
    ref={ref}
  >
    {children}
  </Block>
));
