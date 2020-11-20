// ANCHOR React
import React from 'react';

// ANCHOR Next
import dynamic from 'next/dynamic';

// ANCHOR Components
import { MetaOpenGraph } from '@components/head/MetaOpenGraph';
import { LpsciAppHead } from '@components/head/LpsciAppHead';
import { Loader } from '@components/utils/Loader';
import Router from 'next/router';

const LpsciSignUpPage = dynamic<any>(
  () => (
    import('@components/sign-up/LpsciSignUp')
      .then((mod) => mod.LpsciSignUp)
  ),
  {
    loading: () => <Loader />,
  },
);

const signUpAllowed = true;

// eslint-disable-next-line import/no-default-export
export default React.memo(() => {
  if (!signUpAllowed) {
    Router.push('/sign-in', '/sign-in')
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log(err);
      });
  }

  return (
    <>
      <LpsciAppHead
        title="LPSci Admin | Sign-up"
        description="Sign in to your Las Piñas City National Science High School account"
      >
        <MetaOpenGraph
          url="https://admin.lpsci.edu.ph/sign-up"
          title="LPSci Admin | Sign-up"
          description="Sign up for a Las Piñas City National Science High School account"
          width="1366"
          height="768"
          image="/img/lpsci-logo.png"
        />
      </LpsciAppHead>
      <LpsciSignUpPage />
    </>
  );
});
