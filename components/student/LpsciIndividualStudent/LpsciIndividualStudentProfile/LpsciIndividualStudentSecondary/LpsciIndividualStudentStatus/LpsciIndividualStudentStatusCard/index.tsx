// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { Block } from 'baseui/block';
import { LabelSmall, ParagraphMedium } from 'baseui/typography';

// ANCHOR Styles
import { BLOCK, CONTENT, LABEL } from './styles';

interface IProps {
  label: string;
  content: string;
}

export const LpsciIndividualStudentStatusCard = React.memo(({
  label, content,
}: IProps) => (
  <Block overrides={BLOCK}>
    <LabelSmall overrides={LABEL}>
      {label}
    </LabelSmall>
    <ParagraphMedium overrides={CONTENT}>
      {content}
    </ParagraphMedium>
  </Block>
));
