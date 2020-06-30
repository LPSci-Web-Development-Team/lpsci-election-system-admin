import { BlockOverrides } from 'baseui/block';
import { ITheme } from '@interfaces/Theme';

export const ROOT: BlockOverrides = {
  Block: {
    style: ({ $theme }: ITheme) => ({
      minWidth: '240px',
      boxShadow: $theme.shadow.shadow400,
    }),
  },
};

export const BLOCK: BlockOverrides = {
  Block: {
    style: ({ $theme }: ITheme) => ({
      backgroundColor: $theme.colors.backgroundTertiary,
      paddingTop: '8px',
      paddingBottom: '8px',
      width: '100%',
    }),
  },
};
