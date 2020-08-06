// ANCHOR React
import React from 'react';

// ANCHOR Base
import { Block } from 'baseui/block';
import { LabelSmall } from 'baseui/typography';

// ANCHOR React Icon
import { Icon } from 'react-icons-kit';

// ANCHOR Styles
import { BLOCK, ICON } from './styles';

interface IProps {
  icon: any;
  label: string;
}

export const LpsciIndividualStudentIcon = React.memo(({
  icon, label,
}: IProps) => (
  <Block overrides={BLOCK}>
    <Block overrides={ICON}>
      <Icon icon={icon} size={16} />
    </Block>
    <LabelSmall>{label}</LabelSmall>
  </Block>
));
