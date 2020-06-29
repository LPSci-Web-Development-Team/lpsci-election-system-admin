// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { Card } from 'baseui/card';

// ANCHOR Models
import { SignInForm } from '@scoped-models/sign-in/SignInForm';

// ANCHOR Constants
import { LOGO_TEXT, LOGO_SOURCE } from '@constants/logo';

// ANCHOR Component
import { LpsciSignInPage } from '@components/page/LpsciSignInPage';
import { LpsciSignInBody } from './LpsciSignInBody';

// ANCHOR Styles
import { CARD } from './styles';

export const LpsciSignIn = React.memo(() => (
  <LpsciSignInPage>
    <Card
      title={LOGO_TEXT}
      headerImage={LOGO_SOURCE}
      overrides={CARD}
    >
      <SignInForm.Provider>
        <LpsciSignInBody />
      </SignInForm.Provider>
    </Card>
  </LpsciSignInPage>
));
