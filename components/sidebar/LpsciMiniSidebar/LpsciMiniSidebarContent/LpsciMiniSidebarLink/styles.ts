import { StyleObject } from 'styletron-react';
import { ITheme } from '@interfaces/Theme';
import { ButtonOverrides } from 'baseui/button';

export const BUTTON: ButtonOverrides = {
  BaseButton: {
    style: ({ $theme }: ITheme) => ({
      width: '72px',
      height: '80px',
      display: 'flex',
      flexDirection: 'column',

      ':hover': {
        backgroundColor: $theme.colors.backgroundOverlayLight,
      },
    }),
  },
};

interface IColor extends ITheme {
  $active: boolean;
}

export const COLOR = ({ $active, $theme }: IColor): StyleObject => ({
  color: $active
    ? $theme.colors.contentPrimary
    : $theme.colors.contentTertiary,
});

export const TEXT = ({ $active, $theme }: IColor): StyleObject => ({
  color: $active
    ? $theme.colors.contentPrimary
    : $theme.colors.contentTertiary,
  fontSize: '10px',
  marginTop: '4px',
  marginBottom: 0,
  width: '100%',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
});
