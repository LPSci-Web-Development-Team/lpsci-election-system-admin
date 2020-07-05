import { BlockOverrides } from 'baseui/block';

export const BLOCK: BlockOverrides = {
  Block: {
    style: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
  },
};

export const CONTENT: BlockOverrides = {
  Block: {
    style: {
      marginTop: 0,
      marginBottom: 0,
      fontSize: '20px',
      fontWeight: 500,
    },
  },
};
