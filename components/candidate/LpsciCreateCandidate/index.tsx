// ANCHOR React
import * as React from 'react';

// ANCHOR Models
import { CreateCandidateForm } from '@scoped-models/candidate/CreateCandidateForm';

// ANCHOR Component
import { LpsciMainPage } from '@components/page/LpsciMainPage';
import { LpsciCreateCandidateForm } from './LpsciCreateCandidateForm';

export const LpsciCreateCandidate = React.memo(() => (
  <LpsciMainPage title="Create a Candidate">
    <CreateCandidateForm.Provider>
      <LpsciCreateCandidateForm />
    </CreateCandidateForm.Provider>
  </LpsciMainPage>
));
