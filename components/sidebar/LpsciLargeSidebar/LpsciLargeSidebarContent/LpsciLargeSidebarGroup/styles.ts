import { THEME } from '@themes/theme';
import { BlockOverrides } from 'baseui/block';

export const BLOCK: BlockOverrides = {
  Block: {
    style: {
      marginBottom: '24px',
    },
  },
};

export const TEXT: BlockOverrides = {
  Block: {
    style: {
      marginBottom: '8px',
      marginLeft: '8px',
      color: THEME.colors.contentSecondary,
    },
  },
};
