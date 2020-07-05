import { ITheme } from '@interfaces/Theme';
import { BlockOverrides } from 'baseui/block';

export const LRN: BlockOverrides = {
  Block: {
    style: ({ $theme }: ITheme) => ({
      color: $theme.colors.contentSecondary,
      marginTop: '4px',
    }),
  },
};
