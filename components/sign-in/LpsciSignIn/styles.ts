import { THEME } from '@themes/theme';
import { CardOverrides } from 'baseui/card';

export const CARD: CardOverrides = {
  Root: {
    style: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: '40px',
      paddingRight: '32px',
      paddingBottom: '8px',
      paddingLeft: '32px',
      borderTopWidth: 0,
      borderRightWidth: 0,
      borderBottomWidth: 0,
      borderLeftWidth: 0,
      boxShadow: THEME.shadow.shadow300,
      backgroundColor: THEME.colors.backgroundPrimary,
      borderRadius: '10px',
      width: '32%',

      [THEME.media.small]: {
        width: '80%',
        paddingRight: '16px',
        paddingLeft: '16px',
      },
    },
  },
  Contents: {
    style: {
      width: '100%',
    },
  },
  HeaderImage: {
    style: {
      height: '112px',
      marginBottom: 0,

      [THEME.media.small]: {
        height: '96px',
      },
    },
  },
  Title: {
    style: {
      textAlign: 'center',
      fontSize: '32px',
      marginBottom: '32px',

      [THEME.media.small]: {
        fontSize: '24px',
        marginBottom: '24px',
      },
    },
  },
};
