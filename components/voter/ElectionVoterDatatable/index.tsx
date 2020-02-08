// ANCHOR React
import React from 'react';

// ANCHOR Base
import { Block } from 'baseui/block';
import { Show } from 'baseui/icon';
import {
  Unstable_StatefulDataTable as DataTable,
  RowActionT,
} from 'baseui/data-table';

// ANCHOR UI Models
import { VOTER_COLUMNS } from 'models/ui-models/voter-datatable/columns';
import { VOTER_ROW } from 'models/ui-models/voter-datatable/rows';

export const ElectionVoterDatatable = React.memo(() => {
  const rowActions: RowActionT[] = [{
    label: 'View',
    onClick: ({ row }) => {
      console.log('ROW', row.data.status);
    },
    renderIcon: Show,
  }];

  return (
    <Block overrides={{
      Block: {
        style: {
          height: '450px',
        },
      },
    }}
    >
      <DataTable
        rowActions={rowActions}
        columns={VOTER_COLUMNS}
        rows={VOTER_ROW}
        emptyMessage="Oops, no users or voters matches your call."
      />
    </Block>
  );
});
