import { BlockOverrides } from 'baseui/block';
import { StyleObject } from 'styletron-react';
import { THEME } from '@themes/theme';

export const LINK: StyleObject = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  paddingLeft: '24px',
  paddingRight: '24px',
  paddingTop: '12px',
  paddingBottom: '12px',
  textDecoration: 'none',
  backgroundColor: 'transparent',

  ':hover': {
    backgroundColor: THEME.colors.backgroundTertiary,
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
