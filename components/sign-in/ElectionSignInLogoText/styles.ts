import { BlockOverrides } from 'baseui/block';

export const ELECTIONS_CONTAINER: BlockOverrides = {
  Block: {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  },
};

export const ELECTIONS: BlockOverrides = {
  Block: {
    style: {
      fontWeight: 700,
      fontSize: '16px',
      marginTop: '5px',
      marginBottom: '10px',
      textTransform: 'uppercase',
      textAlign: 'center',
      lineHeight: 1.4,
    },
  },
};
