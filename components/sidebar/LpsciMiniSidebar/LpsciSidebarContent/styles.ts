import { BlockOverrides } from 'baseui/block';

export const MINI: BlockOverrides = {
  Block: {
    style: {
      paddingTop: '16px',
      paddingLeft: '8px',
      paddingRight: '8px',
      paddingBottom: '16px',
      overflow: 'hidden',
      height: 'calc(100% - 32px)',
    },
  },
};
