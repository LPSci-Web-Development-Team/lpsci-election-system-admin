// ANCHOR React
import * as React from 'react';

// ANCHOR Models
import { SidebarSection } from '@lpsci/scoped-models/sidebar-sections/SidebarSections';
import { SignInFormInput } from '@lpsci/scoped-models/sign-in/SignInFormInput';

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
];
