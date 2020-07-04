// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { HeadingSmall } from 'baseui/typography';
import { Block } from 'baseui/block';

// ANCHOR Styles
import { BLOCK } from './styles';

interface IProps {
  label: string;
}

export const Empty = React.memo(({ label }: IProps) => (
  <Block overrides={BLOCK}>
    <HeadingSmall>{label}</HeadingSmall>
  </Block>
));
