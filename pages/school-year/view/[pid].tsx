// ANCHOR React
import React from 'react';

// ANCHOR Next
import dynamic from 'next/dynamic';
import { GetServerSideProps } from 'next';

// ANCHOR Components
import { MetaOpenGraph } from '@components/head/MetaOpenGraph';
import { LpsciAppHead } from '@components/head/LpsciAppHead';
import { Loader } from '@components/utils/Loader';

// ANCHOR API
import { ISchoolYearResult } from '@api/results/school-year';
import { getSchoolYearById } from '@api/school-year';

// ANCHOR Utils
import { ParsedUrlQuery } from 'querystring';

interface IProps {
  id: string;
  data: ISchoolYearResult;
}
interface IParams extends ParsedUrlQuery {
  pid: string;
}

export const getServerSideProps: GetServerSideProps<IProps, IParams> = async (context) => {
  if (!context.params) {
    throw new Error('Missing pid');
  }

  const id = context.params.pid;

  const data = await getSchoolYearById({ id });

  return {
    props: {
      data,
      id,
    },
  };
};

interface IMainProps {
  id: string;
  initialData: ISchoolYearResult;
}

const LpsciIndividualSchoolYear = dynamic<IMainProps>(
  () => (
    import('@components/school-year/LpsciIndividualSchoolYear')
      .then((mod) => mod.LpsciIndividualSchoolYear)
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
  const title = `LPSci Admin | ${data.year}`;
  return (
    <>
      <LpsciAppHead
        title={title}
        description="Sign in to your Las Piñas City National Science High School account"
      >
        <MetaOpenGraph
          url={`https://lpsci-admin.now.sh/school-year/view/${data.id}`}
          title={title}
          description="Sign in to your Las Piñas City National Science High School account"
          width="1366"
          height="768"
          image="/img/lpsci-logo.png"
        />
      </LpsciAppHead>
      <LpsciIndividualSchoolYear id={id} initialData={data} />
    </>
  );
};
