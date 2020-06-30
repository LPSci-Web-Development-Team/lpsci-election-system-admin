import { StyleObject } from 'styletron-react';
import { BlockOverrides } from 'baseui/block';
import { THEME } from '@themes/theme';
import { ButtonOverrides } from 'baseui/button';

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

interface IColor {
  $active: boolean;
}

export const COLOR = ({ $active }: IColor): StyleObject => ({
  color: $active
    ? THEME.colors.contentPrimary
    : THEME.colors.contentSecondary,
});

export const TEXT: BlockOverrides = {
  Block: {
    style: {
      fontSize: '10px',
      marginTop: '4px',
    },
  },
};
