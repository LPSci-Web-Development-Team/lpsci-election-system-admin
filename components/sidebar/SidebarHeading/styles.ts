import { BlockOverrides } from 'baseui/block';

export const BLOCK: BlockOverrides = {
  Block: {
    style: {
      display: 'flex',
      alignItems: 'center',
      backgroundColor: '#ffffff',
      paddingTop: '15px',
      paddingBottom: '15px',
      paddingLeft: '18px',
      marginTop: '-10px',
      marginLeft: '-20px',
    },
  },
};

export const HEADING: BlockOverrides = {
  Block: {
    style: {
      fontWeight: 700,
      fontSize: '20px',
      marginLeft: '15px',
    },
  },
};
