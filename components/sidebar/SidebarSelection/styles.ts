import { BlockOverrides } from 'baseui/block';

export const BLOCK: BlockOverrides = {
  Block: {
    style: {
      marginTop: '-17px',
      marginLeft: '0px',
      marginRight: '40px',
    },
  },
};

export const SELECTED_SELECTION: BlockOverrides = {
  Block: {
    style: {
      width: '100%',
      fontWeight: 500,
      fontSize: '17px',
      backgroundColor: '#b5fff1',
      paddingTop: '15px',
      paddingRight: '10px',
      paddingBottom: '15px',
      paddingLeft: '25px',
    },
  },
};

export const SELECTION: BlockOverrides = {
  Block: {
    style: {
      width: '100%',
      fontWeight: 500,
      fontSize: '17px',
      paddingTop: '15px',
      paddingRight: '10px',
      paddingBottom: '15px',
      paddingLeft: '25px',
    },
  },
};
