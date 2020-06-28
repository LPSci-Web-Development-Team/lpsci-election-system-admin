// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { Card } from 'baseui/card';

// ANCHOR Models
import { SignInForm } from '@scoped-models/sign-in/SignInForm';

// ANCHOR Component
import { LpsciSignInPage } from '@components/page/LpsciSignInPage';
import { LpsciSignInBody } from './LpsciSignInBody';

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
      <SignInForm.Provider>
        <LpsciSignInBody />
      </SignInForm.Provider>
    </Card>
  </LpsciSignInPage>
));
