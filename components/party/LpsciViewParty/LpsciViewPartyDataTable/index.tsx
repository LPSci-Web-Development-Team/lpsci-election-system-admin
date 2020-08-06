// ANCHOR React
import React from 'react';

// ANCHOR Next
import { useRouter } from 'next/router';

// ANCHOR Base
import { RowActionT, BatchActionT } from 'baseui/data-table';
import { withStyle } from 'baseui';

// ANCHOR React Icons
import { Icon } from 'react-icons-kit';
import { ic_mode_edit } from 'react-icons-kit/md/ic_mode_edit';
import { ic_delete } from 'react-icons-kit/md/ic_delete';
import { ic_remove_red_eye } from 'react-icons-kit/md/ic_remove_red_eye';

// ANCHOR Constants
import { columns } from '@constants/party';

// ANCHOR Models
import { PartyData } from '@scoped-models/party/PartyData';

// ANCHOR Interfaces
import { IRow } from '@interfaces/DataTable';

// ANCHOR Component
import { DataTable } from '@components/utils/DataTable';
import { Skeleton } from '@components/utils/Skeleton';

// ANCHOR API
import { deletePartyById } from '@api/party';

// ANCHOR Hooks
import { useAuthToken } from '@firebase/hooks/useAuthToken';

// ANCHOR Styles
import { SKELETON } from './styles';

const DataTableSkeleton = withStyle(Skeleton, SKELETON);

const Edit: React.FC = () => <Icon icon={ic_mode_edit} />;
const Delete: React.FC = () => <Icon icon={ic_delete} />;
const Show: React.FC = () => <Icon icon={ic_remove_red_eye} />;

export const LpsciViewPartyDataTable = React.memo(() => {
  const router = useRouter();

  const [data, mutate] = PartyData.useSelectors((state) => [
    state.data, state.mutate,
  ]);

  const { data: token } = useAuthToken();

  const rowActions: RowActionT[] = React.useMemo(() => ([
    {
      label: 'Parties',
      onClick: ({ row }) => router.push(`/party/view/${row.id}`),
      renderIcon: Show,
    },
    {
      label: 'Update',
      onClick: ({ row }) => router.push(`/party/update/${row.id}`),
      renderIcon: Edit,
    },
    {
      label: 'Delete',
      onClick: async ({ row }) => {
        if (token) {
          await deletePartyById({
            id: row.id as string,
            token,
          });
          await mutate();
        }
      },
      renderIcon: Delete,
    },
  ]), [mutate, router, token]);

  const batchActions: BatchActionT[] = React.useMemo(() => ([
    {
      label: 'Delete',
      onClick: ({ selection, clearSelection }) => {
        if (token) {
          selection.map(async (row) => {
            await deletePartyById({
              id: row.id as string,
              token,
            });

            await mutate();
          });
        }
        clearSelection();
      },
    },
  ]), [mutate, token]);

  if (!data) {
    return <DataTableSkeleton />;
  }

  const rows: IRow[] = data.map((r) => ({
    id: r.id,
    data: [r.name, r.color],
  }));

  return (
    <DataTable
      columns={columns}
      rows={rows}
      rowActions={rowActions}
      batchActions={batchActions}
    />
  );
});
