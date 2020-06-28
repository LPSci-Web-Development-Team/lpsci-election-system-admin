// ANCHOR React
import * as React from 'react';

// ANCHOR Models
import { DeviceView } from './device/DeviceView';
import { SidebarVisibility } from './sidebar/SidebarVisibility';

export const PROVIDERS = () => [
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
