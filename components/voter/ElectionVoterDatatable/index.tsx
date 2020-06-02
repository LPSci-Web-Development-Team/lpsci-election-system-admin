// ANCHOR React
import React from 'react';

// ANCHOR Base
import { Block } from 'baseui/block';
import { Show } from 'baseui/icon';
import { Unstable_StatefulDataTable as DataTable, RowActionT } from 'baseui/data-table';

// ANCHOR UI Models
import { VOTER_COLUMNS } from 'models/ui-models/voter-datatable/columns';
import { IRow } from 'models/interfaces/VoterDataTable';

// ANCHOR Scoped Models
import { VoteModal } from '@lpsci/scoped-models/vote-modal/VoteModal';
import { FetchedData } from '@lpsci/scoped-models/fetched-data/FetchedData';

// ANCHOR Utils
import { GET } from '@lpsci/utils/axios/methods';

export const ElectionVoterDatatable = React.memo(() => {
  // ANCHOR Voter Modal Model
  const [setModal, setVoterId] = VoteModal.useSelectors((state) => [
    state.setModal, state.setVoterId,
  ]);

  const [fetchVoter, setFetchVoter] = FetchedData.useSelectors((state) => [
    state.fetchVoter, state.setFetchVoter,
  ]);

  const rowActions: RowActionT[] = [{
    label: 'View',
    onClick: ({ row }) => {
      // eslint-disable-next-line no-unused-expressions
      setModal(true);
      setVoterId(row.id);
    },
    renderIcon: Show,
  }];

  // ANCHOR Fetch all voters
  React.useEffect(() => {
    const fetchedVoter: IRow[] = [];
    // TODO Fix this on production
    GET('/api/voters')
      .then((response) => {
        response.data.forEach(async (item: any) => {
          const section = GET(`/api/sections/${item.sectionId}`)
            .then((res) => ({
              name: res.data.name,
              gradeLevel: res.data.gradeLevel,
            }));
          fetchedVoter.push({
            id: item.id,
            data: {
              firstName: item.firstName,
              lastName: item.lastName,
              lrn: item.lrn,
              section: (await section).name,
              gradeLevel: parseInt((await section).gradeLevel, 10),
            },
          });
          setFetchVoter([...fetchedVoter]);
        });
      });
  }, [setFetchVoter]);

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
        rows={fetchVoter}
        emptyMessage="Oops, no users or voters matches your call."
      />
    </Block>
  );
});
