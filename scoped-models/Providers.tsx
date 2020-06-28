// ANCHOR React
import * as React from 'react';

// ANCHOR Models
import { DeviceView } from './device/DeviceView';
import { SidebarVisibility } from './sidebar/SidebarVisibility';
import { FirebaseApp } from './firebase/FirebaseApp';
import { FirebaseAuth } from './firebase/FirebaseAuth';

export const PROVIDERS = () => [
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
   * NOTE Used for handling sidebar state
   */
  <SidebarVisibility.Provider key="SidebarVisibility" />,
];
