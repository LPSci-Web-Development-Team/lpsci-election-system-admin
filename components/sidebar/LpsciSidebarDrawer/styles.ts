import { BlockOverrides } from 'baseui/block';

import { ITheme } from '@interfaces/Theme';

export const BLOCK: BlockOverrides = {
  Block: {
    style: ({ $theme }: ITheme) => ({
      gridColumn: '1 / 2',
      gridRow: '2 / 3',
      backgroundColor: $theme.colors.backgroundSecondary,
      overflowX: 'hidden',
      boxShadow: $theme.shadow.shadow400,
    }),
  },
};
