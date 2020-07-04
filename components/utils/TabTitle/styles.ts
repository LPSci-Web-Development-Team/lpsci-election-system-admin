import { ITheme } from '@interfaces/Theme';
import { BlockOverrides } from 'baseui/block';
import { BREAKPOINTS } from '@themes/breakpoints';

export const BLOCK: BlockOverrides = {
  Block: {
    style: ({ $theme }: ITheme) => ({
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: $theme.colors.contentPrimary,
    }),
  },
};

export const TITLE: BlockOverrides = {
  Block: {
    style: {
      textAlign: 'center',

      [BREAKPOINTS.small]: {
        marginLeft: 0,
        marginTop: 0,
        fontSize: '12px',
        lineHeight: 1.15,
      },
    },
  },
};
