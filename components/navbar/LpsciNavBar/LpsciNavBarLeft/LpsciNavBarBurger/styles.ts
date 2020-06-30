import { ButtonOverrides } from 'baseui/button';
import { StyleObject } from 'styletron-react';

export const MENU_SIZE = 24;

export const BURGER: StyleObject = {
  paddingTop: 0,
  paddingLeft: '12px',
  paddingRight: '12px',
  paddingBottom: 0,
};

export const BUTTON: ButtonOverrides = {
  BaseButton: {
    style: {
      ':hover': {
        backgroundColor: 'transparent',
      },
    },
  },
};
