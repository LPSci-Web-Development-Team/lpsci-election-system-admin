import { BlockOverrides } from 'baseui/block';

import { THEME } from '@themes/theme';

export const BLOCK: BlockOverrides = {
  Block: {
    style: {
      gridColumn: '1 / 2',
      gridRow: '2 / 3',
      backgroundColor: THEME.colors.backgroundTertiary,
      overflowX: 'hidden',
      boxShadow: THEME.shadow.shadow500,
    },
  },
};
