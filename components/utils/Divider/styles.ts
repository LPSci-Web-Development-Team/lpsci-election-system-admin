import { BlockOverrides } from 'baseui/block';
import { ITheme } from '@interfaces/Theme';

export const DIVIDER: BlockOverrides = {
  Block: {
    style: ({ $theme }: ITheme) => ({
      width: '100%',
      borderBottomColor: $theme.colors.mono500,
      borderBottomWidth: '1px',
      borderBottomStyle: 'solid',
      marginTop: '20px',
      marginBottom: '20px',
    }),
  },
};
