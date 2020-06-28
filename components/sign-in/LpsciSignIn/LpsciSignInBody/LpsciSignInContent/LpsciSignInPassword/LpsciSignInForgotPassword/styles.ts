import { ButtonOverrides } from 'baseui/button';

export const BUTTON: ButtonOverrides = {
  BaseButton: {
    style: {
      paddingTop: 0,
      paddingRight: 0,
      paddingBottom: 0,
      paddingLeft: 0,
      marginTop: '8px',

      ':hover': {
        backgroundColor: 'transparent',
      },
    },
  },
};
