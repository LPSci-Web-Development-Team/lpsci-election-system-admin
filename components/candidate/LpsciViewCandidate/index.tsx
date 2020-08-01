// ANCHOR React
import * as React from 'react';

// ANCHOR Models
import { CandidateData } from '@scoped-models/candidate/CandidateData';

// ANCHOR Component
import { LpsciMainPage } from '@components/page/LpsciMainPage';
import { LpsciViewCandidateDataTable } from './LpsciViewCandidateDataTable';

export const LpsciViewCandidate = React.memo(() => (
  <LpsciMainPage title="View Candidates">
    <CandidateData.Provider>
      <LpsciViewCandidateDataTable />
    </CandidateData.Provider>
  </LpsciMainPage>
));
