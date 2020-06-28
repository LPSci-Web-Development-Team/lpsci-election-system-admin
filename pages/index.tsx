// ANCHOR React
import React from 'react';

// ANCHOR Next
import dynamic from 'next/dynamic';

// ANCHOR Components
import { MetaOpenGraph } from '@components/head/MetaOpenGraph';
import { LpsciAppHead } from '@components/head/LpsciAppHead';
import { Loader } from '@components/utils/Loader';

const LpsciHomePage = dynamic<any>(
  () => (
    import('@components/home/LpsciHome')
      .then((mod) => mod.LpsciHome)
  ),
  {
    loading: () => <Loader />,
  },
);

// eslint-disable-next-line import/no-default-export
export default React.memo(() => (
  <>
    <LpsciAppHead
      title="LPSci Admin | Home"
      description="Sign in to your Las Piñas City National Science High School account"
    >
      <MetaOpenGraph
        url="https://admin.lpsci.edu.ph/home"
        title="LPSci Admin | Home"
        description="Sign in to your Las Piñas City National Science High School account"
        width="1366"
        height="768"
        image="public/img/lpsci-logo.png"
      />
    </LpsciAppHead>
    <LpsciHomePage />
  </>
));
