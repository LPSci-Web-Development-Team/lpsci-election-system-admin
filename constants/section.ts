// ANCHOR Base
import { StringColumn } from 'baseui/data-table';

// ANCHOR Interfaces
import { RowDataT } from '@interfaces/DataTable';

export const columns = [
  StringColumn({
    title: 'Name',
    mapDataToValue: (data: RowDataT) => data[0],
  }),
  StringColumn({
    title: 'Grade Level',
    mapDataToValue: (data: RowDataT) => data[1],
  }),
  StringColumn({
    title: 'Adviser',
    mapDataToValue: (data: RowDataT) => data[2],
  }),
];
