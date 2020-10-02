// ANCHOR React
import React from 'react';

// ANCHOR Base
import {
  Unstable_StatefulDataTable as BaseDataTable,
  BatchActionT,
  RowActionT,
} from 'baseui/data-table';
import { Block } from 'baseui/block';

// ANCHOR Interfaces
import { IRow } from '@interfaces/DataTable';

// ANCHOR Styles
import { BLOCK } from './styles';

interface IProps {
  columns: any[];
  rows: IRow[];
  batchActions?: BatchActionT[];
  rowActions?: RowActionT[];
}

export const DataTable = React.memo(({
  columns,
  rows,
  batchActions,
  rowActions,
}: IProps) => (
  <Block overrides={BLOCK}>
    <BaseDataTable
      batchActions={batchActions}
      rowActions={rowActions}
      columns={columns}
      rows={rows}
    />
  </Block>
));
