import { BlockOverrides } from 'baseui/block';
import { StyleObject } from 'styletron-react';
import { THEME } from '@themes/theme';

interface ILink {
  $active: boolean;
}

export const LINK = ({ $active }: ILink): StyleObject => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  paddingLeft: '24px',
  paddingRight: '24px',
  paddingTop: '12px',
  paddingBottom: '12px',
  textDecoration: 'none',
  backgroundColor: $active
    ? THEME.colors.backgroundSecondary
    : 'transparent',

  ':hover': {
    backgroundColor: THEME.colors.backgroundSecondary,
  },
});

export const ICON: BlockOverrides = {
  Block: {
    style: {
      color: THEME.colors.contentTertiary,
      marginLeft: '8px',
    },
  },
};

export const TEXT: BlockOverrides = {
  Block: {
    style: {
      marginLeft: '16px',
      lineHeight: '20px',
    },
  },
};
