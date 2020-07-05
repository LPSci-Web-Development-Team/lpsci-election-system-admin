// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { Block } from 'baseui/block';
import { LabelSmall } from 'baseui/typography';

// ANCHOR React Icon
import { Icon } from 'react-icons-kit';

// ANCHOR Styles
import { BLOCK } from './styles';

interface IProps {
  icon: any;
  label: string;
}

export const LpsciIndividualStudentIcon = React.memo(({
  icon, label,
}: IProps) => (
  <Block overrides={BLOCK}>
    <Icon icon={icon} size={16} />
    <LabelSmall>{label}</LabelSmall>
  </Block>
));
