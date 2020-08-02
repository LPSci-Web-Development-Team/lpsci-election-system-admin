// ANCHOR React
import * as React from 'react';

// ANCHOR Models
import { CreateCandidateForm } from '@scoped-models/candidate/CreateCandidateForm';

// ANCHOR Results
import { ICandidateResult } from '@api/results/candidate';

// ANCHOR Component
import { LpsciMainPage } from '@components/page/LpsciMainPage';
import { LpsciCreateCandidateForm } from './LpsciCreateCandidateForm';

interface IProps {
  id?: string;
  initialData?: ICandidateResult;
}

export const LpsciCreateCandidate = React.memo(({ id }: IProps) => (
  <LpsciMainPage title="Create a Candidate">
    <CreateCandidateForm.Provider id={id}>
      <LpsciCreateCandidateForm />
    </CreateCandidateForm.Provider>
  </LpsciMainPage>
));
