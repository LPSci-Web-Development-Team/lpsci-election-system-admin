// ANCHOR React
import React from 'react';

// ANCHOR Types
import { IChildrenProps } from '@interfaces/Common';

// ANCHOR Components
import { LpsciSignInLayout } from '@components/layout/LpsciSignInLayout';
import { LpsciSignInContent } from '@components/content/LpsciSignInContent';

export const LpsciSignInPage = (
  { children }: IChildrenProps,
) => {
  React.useEffect(() => {
    if (window.localStorage.getItem('theme') === null) {
      window.localStorage.setItem('theme', 'light');
    }
  }, []);

  return (
    <LpsciSignInLayout>
      <LpsciSignInContent>
        {children}
      </LpsciSignInContent>
    </LpsciSignInLayout>
  );
};
