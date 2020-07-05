import { ITheme } from '@interfaces/Theme';
import { BlockOverrides } from 'baseui/block';

export const BLOCK: BlockOverrides = {
  Block: {
    style: ({ $theme }: ITheme) => ({
      width: 'calc(100% - 32px)',
      paddingTop: '16px',
      paddingBottom: '16px',
      paddingLeft: '16px',
      paddingRight: '16px',
      backgroundColor: $theme.colors.backgroundSecondary,
      boxShadow: $theme.shadow.shadow600,
    }),
  },
};

export const LABEL: BlockOverrides = {
  Block: {
    style: ({ $theme }: ITheme) => ({
      color: $theme.colors.contentSecondary,
    }),
  },
};

export const CONTENT: BlockOverrides = {
  Block: {
    style: {
      marginTop: '12px',
      marginBottom: 0,
      fontSize: '20px',
      fontWeight: 500,
    },
  },
};
