// ANCHOR React
import React from 'react';

// ANCHOR Models
import { DeviceView } from './device/DeviceView';
import { SidebarVisibility } from './sidebar/SidebarVisibility';
import { FirebaseApp } from './firebase/FirebaseApp';
import { FirebaseAuth } from './firebase/FirebaseAuth';
import { ActiveMiniSidebar } from './sidebar/ActiveMiniSidebar';
import { ThemePreference } from './theme/ThemePreference';

export const PROVIDERS = () => [
  /**
   * ANCHOR Provider for ThemePreference
   *
   * NOTE Used for identifiying which theme to use
   */
  <ThemePreference.Provider key="ThemePreference" />,

  /**
   * ANCHOR Firebase App
   *
   * Initialize app and provides the instance
   */
  <FirebaseApp.Provider key="FirebaseApp" />,

  /**
   * ANCHOR Provider for FirebaseAuth
   *
   * NOTE Used for user authentication and signin-dependent views
   */
  <FirebaseAuth.Provider key="FirebaseAuth" />,

  /**
  * ANCHOR DeviceView Provider
  *
  * NOTE Used for monitoring orientation changes
  */
  <DeviceView.Provider key="DeviceView" />,

  /**
   * ANCHOR SidebarVisibility Provider
   *
   * NOTE Used for handling sidebar's visibility state
   */
  <SidebarVisibility.Provider key="SidebarVisibility" />,

  /**
   * ANCHOR ActiveMiniSidebar Provider
   *
   * NOTE Used for handling active links in sidebar
   */
  <ActiveMiniSidebar.Provider key="ActiveMiniSidebar" />,
];
