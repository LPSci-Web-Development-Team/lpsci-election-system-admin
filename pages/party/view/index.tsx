// ANCHOR React
import React from 'react';

// ANCHOR Next
import dynamic from 'next/dynamic';

// ANCHOR Components
import { MetaOpenGraph } from '@components/head/MetaOpenGraph';
import { LpsciAppHead } from '@components/head/LpsciAppHead';
import { Loader } from '@components/utils/Loader';

const LpsciViewParty = dynamic<any>(
  () => (
    import('@components/party/LpsciViewParty')
      .then((mod) => mod.LpsciViewParty)
  ),
  {
    loading: () => <Loader />,
  },
);

// eslint-disable-next-line import/no-default-export
export default React.memo(() => (
  <>
    <LpsciAppHead
      title="LPSci Admin | View Party"
      description="Sign in to your Las Piñas City National Science High School account"
    >
      <MetaOpenGraph
        url="https://lpsci-admin.now.sh/party/view"
        title="LPSci Admin | View Party"
        description="Sign in to your Las Piñas City National Science High School account"
        width="1366"
        height="768"
        image="/img/lpsci-logo.png"
      />
    </LpsciAppHead>
    <LpsciViewParty />
  </>
));
