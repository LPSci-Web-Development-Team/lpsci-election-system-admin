// ANCHOR React
import * as React from 'react';

// ANCHOR Models
// TODO Remove after connecting sign in page
// eslint-disable-next-line import/no-unresolved
import { SignInFormInput } from '@lpsci/scoped-models/sign-in/SignInFormInput';
import { SignUpFormInput } from '@lpsci/scoped-models/sign-up/SignUpFormInput';
import { VotingTab } from 'scoped-models/voting/VotingTab';
import { CandidateCard } from 'scoped-models/candidate-card/CandidateCard';
import { ConfirmationModal } from 'scoped-models/review-modal/ConfirmationModal';

export const makeProviders = () => [
  /*
  ANCHOR: Provider for the SignInForm
  NOTE: Used for providing the input fields a value
  */
  <SignInFormInput.Provider key="SignInFormInput" />,
  /*
  ANCHOR: Provider for the SignUpForm
  NOTE: Used for providing the input fields a value
  */
  <SignUpFormInput.Provider key="SignUpFormInput" />,
  /*
    ANCHOR: Provider for the VotingPages
    NOTE: Used for providing the values to voting tab
    */
  <VotingTab.Provider key="VotingTab" />,
  /*
    ANCHOR: Provider for the CandidateCard
    NOTE: Used for providing the card a toggle
    */
  <CandidateCard.Provider key="CandidateCard" />,
  /*
    ANCHOR: Provider for Review Modal
    NOTE: Used for toggling modal visibility
  */
  <ConfirmationModal.Provider key="ConfirmationModal" />,
];
