// ANCHOR React
import React from 'react';

// ANCHOR Next
import dynamic from 'next/dynamic';
import { GetStaticPaths, GetStaticProps } from 'next';

// ANCHOR Components
import { MetaOpenGraph } from '@components/head/MetaOpenGraph';
import { LpsciAppHead } from '@components/head/LpsciAppHead';
import { Loader } from '@components/utils/Loader';

// ANCHOR API
import { ICandidateResult } from '@api/results/candidate';
import { getCandidateById } from '@api/candidate';

// ANCHOR Utils
import { ParsedUrlQuery } from 'querystring';

interface IProps {
  id: string;
  data: ICandidateResult;
}
interface IParams extends ParsedUrlQuery {
  pid: string;
}

export const getStaticPaths: GetStaticPaths = async () => (
  Promise.resolve({
    paths: [],
    fallback: true,
  })
);

export const getStaticProps: GetStaticProps<IProps, IParams> = async (context) => {
  if (!context.params) {
    throw new Error('Missing pid');
  }

  const id = context.params.pid;

  const data = await getCandidateById({ id });

  return {
    props: {
      data,
      id,
    },
  };
};

interface IMainProps {
  id: string;
  initialData: ICandidateResult;
}

const LpsciIndividualCandidate = dynamic<IMainProps>(
  () => (
    import('@components/candidate/LpsciIndividualCandidate')
      .then((mod) => mod.LpsciIndividualCandidate)
  ),
  {
    loading: () => <Loader />,
  },
);

// eslint-disable-next-line import/no-default-export
export default ({ data, id }: IProps) => {
  // SSG may return with empty props.
  if (!data) {
    return <Loader />;
  }

  // Fetch provider data
  const title = `LPSci Admin | ${data.name} Candidate`;
  return (
    <>
      <LpsciAppHead
        title={title}
        description="Sign in to your Las Piñas City National Science High School account"
      >
        <MetaOpenGraph
          url={`https://lpsci-admin.now.sh/candidate/view/${data.id}`}
          title={title}
          description="Sign in to your Las Piñas City National Science High School account"
          width="1366"
          height="768"
          image="/img/lpsci-logo.png"
        />
      </LpsciAppHead>
      <LpsciIndividualCandidate id={id} initialData={data} />
    </>
  );
};
