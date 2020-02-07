import { BlockOverrides } from 'baseui/block';

export const INNER: BlockOverrides = {
  Block: {
    style: {
      paddingTop: '10px',
      paddingBottom: '10px',
      paddingRight: '0px',
      paddingLeft: '0px',
      width: '100%',
    },
  },
};

// ANCHOR Min width for mobile (or when the sidebar is opened)
export const MOBILE_MIN_WIDTH = '100%';

export const OUTER: BlockOverrides = {
  Block: {
    style: {
      marginTop: '0px',
      marginBottom: '0px',
      marginLeft: '10%',
      marginRight: '10%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
    },
  },
};
