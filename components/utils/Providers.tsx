// ANCHOR React
import * as React from 'react';

// ANCHOR Models
import { SidebarSection } from '@lpsci/scoped-models/sidebar-sections/SidebarSections';

export const makeProviders = () => [
  /*
  ANCHOR: Provider for the SidebarSection
  NOTE: Used for providing the list of sections in the sidebar
  */
  <SidebarSection.Provider key="SignInFormInput" />,
];
