// ANCHOR Base
import { HeaderNavigationOverrides } from 'baseui/header-navigation';
import { BlockOverrides } from 'baseui/block';

// ANCHOR Themes
import { THEME } from '@themes/theme';

export const HEADER_NAVIGATION: HeaderNavigationOverrides = {
  Root: {
    style: {
      height: '24px',
      borderBottomStyle: 'none',
      display: 'flex',
      justifyContent: 'space-between',
      backgroundColor: THEME.colors.backgroundSecondary,
    },
  },
};

export const BLOCK: BlockOverrides = {
  Block: {
    style: {
      gridColumn: '1 / 3',
      gridRow: '1 / 2',
      boxShadow: THEME.shadow.shadow400,
      zIndex: 1,
    },
  },
};
