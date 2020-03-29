// ANCHOR React
import * as React from 'react';

// ANCHOR Components
import { ElectionAnalyticsHeading } from '../ElectionAnalyticsHeading';
import { ElectionAnalyticsBar } from '../ElectionAnalyticsBar';

export const ElectionAnalytics = React.memo(() => (
  <>
    <ElectionAnalyticsHeading />
    <ElectionAnalyticsBar />
  </>
));
