import { BlockOverrides } from 'baseui/block';
import { ITheme } from '@interfaces/Theme';

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
    style: ({ $theme }: ITheme) => ({
      backgroundColor: $theme.colors.backgroundPrimary,
      overflowX: 'hidden',
      boxShadow: $theme.shadow.shadow400,
    }),
  },
};
