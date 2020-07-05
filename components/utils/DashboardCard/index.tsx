// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { Block } from 'baseui/block';
import { LabelSmall, ParagraphMedium } from 'baseui/typography';

// ANCHOR Interface
import { IChildrenProps } from '@interfaces/Common';

// ANCHOR Styles
import { BLOCK, CONTENT, LABEL } from './styles';

interface IProps extends IChildrenProps {
  label: string;
}

export const DashboardCard = ({
  label, children,
}: IProps) => (
  <Block overrides={BLOCK}>
    <LabelSmall overrides={LABEL}>
      {label}
    </LabelSmall>
    {typeof children === 'string' ? (
      <ParagraphMedium overrides={CONTENT}>
        {children}
      </ParagraphMedium>
    ) : children}
  </Block>
);
