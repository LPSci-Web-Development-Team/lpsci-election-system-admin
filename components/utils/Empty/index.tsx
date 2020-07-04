// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { LabelMedium } from 'baseui/typography';
import { Block, Responsive, JustifyContent } from 'baseui/block';

// ANCHOR Styles
import { BLOCK } from './styles';

interface IProps {
  label: string;
  align?: Responsive<JustifyContent>;
}

export const Empty = React.memo(({
  label, align = 'flex-start',
}: IProps) => (
  <Block
    overrides={BLOCK}
    justifyContent={align}
  >
    <LabelMedium>{`There are no ${label}.`}</LabelMedium>
  </Block>
));
