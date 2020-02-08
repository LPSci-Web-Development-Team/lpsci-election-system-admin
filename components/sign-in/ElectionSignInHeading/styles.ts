import { BlockOverrides } from 'baseui/block';

export const HEADING_CONTAINER: BlockOverrides = {
  Block: {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  },
};

export const HEADING: BlockOverrides = {
  Block: {
    style: {
      fontWeight: 700,
      marginTop: '0px',
      marginBottom: '20px',
      textAlign: 'center',
    },
  },
};
