// ANCHOR Base
import { HeaderNavigationOverrides } from 'baseui/header-navigation';
import { BlockOverrides } from 'baseui/block';

// ANCHOR Themes
import { ITheme } from '@interfaces/Theme';

export const HEADER_NAVIGATION: HeaderNavigationOverrides = {
  Root: {
    style: ({ $theme }: ITheme) => ({
      height: '32px',
      borderBottomStyle: 'none',
      display: 'flex',
      justifyContent: 'space-between',
      backgroundColor: $theme.colors.backgroundSecondary,
    }),
  },
};

export const BLOCK: BlockOverrides = {
  Block: {
    style: ({ $theme }: ITheme) => ({
      gridColumn: '1 / 3',
      gridRow: '1 / 2',
      boxShadow: $theme.shadow.shadow400,
      zIndex: 0,
    }),
  },
};
