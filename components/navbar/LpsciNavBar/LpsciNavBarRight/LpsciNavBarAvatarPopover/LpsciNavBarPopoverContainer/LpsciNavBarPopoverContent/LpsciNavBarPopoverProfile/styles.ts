import { ITheme } from '@interfaces/Theme';
import { BlockOverrides } from 'baseui/block';

export const BLOCK: BlockOverrides = {
  Block: {
    style: ({ $theme }: ITheme) => ({
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      paddingLeft: '32px',
      paddingRight: '32px',
      paddingTop: '16px',
      paddingBottom: '16px',
      backgroundColor: $theme.colors.backgroundSecondary,
      cursor: 'pointer',
    }),
  },
};
