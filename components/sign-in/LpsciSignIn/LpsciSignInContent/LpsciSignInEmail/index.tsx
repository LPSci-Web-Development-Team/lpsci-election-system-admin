// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import {
  Card,
  StyledBody,
} from 'baseui/card';
import { ParagraphMedium } from 'baseui/typography';

// ANCHOR Component
import { LpsciSignInPage } from '@components/page/LpsciSignInPage';
import { LpsciSignInAction } from './LpsciSignInAction';

// ANCHOR Styles
import { CARD } from './styles';

// ANCHOR Constants
import { TITLE, SRC } from './constants';

export const LpsciSignIn = React.memo(() => (
  <LpsciSignInPage>
    <Card
      title={TITLE}
      headerImage={SRC}
      overrides={CARD}
    >
      <StyledBody>
        <ParagraphMedium>
          Proin ut dui sed metus pharetra hend rerit vel non
          mi. Nulla ornare faucibus ex, non facilisis nisl.
          Proin ut dui sed metus pharetra hend rerit vel non
          mi. Nulla ornare faucibus ex, non facilisis nisl.
        </ParagraphMedium>
      </StyledBody>
      <LpsciSignInAction />
    </Card>
  </LpsciSignInPage>
));
