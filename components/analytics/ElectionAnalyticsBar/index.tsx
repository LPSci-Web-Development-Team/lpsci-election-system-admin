// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { Block } from 'baseui/block';

// ANCHOR loadble
import loadable from 'loadable-components';

// ANCHOR Scoped Models
import { FetchedData } from '@lpsci/scoped-models/fetched-data/FetchedData';

// ANCHOR Models
import { IParty } from 'models/interfaces/Party';

// ANCHOR Utils
import { GET } from '@lpsci/utils/axios/methods';

// ANCHOR Styles
import { BLOCK } from './styles';

// ANCHOR Chart
const Chart = loadable(() => import('react-apexcharts'));

export const ElectionAnalyticsBar = React.memo(() => {
  const [fetchParty, setFetchParty] = FetchedData.useSelector((state) => [
    state.fetchParty, state.setFetchParty,
  ]);

  // ANCHOR Fetch all parties
  React.useEffect(() => {
    const fetchedParties: IParty[] = [];
    // TODO Fix this on production
    GET('/api/parties')
      .then((response) => {
        response.data.forEach((item: any) => {
          fetchedParties.push({
            id: item.id,
            name: item.name,
            color: item.hexColor,
          });
          setFetchParty([...fetchedParties]);
        });
      });
  }, [setFetchParty]);

  const [options] = React.useState({
    chart: {
      type: 'bar',
      height: 350,
      stacked: true,
      toolbar: {
        show: true,
      },
      zoom: {
        enabled: true,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
      },
    },
    xaxis: {
      type: 'string',
      categories: [
        'President',
        'Vice President',
        'Secretary',
        'Treasurer',
        'Auditor',
        'PIO',
        'Peace Officer',
        'Level Rep. (8)',
        'Level Rep. (9)',
        'Level Rep. (10)',
        'Level Rep. (11)',
        'Level Rep. (12)',
      ],
    },
    legend: {
      position: 'right',
      offsetY: 40,
    },
    fill: {
      opacity: 1,
    },
    colors: [''],
  });

  const [series, setSeries] = React.useState<{ name: string; data: number[] }[]>([]);

  const temporarySeries: { name: string; data: number[] }[] = [];
  React.useEffect(() => {
    fetchParty.map((item) => (
      temporarySeries.push({
        name: item.name,
        data: [44, 55, 41, 67, 22, 43, 44, 55, 41, 67, 22, 43],
      })
    ));
    setSeries([...temporarySeries]);
  }, [fetchParty, temporarySeries]);

  React.useEffect(() => {
    options.colors.pop();
    fetchParty.map((item: any) => (
      options.colors.push(item.color)
    ));
  }, [fetchParty, options.colors]);

  return (
    <Block overrides={BLOCK}>
      <Chart
        options={options}
        series={series}
        type="bar"
        width="95%"
      />
    </Block>
  );
});
