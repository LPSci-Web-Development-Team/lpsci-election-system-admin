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
import { IStudentResult } from '@api/results/student';
import { getStudentById } from '@api/student';

// ANCHOR Utils
import { ParsedUrlQuery } from 'querystring';

interface IProps {
  id: string;
  data: IStudentResult;
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

  const data = await getStudentById({ id });

  return {
    props: {
      data,
      id,
    },
  };
};

interface IMainProps {
  id: string;
  initialData: IStudentResult;
}

const LpsciCreateStudent = dynamic<IMainProps>(
  () => (
    import('@components/student/LpsciCreateStudent')
      .then((mod) => mod.LpsciCreateStudent)
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
  const title = `LPSci Admin | Update ${data.learnerReferenceNumber}`;
  return (
    <>
      <LpsciAppHead
        title={title}
        description="Sign in to your Las Piñas City National Science High School account"
      >
        <MetaOpenGraph
          url={`https://lpsci-admin.now.sh/student/update/${data.id}`}
          title={title}
          description="Sign in to your Las Piñas City National Science High School account"
          width="1366"
          height="768"
          image="/img/lpsci-logo.png"
        />
      </LpsciAppHead>
      <LpsciCreateStudent id={id} initialData={data} />
    </>
  );
};
