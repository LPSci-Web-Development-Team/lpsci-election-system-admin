// ANCHOR React
import * as React from 'react';

// ANCHOR Components
import { VoterModal } from '../../voter-modal/VoterModal';
import { ElectionVoterHeading } from '../ElectionVoterHeading';
import { ElectionVoterDatatable } from '../ElectionVoterDatatable';

export const ElectionVoter = React.memo(() => (
  <>
    <ElectionVoterHeading />
    <ElectionVoterDatatable />
    <VoterModal />
  </>
));
