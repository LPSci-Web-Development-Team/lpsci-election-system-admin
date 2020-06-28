// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { Block, BlockOverrides } from 'baseui/block';

// ANCHOR Types
import { IChildrenProps } from '@interfaces/Common';

interface IProps extends IChildrenProps {
  overrides?: BlockOverrides;
}

export const Scrollbar = React.forwardRef<HTMLDivElement, IProps>(
  ({ children, overrides }: IProps, ref) => (
    <Block
      overflow="scrollY"
      position="relative"
      width="100%"
      height="100%"
      overrides={overrides}
      ref={ref}
    >
      {children}
    </Block>
  ),
);
