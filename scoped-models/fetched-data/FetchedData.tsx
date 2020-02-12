// ANCHOR React
import * as React from 'react';

// ANCHOR Model
import createModel from '@lxsmnsyc/react-scoped-model';

// ANCHOR Interface
import { IParty } from 'models/interfaces/Party';
import { ICandidate } from 'models/interfaces/Candidate';
import { IRowData } from 'models/interfaces/VoterDataTable';
import { IClassroomSection } from 'models/interfaces/Section';

export const FetchedData = createModel(() => {
  const [fetchVoter, setFetchVoter] = React.useState<IRowData[]>([]);
  const [fetchParty, setFetchParty] = React.useState<IParty[]>([]);
  const [fetchCandidate, setFetchCandidate] = React.useState<ICandidate[]>([]);
  const [fetchSection, setFetchSection] = React.useState<IClassroomSection[]>([]);

  return {
    fetchVoter,
    setFetchVoter,
    fetchParty,
    setFetchParty,
    fetchCandidate,
    setFetchCandidate,
    fetchSection,
    setFetchSection,
  };
});
