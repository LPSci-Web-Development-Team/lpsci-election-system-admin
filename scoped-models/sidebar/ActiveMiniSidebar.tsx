// ANCHOR React
import * as React from 'react';

// ANCHOR Next
import { useRouter } from 'next/router';

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
  const { pathname } = useRouter();

  const cleanPath = pathname.slice(1);
  const key = cleanPath.substring(0, cleanPath.indexOf('/'));

  const active = MINI_SIDEBAR.find((item) => item.identifier === key);

  const initialKey = active?.identifier ?? MINI_SIDEBAR[0].identifier;

  const initialLinks = active?.sublinks ?? MINI_SIDEBAR[0].sublinks;

  const [activeKey, setActiveKey] = React.useState<string>(initialKey);
  const [activeLinks, setActiveLinks] = React.useState<ILargeSidebar[]>(initialLinks);

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
