import { DrawerOverrides } from 'baseui/drawer';

export const DRAWER: DrawerOverrides = {
  Root: {
    style: {
      width: '300px',
      zIndex: 99,
    },
  },
  DrawerContainer: {
    style: {
      width: '300px',
    },
  },
  DrawerBody: {
    style: {
      marginTop: 0,
      marginLeft: 0,
      marginRight: 0,
      marginBottom: 0,
      display: 'grid',
      gridTemplateColumns: '72px auto',
    },
  },
};
