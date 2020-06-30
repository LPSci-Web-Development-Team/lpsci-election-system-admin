import { BlockOverrides } from 'baseui/block';
import { StyleObject } from 'styletron-react';
import { ITheme } from '@interfaces/Theme';

export const DIV = ({ $theme }: ITheme): StyleObject => ({
  display: 'flex',
  flexDirection: 'row',
  paddingLeft: '24px',
  paddingRight: '24px',
  paddingTop: '12px',
  paddingBottom: '12px',
  cursor: 'pointer',
  backgroundColor: $theme.colors.backgroundTertiary,

  ':hover': {
    backgroundColor: $theme.colors.backgroundSecondary,
  },
});

export const TEXT: BlockOverrides = {
  Block: {
    style: {
      marginLeft: '12px',
      lineHeight: '20px',
    },
  },
};
