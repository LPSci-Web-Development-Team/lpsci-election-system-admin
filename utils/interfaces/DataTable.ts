import { RowT } from 'baseui/data-table';

export type RowDataT = (string | number | boolean)[];

export interface IRow {
  id: string;
  data: RowDataT;
}

export interface IBatchDelete {
  clearSelection: () => any;
  event: React.MouseEvent<HTMLButtonElement>;
  selection: RowT[];
}

export interface IDelete {
  event: React.MouseEvent<HTMLButtonElement>;
  row: RowT;
}
