// ANCHOR React
import React from 'react';

// ANCHOR Models
import { CandidatesData } from '@scoped-models/candidate/CandidatesData';

// ANCHOR Component
import { LpsciMainPage } from '@components/page/LpsciMainPage';
import { LpsciViewCandidateDataTable } from './LpsciViewCandidateDataTable';

export const LpsciViewCandidate = React.memo(() => (
  <LpsciMainPage title="View Candidates">
    <CandidatesData.Provider>
      <LpsciViewCandidateDataTable />
    </CandidatesData.Provider>
  </LpsciMainPage>
));
