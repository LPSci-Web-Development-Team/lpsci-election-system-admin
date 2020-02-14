// ANCHOR React
import * as React from 'react';

// ANCHOR Components
import { ElectionAnalyticsHeading } from '../ElectionAnalyticsHeading';
import { ElectionTallyVotes } from '../ElectionTallyVotes';

export const ElectionAnalytics = React.memo(() => (
  <>
    <ElectionAnalyticsHeading />
    <ElectionTallyVotes />
  </>
));