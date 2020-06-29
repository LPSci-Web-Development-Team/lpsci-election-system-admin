// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { PLACEMENT, StatefulPopover } from 'baseui/popover';

// ANCHOR Hooks
import { useConstant } from '@lpsci/hooks';

// ANCHOR Components
import { IChildrenProps } from '@interfaces/Common';
import { LpsciNavBarPopoverContent } from './LpsciNavBarPopoverContent';

export const LpsciNavBarPopoverContainer = (
  { children }: IChildrenProps,
) => {
  const content = useConstant(() => <LpsciNavBarPopoverContent />);

  return (
    <StatefulPopover
      dismissOnEsc
      dismissOnClickOutside
      accessibilityType="menu"
      placement={PLACEMENT.bottomRight}
      content={content}
    >
      {children}
    </StatefulPopover>
  );
};
