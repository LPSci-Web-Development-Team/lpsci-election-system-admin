// ANCHOR React
import React from 'react';

// ANCHOR Next
import dynamic from 'next/dynamic';

// ANCHOR Components
import { MetaOpenGraph } from '@components/head/MetaOpenGraph';
import { LpsciAppHead } from '@components/head/LpsciAppHead';
import { Loader } from '@components/utils/Loader';

const LpsciSignInPage = dynamic<any>(
  () => (
    import('@components/sign-in/LpsciSignIn')
      .then((mod) => mod.LpsciSignIn)
  ),
  {
    loading: () => <Loader />,
  },
);

// eslint-disable-next-line import/no-default-export
export default React.memo(() => (
  <>
    <LpsciAppHead
      title="LPSci Admin | Sign-in"
      description="Sign in to your Las Piñas City National Science High School account"
    >
      <MetaOpenGraph
        url="https://admin.lpsci.edu.ph/sign-in"
        title="LPSci Admin | Sign-in"
        description="Sign in to your Las Piñas City National Science High School account"
        width="1366"
        height="768"
        image="/img/lpsci-logo.png"
      />
    </LpsciAppHead>
    <LpsciSignInPage />
  </>
));
