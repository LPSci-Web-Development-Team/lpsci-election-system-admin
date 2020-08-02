// ANCHOR React
import * as React from 'react';

// ANCHOR Models
import { CandidateData } from '@scoped-models/candidate/CandidateData';

// ANCHOR Results
import { ICandidateResult } from '@api/results/candidate';

// ANCHOR Component
import { LpsciMainPage } from '@components/page/LpsciMainPage';
import { LpsciIndividualCandidateProfile } from './LpsciIndividualCandidateProfile';

interface IProps {
  id: string;
  initialData: ICandidateResult;
}

export const LpsciIndividualCandidate = React.memo(({
  id, initialData,
}: IProps) => (
  <LpsciMainPage>
    <CandidateData.Provider data={initialData} id={id}>
      <LpsciIndividualCandidateProfile />
    </CandidateData.Provider>
  </LpsciMainPage>
));
