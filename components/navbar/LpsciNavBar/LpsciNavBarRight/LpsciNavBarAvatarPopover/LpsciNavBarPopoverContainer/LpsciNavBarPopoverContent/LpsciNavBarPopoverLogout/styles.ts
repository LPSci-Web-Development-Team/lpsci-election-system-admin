import { BlockOverrides } from 'baseui/block';
import { StyleObject } from 'styletron-react';
import { THEME } from '@themes/theme';

export const DIV: StyleObject = {
  display: 'flex',
  flexDirection: 'row',
  paddingLeft: '24px',
  paddingRight: '24px',
  paddingTop: '12px',
  paddingBottom: '12px',
  cursor: 'pointer',
  backgroundColor: THEME.colors.backgroundTertiary,

  ':hover': {
    backgroundColor: THEME.colors.backgroundSecondary,
  },
};

export const TEXT: BlockOverrides = {
  Block: {
    style: {
      marginLeft: '12px',
      lineHeight: '20px',
    },
  },
};
