import { BlockOverrides } from 'baseui/block';
import { THEME } from '@themes/theme';

export const ROOT: BlockOverrides = {
  Block: {
    style: {
      minWidth: '240px',
      boxShadow: THEME.shadow.shadow400,
    },
  },
};

export const BLOCK: BlockOverrides = {
  Block: {
    style: {
      backgroundColor: THEME.colors.backgroundTertiary,
      paddingTop: '8px',
      paddingBottom: '8px',
      width: '100%',
    },
  },
};
