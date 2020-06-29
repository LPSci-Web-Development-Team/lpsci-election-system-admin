// ANCHOR Base
import { HeaderNavigationOverrides } from 'baseui/header-navigation';
import { BlockOverrides } from 'baseui/block';

export const HEADER_NAVIGATION: HeaderNavigationOverrides = {
  Root: {
    style: {
      height: '24px',
      borderBottomStyle: 'none',
      display: 'flex',
      justifyContent: 'space-between',
    },
  },
};

export const BLOCK: BlockOverrides = {
  Block: {
    style: {
      gridColumn: '1 / 3',
      gridRow: '1 / 2',
      boxShadow: `
        0 1px 1px rgba(0,0,0,0.03),
        0 2px 2px rgba(0,0,0,0.03),
        0 4px 4px rgba(0,0,0,0.03)
      `,
    },
  },
};
