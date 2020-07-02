// ANCHOR React
import * as React from 'react';

// ANCHOR Constants
import { columns } from '@constants/school-year';

// ANCHOR Models
import { SchoolYearData } from '@scoped-models/school-year/SchoolYearData';

// ANCHOR Interfaces
import { IRow } from '@interfaces/DataTable';

// ANCHOR Component
import { DataTable } from '@components/utils/DataTable';

export const LpsciViewSchoolYearDataTable = React.memo(() => {
  const data = SchoolYearData.useSelector((state) => state.data);

  if (!data) {
    return null;
  }

  const rows: IRow[] = data.map((r) => ({
    id: r.id,
    data: r.year.split('-'),
  }));

  return (
    <DataTable
      columns={columns}
      rows={rows}
    />
  );
});
