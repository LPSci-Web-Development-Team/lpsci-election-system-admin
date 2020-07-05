import { ITheme } from '@interfaces/Theme';
import { BlockOverrides } from 'baseui/block';

export const LRN: BlockOverrides = {
  Block: {
    style: ({ $theme }: ITheme) => ({
      color: $theme.colors.contentSecondary,
      marginTop: '8px',
    }),
  },
};

export const NAME: BlockOverrides = {
  Block: {
    style: {
      fontSize: '22px',
      lineHeight: 1.15,
    },
  },
};
