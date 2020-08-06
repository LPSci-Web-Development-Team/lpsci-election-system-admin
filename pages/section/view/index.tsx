// ANCHOR React
import React from 'react';

// ANCHOR Next
import dynamic from 'next/dynamic';

// ANCHOR Components
import { MetaOpenGraph } from '@components/head/MetaOpenGraph';
import { LpsciAppHead } from '@components/head/LpsciAppHead';
import { Loader } from '@components/utils/Loader';

const LpsciViewSection = dynamic<any>(
  () => (
    import('@components/section/LpsciViewSection')
      .then((mod) => mod.LpsciViewSection)
  ),
  {
    loading: () => <Loader />,
  },
);

// eslint-disable-next-line import/no-default-export
export default React.memo(() => (
  <>
    <LpsciAppHead
      title="LPSci Admin | View Section"
      description="Sign in to your Las Piñas City National Science High School account"
    >
      <MetaOpenGraph
        url="https://lpsci-admin.now.sh/section/view"
        title="LPSci Admin | View Section"
        description="Sign in to your Las Piñas City National Science High School account"
        width="1366"
        height="768"
        image="/img/lpsci-logo.png"
      />
    </LpsciAppHead>
    <LpsciViewSection />
  </>
));
