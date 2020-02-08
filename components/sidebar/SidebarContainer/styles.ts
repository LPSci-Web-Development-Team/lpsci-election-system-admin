import { BlockOverrides } from 'baseui/block';

const drawerWidth = '326px';

export const OUTER: BlockOverrides = {
  Block: {
    style: {
      position: 'fixed',
      width: drawerWidth,
      backgroundColor: '#f8f8f8',
      marginTop: '-8px',
      marginLeft: '-8px',
      height: '100vh',
    },
  },
};

export const INNER: BlockOverrides = {
  Block: {
    style: {
      paddingLeft: '20px',
      paddingTop: '10px',
      paddingRight: '20px',
      paddingBottom: '20px',
    },
  },
};
