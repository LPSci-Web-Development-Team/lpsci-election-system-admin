import { ITheme } from '@interfaces/Theme';
import { BlockOverrides } from 'baseui/block';

export const BLOCK: BlockOverrides = {
  Block: {
    style: {
      marginBottom: '16px',
    },
  },
};

export const TEXT: BlockOverrides = {
  Block: {
    style: ({ $theme }: ITheme) => ({
      marginBottom: '8px',
      marginLeft: '16px',
      color: $theme.colors.contentSecondary,
    }),
  },
};
