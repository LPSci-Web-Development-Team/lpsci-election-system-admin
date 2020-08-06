// ANCHOR React
import React from 'react';

// ANCHOR Base
import { Block } from 'baseui/block';
import { LabelSmall } from 'baseui/typography';

// ANCHOR Styles
import { BLOCK, TITLE } from './styles';

interface IProps {
  title: string;
}

export const TabTitle = React.memo(({ title }: IProps) => (
  <Block overrides={BLOCK}>
    <LabelSmall overrides={TITLE}>{title}</LabelSmall>
  </Block>
));
