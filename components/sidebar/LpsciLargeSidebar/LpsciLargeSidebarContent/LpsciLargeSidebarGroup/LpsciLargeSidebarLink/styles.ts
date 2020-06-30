import { BlockOverrides } from 'baseui/block';
import { StyleObject } from 'styletron-react';
import { ITheme } from '@interfaces/Theme';

interface ILink extends ITheme {
  $active: boolean;
}

export const LINK = ({ $active, $theme }: ILink): StyleObject => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  paddingLeft: '24px',
  paddingRight: '24px',
  paddingTop: '12px',
  paddingBottom: '12px',
  textDecoration: 'none',
  backgroundColor: $active
    ? $theme.colors.backgroundSecondary
    : 'transparent',

  ':hover': {
    backgroundColor: $theme.colors.backgroundSecondary,
  },
});

export const ICON: BlockOverrides = {
  Block: {
    style: ({ $theme }: ITheme) => ({
      color: $theme.colors.contentTertiary,
      marginLeft: '8px',
    }),
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
