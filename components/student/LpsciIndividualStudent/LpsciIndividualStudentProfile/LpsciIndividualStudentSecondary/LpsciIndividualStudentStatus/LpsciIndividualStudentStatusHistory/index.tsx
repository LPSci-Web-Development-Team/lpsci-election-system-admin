// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { Block } from 'baseui/block';
import { LabelMedium } from 'baseui/typography';

// ANCHOR Styles
import { BLOCK } from './styles';

export const LpsciIndividualStudentStatusHistory = React.memo(() => (
  <Block overrides={BLOCK}>
    <LabelMedium>Student&apos;s History</LabelMedium>
  </Block>
));
