import { BlockOverrides } from 'baseui/block';

export const INNER: BlockOverrides = {
  Block: {
    style: {
      paddingTop: '30px',
      paddingBottom: '80px',
      paddingRight: '0px',
      paddingLeft: '0px',
      width: '100%',
      marginBottom: '1vw',
    },
  },
};

export const OUTER: BlockOverrides = {
  Block: {
    style: {
      display: 'block',
    },
  },
};
