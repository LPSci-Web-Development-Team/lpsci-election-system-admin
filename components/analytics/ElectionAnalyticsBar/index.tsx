// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { Block } from 'baseui/block';

// ANCHOR loadble
import loadable from 'loadable-components';

// ANCHOR Scoped Models
import { FetchedData } from '@lpsci/scoped-models/fetched-data/FetchedData';

// ANCHOR Styles
import { EPosition } from 'models/interfaces/Candidate';
import { BLOCK } from './styles';

// ANCHOR Chart
const Chart = loadable(() => import('react-apexcharts'));

interface ISeries {
  name: string;
  data: number[];
}

interface IPositionCount {
  name: string;
  count?: number;
}

interface IResultPosition {
  id: string;
  name: string;
  position: IPositionCount[];
}


export const ElectionAnalyticsBar = React.memo(() => {
  const [fetchParty, fetchCandidate] = FetchedData.useSelectors((state) => [
    state.fetchParty, state.fetchCandidate,
  ]);

  // ANCHOR Bar Graph Options
  const [options] = React.useState<any>({
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
      categories: [],
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

  const [series, setSeries] = React.useState<ISeries[]>([]);

  const temporarySeries: ISeries[] = [];
  const resultPosition: IResultPosition[] = [];

  // ANCHOR Fetch and group candidates
  React.useEffect(() => {
    fetchParty.map((item) => (
      resultPosition.push({
        id: item.id,
        name: item.name,
        position: [],
      })
    ));
    resultPosition.map((item) => (
      fetchCandidate
        .filter((cand) => (
          cand.partyId === item.id
        ))
        .map((candidate) => (
          item.position.push({
            name: candidate.position,
            count: candidate.count,
          })
        ))
    ));
  }, [fetchCandidate, fetchParty, resultPosition]);

  // ANCHOR Set x axis categories
  React.useEffect(() => {
    Object.values(EPosition)
      .map((item) => (
        options.xaxis.categories.push(item)
      ));
  }, [options.xaxis.categories]);

  // ANCHOR Set colors for the bar
  React.useEffect(() => {
    options.colors.pop();
    fetchParty.map((item: any) => (
      options.colors.push(item.hexColor)
    ));
  }, [fetchParty, options.colors]);

  // ANCHOR Set datatable series
  React.useEffect(() => {
    resultPosition.map((item) => {
      const eachCount: any[] = [];
      item.position.map((p) => (eachCount.push(p.count)));
      return (
        temporarySeries.push({
          name: item.name,
          data: eachCount,
        })
      );
    });
    setSeries([...temporarySeries]);
  }, [resultPosition, temporarySeries]);

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
