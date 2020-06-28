// ANCHOR React
import * as React from 'react';

// ANCHOR Types
import { IChildrenProps } from '@interfaces/Common';

// ANCHOR Components
import { LpsciSignInLayout } from '@components/layout/LpsciSignInLayout';
import { LpsciSignInContent } from '@components/content/LpsciSignInContent';

export const LpsciSignInPage = (
  { children }: IChildrenProps,
) => (
  <LpsciSignInLayout>
    <LpsciSignInContent>
      {children}
    </LpsciSignInContent>
  </LpsciSignInLayout>
);
