// ANCHOR Base
import { StringColumn, NumericalColumn } from 'baseui/data-table';

// ANCHOR Interfaces
import { RowDataT } from '@interfaces/DataTable';

export const columns = [
  StringColumn({
    title: 'Learner Reference Number',
    mapDataToValue: (data: RowDataT) => data[0],
  }),
  StringColumn({
    title: 'Name',
    mapDataToValue: (data: RowDataT) => data[1],
  }),
  StringColumn({
    title: 'Email Address',
    mapDataToValue: (data: RowDataT) => data[2],
  }),
  StringColumn({
    title: 'Current Section',
    mapDataToValue: (data: RowDataT) => data[3],
  }),
  NumericalColumn({
    title: 'Current Grade Level',
    mapDataToValue: (data: RowDataT) => data[4],
  }),
];
