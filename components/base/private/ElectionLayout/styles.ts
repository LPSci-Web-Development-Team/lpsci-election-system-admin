import { BlockOverrides } from 'baseui/block';

// ANCHOR Layout width
export const WIDTH = '100%';

export const BLOCK: BlockOverrides = {
  Block: {
    style: {
      display: 'grid',
      width: WIDTH,
    },
  },
};
