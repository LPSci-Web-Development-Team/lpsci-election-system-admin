import { BlockOverrides } from 'baseui/block';
import { THEME } from '@themes/theme';

export const ROOT: BlockOverrides = {
  Block: {
    style: {
      minWidth: '240px',
      borderTopColor: THEME.colors.primary,
      borderTopStyle: 'solid',
      borderTopWidth: '2px',
      borderRightColor: THEME.colors.primary,
      borderRightStyle: 'solid',
      borderRightWidth: '2px',
      borderBottomColor: THEME.colors.primary,
      borderBottomStyle: 'solid',
      borderBottomWidth: '2px',
      borderLeftColor: THEME.colors.primary,
      borderLeftStyle: 'solid',
      borderLeftWidth: '2px',
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
