import { BlockOverrides } from 'baseui/block';

export const BLOCK: BlockOverrides = {
  Block: {
    style: {
      marginTop: '40px',
    },
  },
};

export const HISTORY: BlockOverrides = {
  Block: {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr',
      gridRowGap: '16px',
    },
  },
};
