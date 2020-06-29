import { BlockOverrides } from 'baseui/block';
import { StyleObject } from 'styletron-react';
import { THEME } from '@themes/theme';

export const LINK: StyleObject = {
  display: 'flex',
  flexDirection: 'row',
  paddingLeft: '24px',
  paddingRight: '24px',
  paddingTop: '12px',
  paddingBottom: '12px',
  textDecoration: 'none',
  backgroundColor: THEME.colors.backgroundSecondary,

  ':hover': {
    backgroundColor: THEME.colors.backgroundTertiary,
  },
};

export const TEXT: BlockOverrides = {
  Block: {
    style: {
      marginLeft: '12px',
    },
  },
};
