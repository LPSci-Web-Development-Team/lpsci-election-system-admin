// ANCHOR React
import * as React from 'react';

// ANCHOR Models
import { SidebarSection } from '@lpsci/scoped-models/sidebar-sections/SidebarSections';
import { SignInFormInput } from '@lpsci/scoped-models/sign-in/SignInFormInput';
import { VoteModal } from '@lpsci/scoped-models/vote-modal/VoteModal';
import { ForgotSearch } from '@lpsci/scoped-models/forgot-search/ForgotSearch';
import { ResetModal } from '@lpsci/scoped-models/reset-modal/ResetModal';

export const makeProviders = () => [
  /*
  ANCHOR: Provider for the SidebarSection
  NOTE: Used for providing the list of sections in the sidebar
  */
  <SidebarSection.Provider key="SidebarSection" />,
  /*
  ANCHOR: Provider for the SignInFormInput
  NOTE: Used for handling sign in form input
  */
  <SignInFormInput.Provider key="SignInFormInput" />,
  /*
  ANCHOR: Provider for the VoteModal
  NOTE: Used for toggling modal for voter's vote
  */
  <VoteModal.Provider key="VoteModal" />,
  /*
  ANCHOR: Provider for the ForgotSearch
  NOTE: Used for search users in the forgot page
  */
  <ForgotSearch.Provider key="ForgotSearch" />,
  /*
  ANCHOR: Provider for the ResetModal
  NOTE: Used for toggling modal for resetting passwords
  */
  <ResetModal.Provider key="ResetModal" />,
];
