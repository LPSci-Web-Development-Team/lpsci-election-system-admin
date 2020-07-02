// ANCHOR Base
import { StringColumn } from 'baseui/data-table';

// ANCHOR Interfaces
import { RowDataT } from '@interfaces/DataTable';

export const columns = [
  StringColumn({
    title: 'Start Year',
    mapDataToValue: (data: RowDataT) => data[0],
  }),
  StringColumn({
    title: 'End Year',
    mapDataToValue: (data: RowDataT) => data[1],
  }),
];
