// ANCHOR React
import React from 'react';

// ANCHOR Base
import { Card } from 'baseui/card';

// ANCHOR Models
import { SignUpForm } from '@scoped-models/sign-up/SignUpForm';

// ANCHOR Constants
import { LOGO_TEXT, LOGO_SOURCE } from '@constants/logo';

// ANCHOR Component
import { LpsciSignInPage } from '@components/page/LpsciSignInPage';
import { LpsciSignUpBody } from './LpsciSignUpBody';

// ANCHOR Styles
import { CARD } from './styles';

export const LpsciSignUp = React.memo(() => (
  <LpsciSignInPage>
    <Card
      title={LOGO_TEXT}
      headerImage={LOGO_SOURCE}
      overrides={CARD}
    >
      <SignUpForm.Provider>
        <LpsciSignUpBody />
      </SignUpForm.Provider>
    </Card>
  </LpsciSignInPage>
));
