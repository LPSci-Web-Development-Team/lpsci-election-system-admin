// ANCHOR React
import * as React from 'react';

// ANCHOR React Icons
import { Icon } from 'react-icons-kit';

// ANCHOR Base
import {
  Button, KIND, SIZE, SHAPE,
} from 'baseui/button';
import { LabelXSmall } from 'baseui/typography';

// ANCHOR LPSci Hooks
import { useConstantCallback } from '@lpsci/hooks';

// ANCHOR Interfaces
import { IMiniSidebar } from '@interfaces/Sidebar';

// ANCHOR Styles
import { BUTTON, TEXT } from './styles';

export const LpsciMiniSidebarLink = React.memo((
  { icon, label, key }: IMiniSidebar,
) => {
  const onClick = useConstantCallback(() => {
    console.log(key);
  });

  return (
    <Button
      kind={KIND.tertiary}
      size={SIZE.compact}
      shape={SHAPE.square}
      overrides={BUTTON}
      onClick={onClick}
    >
      <Icon icon={icon} size={20} />
      <LabelXSmall overrides={TEXT}>{label}</LabelXSmall>
    </Button>
  );
});
