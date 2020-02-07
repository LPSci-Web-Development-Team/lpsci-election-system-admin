import { BlockOverrides } from 'baseui/block';

// ANCHOR Layout width
export const WIDTH = '100%';

// ANCHOR Layout height
export const HEIGHT = '100%';

// ANCHOR Grid column definition when on mobile
export const MOBILE_COLUMN = '100%';

export const BLOCK: BlockOverrides = {
  Block: {
    style: {
      display: 'grid',
      width: WIDTH,
      height: HEIGHT,
      overflow: 'hidden',
    },
  },
};
