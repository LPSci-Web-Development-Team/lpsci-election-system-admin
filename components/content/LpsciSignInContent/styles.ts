// ANCHOR Base
import { BlockOverrides } from 'baseui/block';

// ANCHOR Themes
import { THEME } from '@themes/theme';

export const BLOCK: BlockOverrides = {
  Block: {
    style: {
      display: 'flex',
      backgroundColor: THEME.colors.backgroundInversePrimary,
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
};
