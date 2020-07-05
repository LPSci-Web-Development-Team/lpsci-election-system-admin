import { BlockOverrides } from 'baseui/block';

export const CURRENT: BlockOverrides = {
  Block: {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gridColumnGap: '24px',
      gridRowGap: '24px',
    },
  },
};
