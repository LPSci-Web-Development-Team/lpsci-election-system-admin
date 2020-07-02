// ANCHOR React
import React from 'react';

// ANCHOR Base
import { Alert } from 'baseui/icon';
import {
  Unstable_StatefulDataTable as BaseDataTable,
  BatchActionT,
  RowActionT,
} from 'baseui/data-table';
import { Block } from 'baseui/block';

// ANCHOR Interfaces
import { IRow, IBatchDelete, IDelete } from '@interfaces/DataTable';

// ANCHOR Styles
import { BLOCK } from './styles';

interface IProps {
  columns: any[];
  rows: IRow[];
  batchDelete?: (params: IBatchDelete) => any;
  individualDelete?: (param: IDelete) => any;
}

export const DataTable = React.memo(({
  columns, rows, batchDelete, individualDelete,
}: IProps) => {
  const batchActions: BatchActionT[] = [];

  const rowActions: RowActionT[] = [];

  React.useEffect(() => {
    if (batchDelete) {
      batchActions.push(
        {
          label: 'Remove',
          onClick: batchDelete,
          renderIcon: Alert,
        },
      );
    }

    if (individualDelete) {
      rowActions.push(
        {
          label: 'Remove',
          onClick: individualDelete,
          renderIcon: Alert,
        },
      );
    }
  }, [batchActions, batchDelete, individualDelete, rowActions]);

  return (
    <Block overrides={BLOCK}>
      <BaseDataTable
        batchActions={batchActions}
        rowActions={rowActions}
        columns={columns}
        rows={rows}
      />
    </Block>
  );
});
