// ANCHOR React
import * as React from 'react';

// ANCHOR Next
import { useRouter } from 'next/router';

// ANCHOR Base
import { RowActionT, BatchActionT } from 'baseui/data-table';
import { withStyle } from 'baseui';

// ANCHOR React Icons
import { Icon } from 'react-icons-kit';
import { ic_delete } from 'react-icons-kit/md/ic_delete';
import { ic_remove_red_eye } from 'react-icons-kit/md/ic_remove_red_eye';

// ANCHOR Constants
import { columns } from '@constants/candidate';

// ANCHOR Models
import { CandidatesData } from '@scoped-models/candidate/CandidatesData';

// ANCHOR Interfaces
import { IRow } from '@interfaces/DataTable';

// ANCHOR Component
import { DataTable } from '@components/utils/DataTable';
import { Skeleton } from '@components/utils/Skeleton';

// ANCHOR API
import { deleteCandidateById } from '@api/candidate';

// ANCHOR Hooks
import { useAuthToken } from '@firebase/hooks/useAuthToken';

// ANCHOR Constants
import { POSITION } from '@constants/forms/candidate';

// ANCHOR Styles
import { SKELETON } from './styles';

const DataTableSkeleton = withStyle(Skeleton, SKELETON);

const Delete: React.FC = () => <Icon icon={ic_delete} />;
const Show: React.FC = () => <Icon icon={ic_remove_red_eye} />;

export const LpsciViewCandidateDataTable = React.memo(() => {
  const router = useRouter();

  const [data, mutate] = CandidatesData.useSelectors((state) => [
    state.data, state.mutate,
  ]);

  const { data: token } = useAuthToken();

  const rowActions: RowActionT[] = React.useMemo(() => ([
    {
      label: 'Candidates',
      onClick: ({ row }) => router.push(`/candidate/view/${row.id}`),
      renderIcon: Show,
    },
    {
      label: 'Delete',
      onClick: async ({ row }) => {
        if (token) {
          await deleteCandidateById({
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
            await deleteCandidateById({
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
    data: [
      `${r.student.user.lastName}, ${r.student.user.firstName}`,
      r.party?.name ?? 'N/A',
      POSITION[r.position],
      r.state,
      r.voteCount,
    ],
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
