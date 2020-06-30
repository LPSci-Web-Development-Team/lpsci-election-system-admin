// ANCHOR Base
import { BlockOverrides } from 'baseui/block';
import { ITheme } from '@interfaces/Theme';

export const BLOCK: BlockOverrides = {
  Block: {
    style: ({ $theme }: ITheme) => ({
      display: 'flex',
      backgroundColor: $theme.colors.backgroundSecondary,
      width: '100vw',
      height: '100vh',
      color: 'white',
    }),
  },
};

export const AREA: BlockOverrides = {
  Block: {
    style: {
      display: 'flex',
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
};
