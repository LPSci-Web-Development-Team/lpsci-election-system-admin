// ANCHOR React
import * as React from 'react';

// ANCHOR Model
import createModel from '@lxsmnsyc/react-scoped-model';

// ANCHOR Interfaces
import { ILargeSidebar } from '@interfaces/Sidebar';

// ANCHOR Constants
import { MINI_SIDEBAR } from '@constants/sidebar';

type SetState<T> = React.Dispatch<React.SetStateAction<T>>;

interface IState {
  state: {
    activeKey: string;
    activeLinks: ILargeSidebar[]
  };
  handler: {
    activeKey: SetState<string>;
    activeLinks: SetState<ILargeSidebar[]>
  }
}

export const ActiveMiniSidebar = createModel<IState>(() => {
  const [activeKey, setActiveKey] = React.useState<string>(MINI_SIDEBAR[0].identifier);
  const [activeLinks, setActiveLinks] = React.useState<ILargeSidebar[]>(MINI_SIDEBAR[0].sublinks);

  return {
    state: {
      activeKey,
      activeLinks,
    },
    handler: {
      activeKey: setActiveKey,
      activeLinks: setActiveLinks,
    },
  };
},
{
  displayName: 'Models.ActiveMiniSidebar',
});
