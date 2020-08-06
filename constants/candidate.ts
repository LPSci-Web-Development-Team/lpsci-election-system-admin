// ANCHOR Base
import { StringColumn, NumericalColumn } from 'baseui/data-table';

// ANCHOR Interfaces
import { RowDataT } from '@interfaces/DataTable';

export const columns = [
  StringColumn({
    title: 'Name',
    mapDataToValue: (data: RowDataT) => data[0],
  }),
  StringColumn({
    title: 'Party',
    mapDataToValue: (data: RowDataT) => data[1],
  }),
  StringColumn({
    title: 'Position',
    mapDataToValue: (data: RowDataT) => data[2],
  }),
  StringColumn({
    title: 'State',
    mapDataToValue: (data: RowDataT) => data[3],
  }),
  NumericalColumn({
    title: 'Vote Count',
    mapDataToValue: (data: RowDataT) => data[4],
  }),
];
