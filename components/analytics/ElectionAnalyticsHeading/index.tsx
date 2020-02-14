// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { H1 } from 'baseui/typography';

// ANCHOR Styles
import { HEADING } from './styles';

export const ElectionAnalyticsHeading = React.memo(() => (
  <H1 overrides={HEADING}>
    Elections Analytics
  </H1>
));