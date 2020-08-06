// ANCHOR React
import React from 'react';

// ANCHOR Next
import { useRouter } from 'next/router';

// ANCHOR Base
import { RowActionT } from 'baseui/data-table';
import { withStyle } from 'baseui';

// ANCHOR React Icons
import { Icon } from 'react-icons-kit';
import { ic_mode_edit } from 'react-icons-kit/md/ic_mode_edit';
import { ic_remove_red_eye } from 'react-icons-kit/md/ic_remove_red_eye';

// ANCHOR Constants
import { columns } from '@constants/student';

// ANCHOR Models
import { StudentsData } from '@scoped-models/student/StudentsData';

// ANCHOR Interfaces
import { IRow } from '@interfaces/DataTable';

// ANCHOR Component
import { DataTable } from '@components/utils/DataTable';
import { Skeleton } from '@components/utils/Skeleton';

// ANCHOR Styles
import { SKELETON } from './styles';

const DataTableSkeleton = withStyle(Skeleton, SKELETON);

const Edit: React.FC = () => <Icon icon={ic_mode_edit} />;
const Show: React.FC = () => <Icon icon={ic_remove_red_eye} />;

export const LpsciViewStudentDataTable = React.memo(() => {
  const router = useRouter();

  const data = StudentsData.useSelector((state) => state.data);

  const rowActions: RowActionT[] = React.useMemo(() => ([
    {
      label: 'Students',
      onClick: ({ row }) => router.push(`/student/view/${row.id}`),
      renderIcon: Show,
    },
    {
      label: 'Update',
      onClick: ({ row }) => router.push(`/student/update/${row.id}`),
      renderIcon: Edit,
    },
  ]), [router]);

  if (!data) {
    return <DataTableSkeleton />;
  }

  const rows: IRow[] = data.map((r) => ({
    id: r.id,
    data: [
      r.learnerReferenceNumber,
      `${r.user.lastName}, ${r.user.firstName}`,
      r.user.email,
      r.currentSection ?? 'N/A',
      r.currentGradeLevel ?? 'N/A',
    ],
  }));

  return (
    <DataTable
      columns={columns}
      rows={rows}
      rowActions={rowActions}
    />
  );
});
