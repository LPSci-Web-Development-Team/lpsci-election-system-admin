import { ITheme } from '@interfaces/Theme';
import { BlockOverrides } from 'baseui/block';

export const BLOCK: BlockOverrides = {
  Block: {
    style: ({ $theme }: ITheme) => ({
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100vw',
      height: '100vh',
      backgroundColor: $theme.colors.backgroundPrimary,
    }),
  },
};
