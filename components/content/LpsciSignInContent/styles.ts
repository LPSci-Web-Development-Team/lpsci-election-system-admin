// ANCHOR Base
import { BlockOverrides } from 'baseui/block';

// ANCHOR Themes
import { THEME } from '@themes/theme';

export const BLOCK: BlockOverrides = {
  Block: {
    style: {
      display: 'flex',
      backgroundColor: THEME.colors.backgroundTertiary,
      width: '100vw',
      height: '100vh',
      color: 'white',
    },
  },
};

export const AREA: BlockOverrides = {
  Block: {
    style: {
      display: 'flex',
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
};
