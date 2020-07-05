import { ITheme } from '@interfaces/Theme';
import { BlockOverrides } from 'baseui/block';

export const BLOCK: BlockOverrides = {
  Block: {
    style: {
      display: 'grid',
      gridTemplateColumns: '14px auto',
      alignItems: 'center',
      gridColumnGap: '8px',
      marginBottom: '4px',
    },
  },
};

export const ICON: BlockOverrides = {
  Block: {
    style: ({ $theme }: ITheme) => ({
      color: $theme.colors.contentTertiary,
    }),
  },
};
