import { ITheme } from '@interfaces/Theme';
import { BlockOverrides } from 'baseui/block';

export const BLOCK: BlockOverrides = {
  Block: {
    style: {
      display: 'grid',
      gridTemplateColumns: '14px auto',
      alignItems: 'flex-end',
      gridColumnGap: '8px',
      marginBottom: '12px',
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

export const LABEL: BlockOverrides = {
  Block: {
    style: {
      marginBottom: '1px',
    },
  },
};
