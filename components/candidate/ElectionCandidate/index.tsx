// ANCHOR React
import * as React from 'react';

// ANCHOR Components
import { RemoveAllCandidatesModal } from '@lpsci/components/candidate-modal/RemoveAllCandidateModal';
import { AddCandidatesModal } from '@lpsci/components/candidate-modal/AddCandidateModal';
import { ElectionCandidateHeading } from '../ElectionCandidateHeading';
import { ElectionCandidateList } from '../ElectionCandidateList';
import { ElectionCandidateHeadButton } from '../ElectionCandidateHeadButton';

export const ElectionCandidate = React.memo(() => (
  <>
    <ElectionCandidateHeading />
    <ElectionCandidateHeadButton />
    <ElectionCandidateList />
    <AddCandidatesModal />
    <RemoveAllCandidatesModal />
  </>
));
