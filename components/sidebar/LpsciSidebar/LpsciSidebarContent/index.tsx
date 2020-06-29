// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { Block } from 'baseui/block';

// ANCHOR Component
import { Scrollbar } from '@components/utils/Scrollbar';

// ANCHOR Styles
import { BLOCK } from './styles';

interface IProps {
  hideInitial?: boolean;
  usePanel?: boolean;
}

export const LpsciSidebarContent = React.memo((
  { hideInitial, usePanel }: IProps,
) => {
  console.log(hideInitial, usePanel);

  return (
    <Scrollbar>
      <Block overrides={BLOCK} />
    </Scrollbar>
  );
});
