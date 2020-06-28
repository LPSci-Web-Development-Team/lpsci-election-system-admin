// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { StyledBody } from 'baseui/card';
import { ParagraphMedium } from 'baseui/typography';

export const LpsciSignInContent = React.memo(() => (
  <StyledBody>
    <ParagraphMedium>
      Proin ut dui sed metus pharetra hend rerit vel non
      mi. Nulla ornare faucibus ex, non facilisis nisl.
      Proin ut dui sed metus pharetra hend rerit vel non
      mi. Nulla ornare faucibus ex, non facilisis nisl.
    </ParagraphMedium>
  </StyledBody>
));
