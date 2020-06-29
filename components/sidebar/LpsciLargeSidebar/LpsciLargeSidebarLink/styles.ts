import { BlockOverrides } from 'baseui/block';
import { THEME } from '@themes/theme';
import { ButtonOverrides } from 'baseui/button';
import { StyleObject } from 'styletron-react';

export const LINK: StyleObject = {
  textDecoration: 'none',
};

export const BUTTON: ButtonOverrides = {
  BaseButton: {
    style: {
      width: '72px',
      height: '80px',
      display: 'flex',
      flexDirection: 'column',

      ':hover': {
        backgroundColor: THEME.colors.backgroundOverlayLight,
      },
    },
  },
};

export const TEXT: BlockOverrides = {
  Block: {
    style: {
      fontSize: '10px',
      marginTop: '4px',
    },
  },
};
