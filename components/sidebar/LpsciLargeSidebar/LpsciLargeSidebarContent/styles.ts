import { BlockOverrides } from 'baseui/block';
import { THEME } from '@themes/theme';

export const LARGE: BlockOverrides = {
  Block: {
    style: {
      paddingTop: '20px',
      paddingBottom: '16px',
      overflow: 'hidden',
      height: 'calc(100% - 36px)',
    },
  },
};

export const BLOCK: BlockOverrides = {
  Block: {
    style: {
      backgroundColor: THEME.colors.backgroundPrimary,
      overflowX: 'hidden',
      boxShadow: THEME.shadow.shadow400,
    },
  },
};
